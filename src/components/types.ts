// 내스킬(이름 , 설명)
export interface SkillItem {
  name: string;
  description?: string;
}
// 스킬 카테고리 (타이틀, 아이콘, 스킬목록, 색상)
export interface SkillCategory {
  title: string;
  icon: React.ComponentType<any>;
  skills: SkillItem[];
  color: string;
}
// 프로젝트 (아이디, 타이틀, 설명, 기술스택, 이미지URL, 저장소URL, 데모URL)
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  repoUrl?: string;
  demoUrl?: string;
}

// 채팅 메시지 (아이디, 역할, 텍스트, 날짜)
export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}
