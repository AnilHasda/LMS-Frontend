import { Star } from "lucide-react";
import Image from "next/image";

interface CourseCardProps {
  image: string;
  title: string;
  instructor: string;
  rating: number;
  price: string;
}

export default function CourseCard({
  image = "/courses/python.png",
  title,
  instructor,
  rating,
  price,
}: CourseCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">
      {/* Image container with relative position and fixed height */}
      <div className="relative w-full h-44">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500">{instructor}</p>

        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "fill-yellow-500" : "text-gray-300"}`}
            />
          ))}
          <span className="ml-1 text-gray-600 font-medium">{rating}.0</span>
        </div>

        <div className="flex justify-between items-center pt-2">
          <span className="text-base font-bold text-gray-900">{price}</span>
          <button className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}
