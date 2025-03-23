import { Code, ExternalLink } from "lucide-react";
import data from "../data/data";

const Projects = () => {
  return (
    <section id="projects" className="py-24 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            My Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Work</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.projects.map((project) => (
            <div key={project.id} className="glass-card overflow-hidden group">
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live View
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-background text-foreground rounded-lg font-medium flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ transitionDelay: "0.1s" }}
                    >
                      <Code className="w-4 h-4" />
                      Code View
                    </a>
                  )}
                </div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
