"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import "./HeroSection.css";
import ButtonWithBg from "../ui/ButtonWithBg";
import { Star } from "lucide-react";
const HeroSectionCard = () => {
  return (
    <div
      className="relative min-h-screen w-[500px] bg-[#006A62] text-white rounded-sm"
      role="main-card-container"
      aria-label="hero-section-card"
    >
      <div className="hero-card overflow-hidden flex flex-col gap-5 shadow-2xl">
        {[...new Array(15)].map((ele: any) => {
          return (
            <div className=" relative w-full h-[15px] bg-[#006A62] rotate-6 -translate-2.5"></div>
          );
        })}
      </div>
    </div>
  );
};

const StudentProfile = () => {
  const students = [
    { profile: "/students/stud1.jpg" },
    { profile: "/students/stud2.jpg" },
    { profile: "/students/stud3.jpg" },
    { profile: "/students/stud4.jpg" },
    { profile: "/students/stud5.jpg" },
  ];
  return (
    <div className=" relative">
      {students.map((ele, index) => {
        return (
          <div
            key={index}
            className={clsx("absolute h-10 w-10 bg-amber-600 rounded-full ")}
            style={{ left: `${index * 25}px` }}
          >
            <Image
              src={ele.profile}
              alt="student_picture"
              fill
              className="object-cover rounded-full"
            />
          </div>
        );
      })}
    </div>
  );
};
export const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] overflow-hidden bg-[#FFF5F0] px-30 flex items-center">
      <div className="z-10 mx-auto py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div>
          <div className="text-[#FF8C5A] flex gap-2 items-center animate-bounce">
            <Star className="" />
            <span className="text-[#006A62]">
              Free tier classes are available
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#006A62] leading-tight">
            <span>Build your skills on the </span>
            <span className="text-[#FF8C5A] animate-pulse">Best </span>
            <span>platform</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Learn, submit assignments, earn certificates and grow your skills
            with our interactive LMS platform.
          </p>
          {/* button section */}
          <div className="mt-8 flex space-x-4">
            <Link href="/courses">
              <ButtonWithBg background="#006A62">Get Started</ButtonWithBg>
            </Link>
            <Link href="/register">
              <ButtonWithBg background="#FF8C5A">Brow courses</ButtonWithBg>
            </Link>
          </div>
          {/* student profile  */}
          <div className="mt-10 h-10 flex">
            <StudentProfile />
            <span className="pl-40 pt-2 text-[#006A62] ">1000+ Active Students</span>
          </div>
        </div>
      </div>
      {/* Image card section*/}
      <div className="absolute right-10 top-0 z-10">
        <HeroSectionCard />
      </div>
    </section>
  );
};
