interface DateComponent {
  year: number | null;
  month: number | null;
  day: number | null;
}

interface Language {
  name: string;
  proficiency: string | null;
}

interface Education {
  start: DateComponent;
  end: DateComponent;
  fieldOfStudy: string | null;
  degree: string | null;
  grade: string | null;
  schoolName: string;
  description: string | null;
  activities: string | null;
  url: string;
  schoolId?: string | null;
}

interface Position {
  companyName: string;
  companyUsername: string | null;
  companyURL: string;
  companyLogo: string | null;
  companyIndustry: string | null;
  companyStaffCountRange: string | null;
  title: string;
  location: string | null;
  description: string | null;
  employmentType: string | null;
  start: DateComponent;
  end: DateComponent;
}

interface CertificationCompany {
  name: string;
  universalName: string;
  logo: string | null;
}

interface Certification {
  name: string;
  start: DateComponent;
  end: DateComponent;
  company: CertificationCompany;
  authority: string | null;
}

interface Project {
  title: string;
  description?: string | null;
}

interface GeoLocation {
  country: string | null;
  city: string | null;
  full: string | null;
}

export interface UserDetailedObjectType {
  urn: string;
  username: string;
  firstName: string;
  lastName: string;
  isOpenToWork: boolean;
  isHiring: boolean;
  profilePicture: string;
  summary: string;
  headline: string;
  geo: GeoLocation;
  languages: Language[] | null;
  educations: Education[] | null;
  position: Position[] | null;
  skills: string[] | null;
  courses: string[] | null;
  certifications: Certification[] | null;
  projects: Project[] | null;
}


export interface ComponentsToShowType {
  summary: boolean;
  headline: boolean;
  geo: boolean;
  languages: boolean;
  educations: boolean;
  position: boolean;
  skills: boolean;
  courses: boolean;
  certifications: boolean;
  projects: boolean;
  resume: boolean;
}
