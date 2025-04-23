
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  id: string;
  title: string;
  app: string;
  description: string;
  benefits: string[];
  icon: string;
}

const features: Feature[] = [
  {
    id: "realtime-messaging",
    title: "Real-Time Messaging",
    app: "Connect Box",
    description: 
      "Instant message delivery and synchronization across devices using Firebase Realtime Database with optimized data transactions.",
    benefits: [
      "Immediate message delivery with typing indicators",
      "Offline message queue with automatic retry",
      "Message read receipts and status tracking",
    ],
    icon: "💬",
  },
  {
    id: "task-updates",
    title: "Instant Task Updates",
    app: "To-Do List",
    description: 
      "Synchronized task management across devices with real-time updates when tasks are added, completed, or modified.",
    benefits: [
      "Collaborative task management for teams",
      "Real-time progress tracking",
      "Push notifications for task assignments",
    ],
    icon: "✅",
  },
  {
    id: "database-sync",
    title: "Live Database Sync",
    app: "Flavor-Bytes",
    description: 
      "Continuous synchronization with cloud database to provide up-to-date recipe information and user interactions.",
    benefits: [
      "Seamless data access across multiple devices",
      "Background syncing with minimal data usage",
      "Conflict resolution for simultaneous edits",
    ],
    icon: "🔄",
  },
  {
    id: "firebase-auth",
    title: "Firebase Authentication",
    app: "All Applications",
    description: 
      "Secure user authentication with multiple sign-in methods including email/password, Google, and phone verification.",
    benefits: [
      "Streamlined onboarding with social login options",
      "Secure token-based authentication",
      "User role management and access control",
    ],
    icon: "🔐",
  },
];

const RealTimeFeatures = () => {
  const [openFeature, setOpenFeature] = useState<string | null>("realtime-messaging");

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Real-Time Features in My Apps</h2>
          <p className="section-subtitle">
            Creating responsive, interactive experiences through real-time data synchronization 
            and instant updates across my mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Accordion
              type="single" 
              collapsible
              value={openFeature || undefined}
              onValueChange={(value) => setOpenFeature(value)}
              className="bg-white rounded-lg shadow-sm"
            >
              {features.map((feature) => (
                <AccordionItem key={feature.id} value={feature.id}>
                  <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{feature.icon}</span>
                      <div className="text-left">
                        <div className="font-medium">{feature.title}</div>
                        <div className="text-xs text-indigo">{feature.app}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-4 py-2 text-sm text-gray-600">
                      {feature.description}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="md:col-span-2">
            {openFeature && (
              <Card className="h-full shadow-sm card-hover border-2 border-indigo/20">
                <CardContent className="p-6">
                  {features.find((f) => f.id === openFeature) && (
                    <div className="animate-fade-in">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">
                          {features.find((f) => f.id === openFeature)?.icon}
                        </span>
                        <div>
                          <h3 className="font-bold text-xl text-indigo">
                            {features.find((f) => f.id === openFeature)?.title}
                          </h3>
                          <p className="text-gray-600">
                            {features.find((f) => f.id === openFeature)?.app}
                          </p>
                        </div>
                      </div>
                      
                      <p className="mb-6 text-gray-600">
                        {features.find((f) => f.id === openFeature)?.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {features
                            .find((f) => f.id === openFeature)
                            ?.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-indigo mr-2">•</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeFeatures;
