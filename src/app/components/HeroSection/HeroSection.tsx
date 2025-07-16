"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import "./HeroSection.css";
import ButtonWithBg from "../ui/ButtonWithBg";
import { Star } from "lucide-react";
import { Arapey } from "next/font/google";
import { AiOutlinePython } from "react-icons/ai";
import { TbBrandJavascript } from "react-icons/tb";
import { SiScratch } from "react-icons/si";
import { LiaLaptopCodeSolid } from "react-icons/lia";
const HeroSectionCard = () => {
  return (
    <div
      className="relative min-h-screen w-[500px] bg-[#006A62] text-white rounded-sm border-4 border-[#FF8C5A] border-t-0 border-b-0"
      role="main-card-container"
      aria-label="hero-section-card"
    >
      {/* right section of hero section circle */}
      <div className="absolute h-24 w-24 rounded-full  right-16 bottom-10 overflow-hidden rotate-45">
        {[...new Array(23)].map((ele: any) => {
          return <div className="h-[2px] w-full bg-gray-300 mb-1"></div>;
        })}
      </div>
      <div
        className="group z-20 hero-card rounded-3xl flex flex-col gap-5 shadow-2xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/logo/logo.png')" }}
      >
        {/* this is for border  */}
        <div className="absolute -top-3 -left-3 w-12 h-12 border-l-4 border-t-4  border-l-[#006A62] border-t-[#006A62]  transition-all duration-500 rounded-tl-3xl group-hover:scale-110"></div>
        <div className="absolute -top-3 -right-3 w-12 h-12 border-r-4 border-t-4  border-r-[#FF8C5A] border-t-[#FF8C5A]  transition-all duration-500 rounded-tr-3xl group-hover:scale-110"></div>
        <div className="absolute -bottom-3 -left-3 w-12 h-12 border-l-4 border-b-4  border-l-[#006A62] border-b-[#006A62]  transition-all duration-500 rounded-bl-3xl group-hover:scale-110"></div>
        <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-4 border-b-4  border-r-[#FF8C5A] border-b-[#FF8C5A]  transition-all duration-500 rounded-br-3xl group-hover:scale-110"></div>
        {/* {[...new Array(15)].map((ele: any) => {
          return (
            <div className="relative  z-10 w-full h-[15px] bg-[#006A62] rotate-6 -translate-2.5"></div>
          );
        })} */}
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
            <span className="pl-40 pt-2 text-[#006A62] ">
              1000+ Active Students
            </span>
          </div>
        </div>
      </div>
      {/* Image card section*/}
      <div className="absolute right-10 top-0 z-10">
        {/* icon section */}
        <div className="absolute text-4xl mx-auto z-10 w-full h-full">
          <LiaLaptopCodeSolid className="absolute left-20 top-36 text-[#FF8C5A] animate-pulse" />
          <AiOutlinePython className="absolute top-60 right-20 text-[gold] animate-spin"style={{animationDuration:"5s"}} />
          <TbBrandJavascript className="absolute text-white bottom-60 right-40 animate-ping" style={{animationDuration:"3s"}}/>
          <SiScratch className="absolute text-[#FF8C5A] left-20 bottom-10 animate-bounce" />
        </div>
        <HeroSectionCard />
      </div>
    </section>
  );
};
