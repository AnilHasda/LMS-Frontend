import React from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import "./OusrServices.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
const OurServices = () => {
  const services = [
    "Web Development",
    "App Development",
    "Coding Class",
    "Graphics Desing",
    "Workshop",
    "IT Consultant",
  ];
  return (
    <section className="my-20 mb-32 mt-32">
      {/* heading or  intro section */}
      <div className="text-center">
        <div className="flex gap-2 items-center justify-center">
          <span className="text-[#FF8C5A] text-sm animate-bounce">
            <Sparkles />
          </span>
          <span className="text-gray-400">Our services section</span>
        </div>
        <h1 className="font-bold text-4xl pb-3 py-4">
          We provide quality services
        </h1>
      </div>
      {/* main div for other two section */}
      <div className="flex gap-10 overflow-hidden px-30 mt-10">
        {/* intro section */}
        <div className="flex-1 italic text-justify">
          <div className="flex">
            <FaQuoteLeft/>
            <span>
              We specialize in turning ideas into impactful digital experiences.
              From building stunning websites and mobile apps to offering expert
              coding classes, graphic design, and hands-on workshops — our
              services are crafted to help you grow and succeed in the modern
              digital landscape.
            </span>
          </div>

          <div className="pt-5 flex">
            <span>
              Whether you're a business looking to elevate your online presence
              or an individual ready to upskill, we blend technical excellence
              with creative thinking to deliver fast, reliable, and future-ready
              solutions. With a focus on innovation and results, we’re here to
              empower your journey through technology.
            </span>
            <FaQuoteRight />
          </div>
          {/* CEO message */}
          <div className="flex gap-5 items-center mt-10">
            <div className="relative h-12 w-12 rounded-full bg-amber-300 overflow-hidden">
              <Image
                src="/students/stud1.jpg"
                alt="ceo_profile"
                fill
                className="object-cover object-center"
              />
            </div>
            <p className="not-italic">-Message from CEO</p>
          </div>
        </div>
        {/* left section */}
        <section className="flex-1">
          <ul className="main-list list-none">
            {services.map((ele: any, index: number) => {
              return <li key={index}>{ele}</li>;
            })}
          </ul>
        </section>
        {/* right section */}
        <section className="flex-1 flex w-full items-center">
          <div className=" group relative bg-[#006A62] rounded-3xl h-[300px] w-full hover:scale-105 transition-all duration-500">
            {/* this is for border  */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-l-4 border-t-4  border-l-[#006A62] border-t-[#006A62]  transition-all duration-500 rounded-tl-3xl group-hover:scale-110"></div>
            <div className="absolute -top-3 -right-3 w-12 h-12 border-r-4 border-t-4  border-r-[#006A62] border-t-[#006A62]  transition-all duration-500 rounded-tr-3xl group-hover:scale-110"></div>
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-l-4 border-b-4  border-l-[#006A62] border-b-[#006A62]  transition-all duration-500 rounded-bl-3xl group-hover:scale-110"></div>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-4 border-b-4  border-r-[#006A62] border-b-[#006A62]  transition-all duration-500 rounded-br-3xl group-hover:scale-110"></div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default OurServices;
