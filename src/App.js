import "./App.css";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Question from "./components/Question/Question";
import Reviews from "./components/Reviews/Reviews";
import Syllabus from "./components/Syllabus/Syllabus";

const App = () => {
  return (
    <div className="app">
      <Hero />
      <Syllabus />
      <Courses />
      <Reviews />
      <Question />
      <Footer />
    </div>
  );
};

export default App;
