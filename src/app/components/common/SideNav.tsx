import React from "react";
import Link from "next/link";
import { SideNavLinks } from "@/app/@types/sidenav.link";
const SideNav = ({links}:{links:SideNavLinks[]}) => {
  return (
    <nav className="flex flex-col gap-10 w-60 border-r border-r-[#FF8C5A] px-5 pt-10">
      {links.map((ele, index) => {
        return (
          <Link key={index} href={ele.label} className="h-10 w-full bg-[#FF8C5A] text-white grid place-content-center rounded-sm">
            {ele.item}
          </Link>
        );
      })}
    </nav>
  );
};

export default SideNav;
