import Layout from "../components/Layout";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
// import Certifications from "../components/Certifications";

const Index = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <Certifications /> */}
    </Layout>
  );
};

export default Index;
