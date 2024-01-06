import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Know from "../components/Know";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        buttonText="Travel Plan"
        url="/"
        btnClass="hide"
      />
      <Know />
      <Footer />
    </>
  );
}

export default About;
