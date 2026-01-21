import { Server, Database, Layout, GitBranch } from "lucide-react";
import type { SkillCategory, Project } from "../components/types";

/* 여기에 모든 페이지의 데이터를 정리 */

export const HERO_DATA = {
  name: "풀스택 개발자",
  tagline: "견고한 백엔드와 역동적인 프론트엔드를 연결합니다.",
  summary:
    "Spring Boot와 React를 활용해 확장 가능한 웹 애플리케이션을 개발합니다. 클린 코드, API 보안, 효율적인 데이터베이스 설계에 관심이 많습니다.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "백엔드 개발",
    icon: Server,
    color: "text-green-400",
    skills: [
      {
        name: "Spring Boot (Java)",
        description: "RESTful API, 의존성 주입(DI), Bean 관리",
      },
      {
        name: "Spring Security",
        description: "JWT, OAuth2, 역할 기반 인증",
      },
      {
        name: "Spring Data JPA / Hibernate",
        description: "ORM, 엔티티 연관관계, 트랜잭션 관리",
      },
      {
        name: "MyBatis",
        description: "복잡한 SQL 매핑",
      },
    ],
  },
  {
    title: "프론트엔드 개발",
    icon: Layout,
    color: "text-blue-400",
    skills: [
      {
        name: "React",
        description: "함수형 컴포넌트, Hooks, 커스텀 훅",
      },
      {
        name: "JavaScript",
        description: "자바스크립트 기반 웹 개발",
      },
      {
        name: "상태 관리",
        description: "Context API",
      },
      {
        name: "스타일링",
        description: "Tailwind CSS, Bootstrap, GRID, FLEX",
      },
    ],
  },
  {
    title: "데이터베이스",
    icon: Database,
    color: "text-amber-400",
    skills: [
      {
        name: "MySQL / Oracle",
        description: "RDB 스키마 설계",
      },
      {
        name: "SQL",
        description: "DML, JOIN, 집계 함수, 서브쿼리, 뷰, DDL",
      },
    ],
  },
  {
    title: "DevOps & 도구",
    icon: GitBranch,
    color: "text-purple-400",
    skills: [
      {
        name: "Git & GitHub",
        description: "버전 관리",
      },
      {
        name: "IntelliJ & Eclipse",
        description: "통합 개발 환경(IDE)",
      },
      {
        name: "Postman",
        description: "API 테스트",
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "레스토랑 예약 API 서비스",
    description:
      "온라인 예약을 위한 RESTful API 서비스입니다. 복잡한 레스토랑 필터링과 예약 처리 로직을 구현했습니다.",
    techStack: ["Spring Boot", "Spring Security", "JPA", "MySQL", "JWT"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    repoUrl: "https://github.com/seongjaebak2/dinepick-backend.git",
  },
  {
    id: "2",
    title: "레스토랑 예약 관리자 대시보드",
    description:
      "온라인 레스토랑 예약 서비스를 위한 프론트엔드 애플리케이션입니다.",
    techStack: ["React", "JavaScript", "CSS", "Context API"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    repoUrl: "https://github.com/seongjaebak2/dinepick-frontend.git",
  },
  {
    id: "3",
    title: "영화 검색 애플리케이션",
    description:
      "오픈 API를 활용하여 영화 정보를 검색할 수 있는 웹 애플리케이션입니다.",
    techStack: ["React", "JavaScript", "CSS"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    repoUrl: "https://github.com/seongjaebak2/movie-app.git",
    demoUrl: "https://movie-app-sj.netlify.app/",
  },
];

export const SYSTEM_INSTRUCTION = `
당신은 풀스택 개발자 포트폴리오 웹사이트를 위한 AI 어시스턴트입니다.
개발자 이름은 "Alex"(임시 이름)입니다.
아래 데이터에 기반하여 개발자의 기술과 경험에 대해서만 답변해야 합니다.

백엔드 기술: Spring Boot(Java/Kotlin), Spring Security(JWT, OAuth2), Spring Data JPA/Hibernate, MyBatis
프론트엔드 기술: React, JavaScript, Context API, Tailwind CSS, Bootstrap
데이터베이스: MySQL, Oracle
도구: Git, GitHub

톤: 전문적이고, 열정적이며, 간결하게 작성합니다.
목록에 없는 기술에 대한 질문을 받으면, 현재 주력 기술 스택은 아니지만 빠르게 학습할 수 있다고 정중히 답변합니다.
등록되지 않은 프로젝트를 새로 만들어서 답변하지 않습니다.
`;
