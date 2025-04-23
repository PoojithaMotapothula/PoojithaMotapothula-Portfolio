
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";

interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Connect Box",
    description: "Real-time chat application with secure Firebase authentication, enabling instant messaging between users with a clean, intuitive interface.",
    techStack: ["Flutter", "Firebase Auth", "Firestore", "Provider"],
    githubLink: "#",
    demoLink: "#",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Flavor-Bytes",
    description: "Food recipe application with a simple user interface, database integration for recipe storage, and search functionality.",
    techStack: ["React Native", "Firebase", "Redux", "Expo"],
    githubLink: "#",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "To-Do List App",
    description: "Task manager application with real-time synchronization, intuitive user experience, and reminder functionality.",
    techStack: ["Flutter", "Firebase", "GetX", "Local Notifications"],
    githubLink: "#",
    image: "/placeholder.svg",
  },
];

const Projects = () => {
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A collection of mobile applications I've developed using Flutter and React Native, 
            showcasing different functionalities and integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className={`card-hover overflow-hidden border-2 ${
                hoveredProjectId === project.id ? "border-indigo" : "border-transparent"
              }`}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
            >
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredProjectId === project.id ? "scale-110" : "scale-100"
                  }`}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-indigo">{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-indigo text-indigo hover:bg-indigo/10"
                  onClick={() => window.open(project.githubLink, "_blank")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Source Code
                </Button>
                {project.demoLink && (
                  <Button
                    size="sm"
                    className="bg-indigo hover:bg-indigo/90 text-white"
                    onClick={() => window.open(project.demoLink, "_blank")}
                  >
                    Live Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
