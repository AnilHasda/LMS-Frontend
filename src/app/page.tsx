import CourseCard from "./components/course/CourseCard";
import { HeroSection } from "./components/HeroSection/HeroSection";

const Home = () => {
  return (
    <div className="text-red-700">
      {/* Course section */}
      <HeroSection />
      <section className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6 px-36">
        {new Array(5).fill(0).map((ele, index) => {
          return (
            <div key={index}>
              {/* course card will be come here */}
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default Home;
