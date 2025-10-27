type SizeUnit = "%" | "px" | "em" | "vh";

type ExperienceType = {
  title: string;
  description: string;
  time: string;
  company: string;
  location: string;
};

type Project = {
      name: string
      description: string
      image: string,
      projectUrl: string
}

export type { SizeUnit, ExperienceType,Project };
