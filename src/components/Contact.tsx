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
            함께 일해요
          </h2>

          <p className="text-slate-400 mb-12 text-lg">
            현재 새로운 기회를 찾고 있습니다.
            Spring Boot와 React 기반의 기술 스택에 대한 질문이 있거나,
            간단한 인사라도 좋으니 언제든지 연락 주세요.
            최대한 빠르게 답변드리겠습니다.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <a
              href="mailto:plantachieve@naver.com"
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
                GitHub
              </a>

              <a
                href="#"
                className="flex items-center p-3 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <Linkedin className="h-5 w-5 mr-3 text-blue-400" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center text-slate-500 text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            서울, 대한민국
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
