export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Spring 2024 to Present",
    title: "Research Intern",
    company: "Sony Corporation",
    // description:
    // "Worked on improving robustness of large language models to distribution shifts",
    // manager: "Elise Brown",
    companyUrl: "https://www.sony.net/",
  },
  {
    date: "Winter 2023",
    title: "ML Engineer Intern",
    company: "CyberAgent",
    // description:
    // "Developed novel algorithms for causal structure learning in reinforcement learning settings",
    // advisor: "Peter Wang",
    companyUrl: "https://www.cyberagent.co.jp/en/",
  },
];
