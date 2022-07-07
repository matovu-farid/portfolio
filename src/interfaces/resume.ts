export interface Experience {
  name: string;
  date: string;
  url: String;
  startDate: string;
  endDate: string;
  highlights: string[];
  location: string;
}
export interface Education {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  courses: string[] | null;
}

export interface ResumeSkill {
  name: string,
  keywords: string[]
}

export interface ProfileLink {
  network: String;
  username: String;
  url: String;
  icon: String | null;
}
export interface Basic {
  name: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  profiles: ProfileLink[];
}
export interface ResumeProject {
  name: string;
  description: string;
  highlights: string[];
  keywords: string[];
  url: string;
  type: string;
  roles: string[];
}
export interface Resume {
  basic: Basic;
  projects: ResumeProject[];
  experience: Experience[];
  skills: ResumeSkill[];
  education: Education[];
}
