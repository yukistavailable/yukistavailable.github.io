export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "CHI",
    title:
      "FontCraft: Multimodal Font Design Using Interactive Bayesian Optimization",
    authors:
      "Yuki Tatsukawa, I-Chao Shen, Mustafa Doga Dogan, Anran Qi, Yuki Koyama, Takeo Igarashi, Ariel Shamir",
    tldr: "UI system enabling non-expert users to design fonts.",
    // paperUrl: "https://arxiv.org/abs/2409.15476",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    imageUrl:
      "https://yukistavailable.github.io/hosting/fontcraft_small_compressed.png",
  },
  {
    year: "2024",
    conference: "EUROGRAPHICS",
    title:
      "FontCLIP: A Semantic Typography Visual-Language Model for Multilingual Font Applications",
    authors:
      "Yuki Tatsukawa, I-Chao Shen, Anran Qi, Yuki Koyama, Takeo Igarashi, Ariel Shamir",
    tldr: "Multimodal fundamental model for typography.",
    paperUrl: "https://yukistavailable.github.io/fontclip.github.io/",
    codeUrl: "https://github.com/yukistavailable/FontCLIP",
    imageUrl: "https://yukistavailable.github.io/hosting/fontclip-small.png",
  },
];
