import Hero from "../../components/hero/Hero";
import Stats from "../../components/stats/Stats";
import About from "../../components/about/About";
import Departments from "../../components/departments/Departments";
import WhyChooseUs from "../../components/choose/WhyChooseUs";
import Footer from "../../components/footer/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <main className="home-page">
      <Hero />
      <Stats />
      <About />
      <Departments />
      <WhyChooseUs />
      <Footer />
    </main>
  );
};

export default HomePage;
