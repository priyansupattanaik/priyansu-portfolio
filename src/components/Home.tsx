
import { ArrowDown } from "lucide-react";
import data from "../data/data";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col items-center justify-center section-padding grid-pattern overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <span className="inline-block py-1 px-3 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
          Welcome to my portfolio
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Hi, I'm <span className="text-gradient">{data.personalInfo.name}</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-foreground/80 mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {data.personalInfo.title}
        </h2>
        
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-14 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {data.personalInfo.description}
        </p>
        
        <div className="flex flex-wrap gap-6 justify-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <a
            href="#about"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
          >
            Learn More
          </a>
          
          <a
            href={data.personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 p-4 rounded-full glass animate-bounce duration-500 z-10"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 text-foreground" />
      </a>
      
      {/* Background decorative elements */}
      <div className="absolute -top-60 -right-60 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-60 -left-60 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Home;
