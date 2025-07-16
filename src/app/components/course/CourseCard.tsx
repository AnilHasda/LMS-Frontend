import Image from "next/image";
interface CourseCardProps {
  icon: React.ElementType | string;
  heading: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  duration?: string;
}

const CourseCard = ({
  icon: Icon,
  heading,
  level,
  description,
  duration = "3 months",
}: CourseCardProps) => {
  return (
    <div className="bg-[#FFF5F0] rounded-xl flex flex-col gap-3 py-4 max-w-[230px]">
      {typeof Icon === "string" ? (
        <Image src={Icon} alt="course_image" fill className="object-cover" />
      ) : (
        <Icon className="text-[#006A62] mx-auto text-6xl" />
      )}
    
      <h2 className="pt-2 font-bold text-[16px] text-center">{heading}</h2>
       <div className="px-8">
      <p className="pb-2 text-gray-600">{description}</p>
      <p className="text-sm text-[#006A62]">level: {level}</p>
      <p className="text-sm text-[#006A62]">duration: {duration}</p>
      </div>
    </div>
  );
};

export default CourseCard;
