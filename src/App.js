import "./App.css";
import Courses from "./components/Courses/Courses";
import Hero from "./components/Hero/Hero";
import Reviews from "./components/Reviews/Reviews";
import Syllabus from "./components/Syllabus/Syllabus";

const App = () => {
  return (
    <div className="app">
      <Hero />
      <Syllabus />
      <Courses />
      <Reviews />
    </div>
  );
};

export default App;
