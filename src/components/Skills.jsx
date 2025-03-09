import React from "react";
import skills from "../../public/img/skills/indexSkills";

const Skills = () => {
  const skillEntries = Object.entries(skills);
  return (
    <div className="p-4" id="skills">
      <span className="font-medium text-xl">Skills</span>
      <div className="flex flex-col px-7 gap-3 pt-3">
        <div className="flex justify-between">
          {skillEntries.slice(0, 6).map(([name, svg], index) => (
            <img
              title={name}
              key={index}
              src={svg}
              alt={name}
              width="50"
              height="50"
            />
          ))}
        </div>
        <div className="flex justify-evenly">
          {skillEntries.slice(6, 10).map(([name, svg], index) => {
            return (
              <img
                title={name}
                key={index}
                src={svg}
                alt={name}
                width="50"
                height="50"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
