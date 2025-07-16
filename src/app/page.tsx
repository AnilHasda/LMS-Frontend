import CourseCard from "./components/course/CourseCard";
import { HeroSection } from "./components/HeroSection/HeroSection";
import Courses from "./components/course/Courses";
import AboutUs from "./components/aboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      {/* Course section */}
      <HeroSection />
      <section>
        <Courses/>
      </section>
      <AboutUs />
    </div>
  );
};
export default Home;
