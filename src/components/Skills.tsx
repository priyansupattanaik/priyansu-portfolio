
import { useState } from "react";
import data from "../data/data";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(data.skills[0].name);

  return (
    <section id="skills" className="py-24 section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I Can Do
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {data.skills.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === category.name
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {data.skills.map((category) => (
          <div 
            key={category.name}
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 transition-all duration-500 ${
              activeCategory === category.name ? "opacity-100" : "hidden opacity-0"
            }`}
          >
            {category.skills.map((skill) => (
              <div key={skill.name} className="glass-card p-6 flex flex-col items-center justify-center gap-4">
                <div className="p-3 w-16 h-16 rounded-full bg-background flex items-center justify-center">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="font-medium text-center">{skill.name}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
