"use client";
import { AddCourseForm } from "@/app/admincomponents/shared/AddCourseForm";
import React, { useEffect, useState } from "react";
import useFetchData from "@/app/hooks/FetchData";
import { ClipLoader } from "react-spinners";
import CourseCard from "@/app/components/course/CourseCard";
import { Search } from "lucide-react";

const Courses = () => {
  const { getData, result, loading, responseError } = useFetchData();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    (async () => {
      await getData("/course/");
    })();
  }, []);

  useEffect(() => {
    console.log({ courseDetail: result?.data?.courses });
  }, [result]);

  // client-side filter
  const filteredCourses =
    result?.data?.courses?.filter((course: any) =>
      (course.title || "").toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="p-6">
      {/* Top Section: Search (left) + Single Add Button (right) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        {/* Search Bar - grows to fill available space */}
        <div className="flex items-center border rounded-lg overflow-hidden shadow-sm bg-white flex-1">
          <Search className="ml-3 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search courses..."
            className="p-2 flex-1 outline-none text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Single Add Course Button on the right */}
             {/* Add Course Form */}
      <div id="add-course-section" className="">
        <AddCourseForm />
      </div>
      </div>

      {/* Courses Area - loader / error / list */}
      <div className="w-full flex flex-wrap gap-6 justify-center min-h-[180px]">
        {loading ? (
          // centered loader inside the courses area
          <div className="w-full h-40 grid place-content-center">
            <ClipLoader />
          </div>
        ) : responseError ? (
          // error message shown in-place where courses would be
          <div className="w-full max-w-2xl bg-red-50 border border-red-200 rounded-lg p-6 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-red-700 mb-2">
              Something went wrong
            </h3>
            <p className="text-sm text-red-600">
              {responseError?.data?.message ||
                "Unable to load courses right now. Please try again later."}
            </p>
          </div>
        ) : filteredCourses.length > 0 ? (
          filteredCourses.map((ele: any) => (
            <CourseCard key={ele.id} courseData={ele} />
          ))
        ) : (
          // empty state shown in the same area
          <div className="w-full text-center text-gray-500 font-medium">
            No courses found.
          </div>
        )}
      </div>


    </div>
  );
};

export default Courses;
