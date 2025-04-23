
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  badgeColor: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "Flutter Dart – The Complete Guide",
    issuer: "Udemy",
    date: "2023",
    badgeColor: "bg-blue-500",
  },
  {
    id: 2,
    name: "Google Dart",
    issuer: "TDA",
    date: "2022",
    badgeColor: "bg-green-500",
  },
  {
    id: 3,
    name: "Cutshort Android Development",
    issuer: "Cutshort",
    date: "2022",
    badgeColor: "bg-indigo",
  },
  {
    id: 4,
    name: "AWS Virtual Internship",
    issuer: "EduSkills",
    date: "2021",
    badgeColor: "bg-yellow-600",
  },
  {
    id: 5,
    name: "SQL Workshop",
    issuer: "Skill Nation",
    date: "2021",
    badgeColor: "bg-red-500",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Certifications & Learning Path</h2>
          <p className="section-subtitle">
            My journey of continuous learning and skill development in mobile
            app development and related technologies.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <div key={cert.id} className="relative">
              {index < certifications.length - 1 && (
                <div
                  className="absolute left-8 top-10 h-full w-px bg-gray-200"
                  aria-hidden="true"
                />
              )}
              
              <Card className="card-hover border-l-4 border-l-indigo">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 bg-indigo/10 text-indigo font-bold">
                    {cert.date}
                  </div>
                  
                  <CardContent className="p-4 flex-grow">
                    <div className="flex items-center">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">{cert.name}</h3>
                        <div className="flex items-center mt-1">
                          <span
                            className={`inline-block w-3 h-3 rounded-full ${cert.badgeColor} mr-2`}
                            aria-hidden="true"
                          />
                          <span className="text-sm text-gray-600">{cert.issuer}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
