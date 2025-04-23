
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Tech {
  name: string;
  icon: string;
  category: string;
  description: string;
}

const techStack: Tech[] = [
  // Languages
  {
    name: "Dart",
    icon: "📱",
    category: "Languages",
    description: "Primary language for Flutter app development",
  },
  {
    name: "Java",
    icon: "☕",
    category: "Languages",
    description: "Used for Android native module development",
  },
  {
    name: "JavaScript",
    icon: "🟨",
    category: "Languages",
    description: "For React Native and web applications",
  },
  
  // Frameworks
  {
    name: "Flutter",
    icon: "🦋",
    category: "Frameworks",
    description: "Cross-platform UI toolkit for building beautiful applications",
  },
  {
    name: "React Native",
    icon: "⚛️",
    category: "Frameworks",
    description: "JavaScript framework for native mobile app development",
  },
  
  // Databases
  {
    name: "Firebase Firestore",
    icon: "🔥",
    category: "Databases",
    description: "NoSQL cloud database for mobile applications",
  },
  {
    name: "Realtime DB",
    icon: "⚡",
    category: "Databases",
    description: "Real-time syncing database for collaborative features",
  },
  {
    name: "SQL",
    icon: "🗄️",
    category: "Databases",
    description: "Relational database for structured data storage",
  },
  
  // Tools
  {
    name: "Git",
    icon: "🔀",
    category: "Tools",
    description: "Version control for collaborative development",
  },
  {
    name: "GitHub",
    icon: "🐙",
    category: "Tools",
    description: "Repository hosting and project management",
  },
  {
    name: "Android Studio",
    icon: "🤖",
    category: "Tools",
    description: "IDE for Android and Flutter development",
  },
  
  // Cloud
  {
    name: "Firebase Auth",
    icon: "🔐",
    category: "Cloud",
    description: "Authentication service for secure user access",
  },
  {
    name: "Firebase Functions",
    icon: "☁️",
    category: "Cloud",
    description: "Serverless functions for backend operations",
  },
  {
    name: "Firebase Storage",
    icon: "📦",
    category: "Cloud",
    description: "Cloud storage for user files and media",
  },
];

const categories = ["All", ...new Set(techStack.map((tech) => tech.category))];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const filteredTech = activeCategory === "All"
    ? techStack
    : techStack.filter((tech) => tech.category === activeCategory);

  return (
    <section id="tech" className="py-24 bg-gradient-to-br from-white to-indigo/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Tech Stack & Tools</h2>
          <p className="section-subtitle">
            The technologies and tools I use to build robust, performant, 
            and beautiful mobile applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-indigo text-white"
                  : "bg-gray-100 hover:bg-indigo/20"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <TooltipProvider>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredTech.map((tech) => (
              <Tooltip key={tech.name}>
                <TooltipTrigger asChild>
                  <Card
                    className={`card-hover cursor-pointer ${
                      hoveredTech === tech.name ? "border-indigo" : ""
                    }`}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="text-4xl mb-3">{tech.icon}</div>
                      <h3 className="font-medium">{tech.name}</h3>
                      <div className="text-xs text-gray-500 mt-1">{tech.category}</div>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default TechStack;
