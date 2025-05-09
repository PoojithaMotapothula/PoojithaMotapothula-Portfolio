
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-mint/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl animate-fade-in">
            <span className="text-indigo">Naga Poojitha</span> Motapothula
          </h1>
          
          <div className="w-24 h-1 bg-indigo mx-auto my-6"></div>
          
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Junior Software Developer | Flutter & React Native Enthusiast
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Based in Ongole, Andhra Pradesh, I'm passionate about creating beautiful, 
            responsive mobile applications with smooth user experiences and real-time features.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              onClick={scrollToProjects}
              className="bg-indigo hover:bg-indigo/90 text-white px-8 py-6"
            >
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              className="border-indigo text-indigo hover:bg-indigo/10 px-8 py-6"
              onClick={() => {
                window.open("mailto:iam.poojithamotapothula@gmail.com", "_blank");
              }}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Ongole, Andhra Pradesh, India
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:iam.poojithamotapothula@gmail.com" className="hover:text-indigo">
                iam.poojithamotapothula@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
              <a href="https://linkedin.com/in/poojitha-motapothula" target="_blank" rel="noopener noreferrer" className="hover:text-indigo">
                linkedin.com/in/poojitha-motapothula
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
