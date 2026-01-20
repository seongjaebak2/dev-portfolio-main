import React from "react";
import { SKILL_CATEGORIES } from "../constants/constants";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Technical Expertise
          </h2>
          <p className="mt-4 text-slate-400">
            A comprehensive toolkit for modern web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition-colors duration-300"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-lg bg-slate-800 ${category.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-slate-200 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                        {skill.description}
                      </p>
                      <div className="mt-2 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-linear-to-r from-slate-600 to-slate-400 w-[90%] rounded-full opacity-50 group-hover:opacity-100 transition-opacity`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
