import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { HERO_DATA } from "../constants/constants";

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2"></span>
              Available for Hire
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight">
              {HERO_DATA.name}
            </h1>

            <p className="text-xl sm:text-2xl text-blue-200 font-light">
              {HERO_DATA.tagline}
            </p>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {HERO_DATA.summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/이력서_자기소개서_박성재.pdf"
                download={true}
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-700 text-base font-medium rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
              >
                <Download className="mr-2 h-5 w-5" />
                이력서
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative animate-fade-in">
            {/* Decorative code block abstract representation */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="text-purple-400">@Service</div>
                <div className="text-yellow-200">
                  <span className="text-blue-400">public class</span>{" "}
                  <span className="text-yellow-400">UserService</span> {"{"}
                </div>
                <div className="pl-4 text-slate-400">
                  // Handling core business logic
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">private final</span>{" "}
                  <span className="text-white">UserRepository</span> repo;
                </div>
                <div className="pl-4 text-green-400">@Transactional</div>
                <div className="pl-4">
                  <span className="text-blue-400">public</span>{" "}
                  <span className="text-white">User</span>{" "}
                  <span className="text-yellow-300">createUser</span>(Dto dto){" "}
                  {"{"}
                </div>
                <div className="pl-8 text-slate-500">...</div>
                <div className="pl-4">{"}"}</div>
                <div className="text-yellow-200">{"}"}</div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 bg-slate-800/80 backdrop-blur border border-slate-700 rounded-xl p-4 shadow-xl -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="font-mono text-xs text-blue-300 mb-1">
                React Component
              </div>
              <div className="text-sm text-white">
                {"<UserProfile user={data} />"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
