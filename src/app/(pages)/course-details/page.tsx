"use client";

import { AiOutlinePython } from "react-icons/ai";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const CourseDetailsPage = () => {
  // ✅ Static mock data (replace with props or fetch later)
  const course = {
    title: "Python Programming",
    level: "Beginner",
    icon: <AiOutlinePython size={32} />,
    description:
      "Learn Python programming from scratch. Ideal for beginners with no prior coding experience.",
    image: "/images/python-banner.png", // public folder
    topics: [
      "Installing Python and VS Code",
      "Variables, Data Types, and Operators",
      "Control Flow (if, for, while)",
      "Functions and Modules",
      "Lists, Tuples, Dictionaries",
      "Object-Oriented Programming",
    ],
    benefits: [
      "Hands-on practice with real-world projects",
      "Instructor support available",
      "Certificate upon completion",
      "No prior experience required",
    ],
  };

  return (
    <section className="w-full px-5 md:px-20 py-10 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Side - Text */}
        <div className="md:w-2/3 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-[#006A62] text-2xl font-semibold">
            {course.icon}
            {course.title} ({course.level})
          </div>
          <h1 className="text-4xl font-bold text-gray-800">
            {course.title} - Complete Guide
          </h1>
          <p className="text-gray-600 text-lg">{course.description}</p>

          <h2 className="text-2xl font-semibold mt-6">What you'll learn</h2>
          <ul className="list-disc list-inside text-gray-700">
            {course.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Why take this course?</h2>
          <ul className="list-disc list-inside text-gray-700">
            {course.benefits.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <div className="mt-6">
            <Button className="bg-[#FF8C5A] hover:bg-[#ff763b] text-white px-6 py-3 rounded-lg text-lg">
              Enroll Now
            </Button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/3">
          <Image
            src={course.image}
            alt={`${course.title} banner`}
            width={500}
            height={300}
            className="rounded-xl shadow-md object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsPage;
