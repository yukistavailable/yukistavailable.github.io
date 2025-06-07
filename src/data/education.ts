export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2023—2025",
    institution: "The University of Tokyo",
    degree: "M.S. in Computer Science",
    advisor: "Prof. Takeo Igarashi",
  },
  {
    year: "2019—2023",
    institution: "The University of Tokyo",
    degree: "B.S. in Computer Science",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
