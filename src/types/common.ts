type SizeUnit = "%" | "px" | "em" | "vh";

export type Image = {src: string, alt?: string}

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
      images: Array<Image>,
      projectUrl: string
}

export type { SizeUnit, ExperienceType,Project };
