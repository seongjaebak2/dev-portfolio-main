import React from "react";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 border-t border-slate-900 bg-linear-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Let's Work Together
          </h2>
          <p className="text-slate-400 mb-12 text-lg">
            I'm currently looking for new opportunities. Whether you have a
            question about my stack (Spring Boot & React) or just want to say
            hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <a
              href="mailto:hello@example.com"
              className="flex items-center px-6 py-3 bg-slate-800 rounded-lg text-white hover:bg-slate-700 transition-colors border border-slate-700"
            >
              <Mail className="h-5 w-5 mr-3 text-blue-400" />
              plantachieve@naver.com
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com/seongjaebak2"
                className="flex items-center p-3 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <Github className="h-5 w-5 mr-3 text-blue-400" />
                깃허브
              </a>
              <a
                href="#"
                className="flex items-center p-3 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <Linkedin className="h-5 w-5 mr-3 text-blue-400" />
                링크인
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center text-slate-500 text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            Seoul, South Korea
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
