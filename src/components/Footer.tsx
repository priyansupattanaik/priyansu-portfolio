import { Heart } from "lucide-react";
import data from "../data/data";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-2xl font-bold">Connect With Me</h2>

          <div className="flex flex-wrap gap-4 justify-center">
            {data.socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:bg-primary hover:text-primary-foreground"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-border/50 w-full flex flex-col items-center gap-4">
            {/* <p className="flex items-center gap-1 text-foreground/70">
              Built with <Heart className="w-4 h-4 text-primary fill-primary" /> by {data.personalInfo.name}
            </p> */}
            <p className="text-sm text-foreground/50">
              © {year} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
