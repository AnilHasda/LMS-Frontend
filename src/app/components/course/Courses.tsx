"use client";

import { AddCourseForm } from "@/app/admincomponents/shared/AddCourseForm";
import React, { useEffect } from "react";
import useFetchData from "@/app/hooks/FetchData";
import { ClipLoader } from "react-spinners";
import CourseCard from "@/app/components/course/CourseCard";

import { FiCode, FiBook, FiZap, FiCpu, FiTool } from "react-icons/fi";

const dummyCourses = [
  {
    id: 1,
    icon: FiCode,
    heading: "React for Beginners",
    level: "Beginner",
    description: "Learn React fundamentals and build your first app.",
    duration: "4 months",
  },
  {
    id: 2,
    icon: FiBook,
    heading: "Scratch Programming",
    level: "Beginner",
    description: "Intro to Scratch for kids to create interactive stories.",
    duration: "3 months",
  },
  {
    id: 3,
    icon: FiZap,
    heading: "Next.js Advanced",
    level: "Advanced",
    description: "Build scalable React apps with Next.js framework.",
    duration: "5 months",
  },
  {
    id: 4,
    icon: FiCpu,
    heading: "Python Basics",
    level: "Intermediate",
    description: "Master Python programming from scratch to advanced.",
    duration: "6 months",
  },
  {
    id: 5,
    icon: FiTool,
    heading: "JavaScript Deep Dive",
    level: "Intermediate",
    description: "Understand JS deeply including ES6+ features.",
    duration: "4 months",
  },
];

const Courses = () => {
  const { getData, result, loading, responseError } = useFetchData();
  const [courses, setCourses] = React.useState<any[]>(dummyCourses);

  useEffect(() => {
    (async () => {
      await getData("/course/teacher-courses");
    })();
  }, []);

  useEffect(() => {
    if (result?.data?.courses) {
      setCourses(result.data.courses);
    } else {
      setCourses(dummyCourses);
    }
  }, [result]);

  if (loading)
    return (
      <div className="h-full w-full grid place-content-center">
        <ClipLoader />
      </div>
    );

  // if (responseError)
  //   return (
  //     <div className="grid place-content-center text-red-500 mt-10 font-bold">
  //       Something went wrong, please try again later
  //     </div>
  //   );

  return (
    <div>
      <AddCourseForm />
      <div className="w-full flex flex-wrap gap-10 justify-center">
        {courses.length > 0 ? (
          courses.map((ele) => <CourseCard key={ele.id} courseData={ele} />)
        ) : (
          <div>No courses available.</div>
        )}
      </div>
    </div>
  );
};

export default Courses;
