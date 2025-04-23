
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: "Convert Figma to Flutter UI",
    description: "Transform design mockups into responsive Flutter widgets, ensuring pixel-perfect UI implementation.",
    icon: "🎨",
    color: "bg-indigo",
  },
  {
    id: 2,
    title: "API Integration & State Management",
    description: "Implement RESTful API integration and efficient state management using Provider or GetX for a smooth user experience.",
    icon: "⚙️",
    color: "bg-mint",
  },
  {
    id: 3,
    title: "Firebase Setup & Integration",
    description: "Configure Firebase services including authentication, database, and cloud functions for backend functionality.",
    icon: "🔥",
    color: "bg-peach",
  },
  {
    id: 4,
    title: "Testing & Deployment",
    description: "Perform thorough testing across devices and deploy to app stores with proper CI/CD pipelines.",
    icon: "🚀",
    color: "bg-indigo",
  },
];

const WorkflowTimeline = () => {
  return (
    <section id="workflow" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">My Workflow</h2>
          <p className="section-subtitle">
            From design to deployment, here's my systematic approach to building 
            mobile applications that deliver exceptional user experiences.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {workflowSteps.map((step, index) => (
            <div key={step.id} className="relative">
              {index < workflowSteps.length - 1 && (
                <div className="absolute top-0 left-10 ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              )}
              
              <div className="relative flex items-start mb-12 group">
                <div
                  className={`flex-shrink-0 h-20 w-20 rounded-full ${step.color} flex items-center justify-center text-white text-3xl transition-transform duration-300 group-hover:scale-110`}
                  aria-hidden="true"
                >
                  {step.icon}
                </div>
                
                <Card className="ml-8 flex-grow card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <h3 className="text-xl font-semibold text-indigo">{step.title}</h3>
                      <span className="ml-3 flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100">
                        Step {step.id}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600">{step.description}</p>
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

export default WorkflowTimeline;
