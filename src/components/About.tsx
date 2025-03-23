import { Download } from "lucide-react";
import data from "../data/data";

const About = () => {
  return (
    <section id="about" className="py-24 section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get to know me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl transform -rotate-6 scale-95 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-100"></div>
            <div className="relative overflow-hidden rounded-2xl aspect-[5/5]">
              <img
                src={data.personalInfo.profileImage}
                alt={data.personalInfo.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Who am I?</h3>
              {/* <p className="text-foreground/80 leading-relaxed">
                {data.personalInfo.description}
              </p> */}
              <p className="text-foreground/80 leading-relaxed">
                "I’m Priyansu Pattanaik, a passionate tech enthusiast and
                creative problem-solver, driven by a love for innovation and
                technology. With a knack for turning ideas into impactful
                solutions, I thrive at the intersection of coding, AI, and
                design."
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Approach</h3>
              <p className="text-foreground/80 leading-relaxed">
                "I approach every challenge with curiosity and precision,
                blending technical expertise with imaginative thinking. By
                leveraging tools like MERN, AI, and modern frameworks, I focus
                on crafting efficient, scalable solutions that push boundaries
                and deliver value."
              </p>
            </div>

            <div className="pt-4">
              <a
                href={data.personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
