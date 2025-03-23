
import { ExternalLink } from "lucide-react";
import data from "../data/data";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Experience = () => {
  return (
    <section id="experience" className="py-24 section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            My Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work History
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative space-y-12 md:space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-foreground/20 before:to-transparent">
          {data.experience.map((exp, index) => (
            <div
              key={exp.id}
              className="relative flex items-center group md:items-start animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="flex flex-col items-center gap-4 md:w-1/2 md:text-right md:pr-10 z-10">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-foreground/20 bg-card shadow-md">
                  <span className="w-3 h-3 bg-primary rounded-full transition-all duration-300 group-hover:scale-125"></span>
                </div>
                <div className={index % 2 === 0 ? "md:block hidden" : "hidden"}>
                  <Card className="glass-card overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-3">
                        <a 
                          href={exp.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="mb-2 inline-block relative w-16 h-16 mx-auto hover:scale-110 transition-transform duration-300"
                          title={`Visit ${exp.company} website`}
                        >
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain rounded-md"
                          />
                        </a>
                        <span className="text-sm font-medium">{exp.duration}</span>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <div className="flex flex-col gap-1 text-foreground/70">
                          <div className="flex items-center justify-end gap-1">
                            <span>{exp.company}</span>
                            <a 
                              href={exp.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 transition-colors"
                              aria-label={`Visit ${exp.company} website`}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className={`${index % 2 === 0 ? "hidden md:block md:w-1/2 md:pl-10" : "ml-8 md:ml-0 md:w-1/2 md:pl-10"} z-10`}>
                <Card className="glass-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <ul className="space-y-2 list-disc list-inside text-foreground/70">
                      {exp.description.map((item, i) => (
                        <li key={i} className="hover:text-foreground transition-colors duration-200">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className={`${index % 2 === 0 ? "ml-8 md:hidden" : "ml-8 md:hidden"} z-10`}>
                <Card className="glass-card overflow-hidden hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-3 mb-4">
                      <a 
                        href={exp.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mb-2 inline-block relative w-16 h-16 mx-auto hover:scale-110 transition-transform duration-300"
                        title={`Visit ${exp.company} website`}
                      >
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain rounded-md"
                        />
                      </a>
                      <span className="text-sm font-medium">{exp.duration}</span>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <div className="flex flex-col gap-1 text-foreground/70">
                        <div className="flex items-center justify-center gap-1">
                          <span>{exp.company}</span>
                          <a 
                            href={exp.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors"
                            aria-label={`Visit ${exp.company} website`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
