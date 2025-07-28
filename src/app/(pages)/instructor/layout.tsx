import React from "react";
import SideNav from "../../components/common/SideNav";
const instructorlinks = [
    { item: "Dashboad", label: "/instructor/" },
    { item: "Courses", label: "/instructor/courses" },
    { item: "Others", label: "/instructor/others" },
  ];
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
        <SideNav links={instructorlinks}/>
      <div className="flex-1 min-h-screen">{children}</div>
    </div>
  );
};

export default layout;
