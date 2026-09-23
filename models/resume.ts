export interface ResumeContact {
  value: string;
  type: "mail" | "link" | "text";
}

export interface ResumeAbout {
  title: string;
  content: string[];
}

export interface ResumeExperienceItem {
  title: string;
  summary: string;
  description: string[];
  location: string;
  position: string;
  tags: string[];
  from: string;
  to: string;
}

export interface ResumeExperience {
  title: string;
  stackLabel: string;
  content: ResumeExperienceItem[];
}

export interface ResumeSkillGroup {
  label: string;
  items: string[];
}

export interface ResumeSkills {
  title: string;
  content: ResumeSkillGroup[];
}

export interface Resume {
  firstName: string;
  lastName: string;
  position: string;
  contacts: ResumeContact[];
  about: ResumeAbout;
  skills: ResumeSkills;
  experience: ResumeExperience;
}
