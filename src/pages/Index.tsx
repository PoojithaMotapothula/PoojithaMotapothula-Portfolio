
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WorkflowTimeline from "@/components/WorkflowTimeline";
import TechStack from "@/components/TechStack";
import RealTimeFeatures from "@/components/RealTimeFeatures";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-nunito">
      <Header />
      <Hero />
      <Projects />
      <WorkflowTimeline />
      <TechStack />
      <RealTimeFeatures />
      <Certifications />
      <Footer />
    </div>
  );
};

export default Index;
