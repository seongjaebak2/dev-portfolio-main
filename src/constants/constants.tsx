import { Server, Database, Layout, GitBranch } from "lucide-react";
import type { SkillCategory, Project } from "../components/types";

/* 여기에 모든 페이지의 데이터를 정리 */

export const HERO_DATA = {
  name: "Full Stack Developer",
  tagline: "Bridging robust Backends with dynamic Frontends.",
  summary:
    "Specialized in building scalable web applications using Spring Boot and React. Passionate about clean code, API security, and efficient database management.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: Server,
    color: "text-green-400",
    skills: [
      {
        name: "Spring Boot (Java)",
        description: "RESTful API, DI, Bean management",
      },
      { name: "Spring Security", description: "JWT, OAuth2, Role-based Auth" },
      {
        name: "Spring Data JPA / Hibernate",
        description: "ORM, Entity relationships, Transaction management",
      },
      { name: "MyBatis", description: "Complex SQL mapping" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Layout,
    color: "text-blue-400",
    skills: [
      {
        name: "React",
        description: "Functional Components, Hooks, Custom Hooks",
      },
      { name: "JavaScript", description: "JavaScript development" },
      { name: "State Management", description: "Context API" },
      { name: "Styling", description: "Tailwind CSS, Bootstrap, GRID, FLEX" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "text-amber-400",
    skills: [
      { name: "MySQL / Oracle", description: "RDB Schema Design" },
      { name: "SQL", description: "DML, JOIN, 집계함수, 서브쿼리, 뷰, DDL" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    color: "text-purple-400",
    skills: [
      { name: "Git & GitHub", description: "Version Control" },
      { name: "IntelliJ & Eclipse", description: "IDE" },
      { name: "Postman", description: "API Testing" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Restaurant Reservation API Service",
    description:
      "온라인 예약을 위한 포괄적인 RESTful API입니다. 복잡한 레스토랑 필터링 및 예약 처리 기능을 구현했습니다.",
    techStack: ["Spring Boot", "Spring Security", "JPA", "MySQL", "JWT"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    repoUrl: "https://github.com/seongjaebak2/dinepick-backend.git",
  },
  {
    id: "2",
    title: "Restaurant Reservation Dashboard",
    description:
      "온라인 예약 서비스를 위한 frontend입니다.",
    techStack: ["React", "JavaScript", "CSS", "Context API"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    repoUrl: "https://github.com/seongjaebak2/dinepick-frontend.git",
  },
  {
    id: "3",
    title: "Movie Searching Application",
    description:
      "오픈 API를 활용한 영화 검색 웹 사이트입니다.",
    techStack: ["React", "JavaScript", "CSS"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    repoUrl: "https://github.com/seongjaebak2/movie-app.git",
    demoUrl: "https://movie-app-sj.netlify.app/",
  },
];

export const SYSTEM_INSTRUCTION = `
You are the AI Assistant for a Full Stack Developer's portfolio website. 
The developer's name is "Alex" (placeholder).
Your goal is to answer questions about the developer's skills and experience based STRICTLY on the following data:

Backend Skills: Spring Boot (Java/Kotlin), Spring Security (JWT, OAuth2), Spring Data JPA/Hibernate, MyBatis.
Frontend Skills: React, JavaScript, Context API, Tailwind CSS, Bootstrap.
Database: MySQL, Oracle.
Tools: Git, GitHub.

Tone: Professional, enthusiastic, and concise.
If asked about a skill not listed, politeley mention that it is not currently in their primary stack but they are a fast learner.
Do not invent projects that are not listed.
`;
