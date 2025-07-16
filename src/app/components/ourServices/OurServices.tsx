import React from "react";
import "./OusrServices.css";
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
    <section className="flex gap-20 px-30 my-20">
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
        <div className=" group relative bg-[#006A62] rounded-3xl max-h-[300px] w-full">
          {/* this is for border  */}
          <div className="absolute -top-3 -left-3 w-12 h-12 border-l-4 border-t-4  border-l-[#006A62] border-t-[#006A62]  transition-all duration-500 rounded-tl-3xl group-hover:scale-110"></div>
          <div className="absolute -top-3 -right-3 w-12 h-12 border-r-4 border-t-4  border-r-[#006A62] border-t-[#006A62]  transition-all duration-500 rounded-tr-3xl group-hover:scale-110"></div>
          <div className="absolute -bottom-3 -left-3 w-12 h-12 border-l-4 border-b-4  border-l-[#006A62] border-b-[#006A62]  transition-all duration-500 rounded-bl-3xl group-hover:scale-110"></div>
          <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-4 border-b-4  border-r-[#006A62] border-b-[#006A62]  transition-all duration-500 rounded-br-3xl group-hover:scale-110"></div>
        </div>
      </section>
    </section>
  );
};

export default OurServices;
