import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../constants/constants";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            주요 프로젝트
          </h2>
          <p className="mt-4 text-slate-400">
            실무에 적용 가능한 서비스를 직접 설계하고 구현한 프로젝트입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-800 animate-pulse" />
                {/* 이미지 로딩 지연 시 표시되는 플레이스홀더 */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-80" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-md border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href={project.repoUrl}
                    className="flex items-center text-sm text-white hover:text-blue-400 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" /> 소스 코드
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="flex items-center text-sm text-white hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> 데모 보기
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
