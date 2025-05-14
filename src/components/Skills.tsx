
import React from "react";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const techSkills = [
    { name: "HTML", level: 95 },
    { name: "Tailwind CSS", level: 95 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 75 },
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            I specialize in frontend development with a focus on creating responsive and accessible user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
            <div className="space-y-8">
              {techSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Technologies & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Git", "VS Code", "npm", "Figma"].map(
                (tech, index) => (
                  <div 
                    key={index}
                    className="bg-muted rounded-lg p-4 flex items-center justify-center text-center hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <span className="font-medium">{tech}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
