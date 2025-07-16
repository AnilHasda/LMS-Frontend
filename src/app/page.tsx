import CourseCard from "./components/course/CourseCard";
import { HeroSection } from "./components/HeroSection/HeroSection";
import Courses from "./components/course/Courses";
import AboutUs from "./components/aboutUs/AboutUs";
import OurServices from "./components/ourServices/OurServices";

const Home = () => {
  return (
    <div>
      {/* Course section */}
      <HeroSection />
      <section>
        <Courses/>
      </section>
      <AboutUs />
      <OurServices />
    </div>
  );
};
export default Home;
