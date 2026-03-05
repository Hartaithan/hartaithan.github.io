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
  description: string[];
  location: string;
  position: string;
  tags: string[];
  date: string;
  duration: string;
}

export interface ResumeExperience {
  title: string;
  content: ResumeExperienceItem[];
}

export interface ResumeEducationItem {
  title: string;
  specialty: string;
  date: string;
}

export interface ResumeEducation {
  title: string;
  content: ResumeEducationItem[];
}

export interface Resume {
  firstName: string;
  lastName: string;
  contacts: ResumeContact[];
  about: ResumeAbout;
  experience: ResumeExperience;
  education: ResumeEducation;
}
