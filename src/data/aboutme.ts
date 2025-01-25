export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Yuki Tatsukawa",
  title: "MS Student",
  institution: "The University of tokyo",
  // Note that links work in the description
  description:
    "I'm a second-year master's student at the University of Tokyo. I belong to <a href='https://www-ui.is.s.u-tokyo.ac.jp/en/'> UI Research Group </a>.  I'm interested in machine learning, computer graphics, and HCI. I'm currently working on a UI system enabling non-expert users to design and create new fonts by themselves. I'm supervised by Prof. Takeo Igarashi.",
  email: "yukitatsu0817[at]gmail.com",
  imageUrl: "https://yukistavailable.github.io/hosting/ocean_small.png",
  googleScholarUrl:
    "https://scholar.google.com/citations?user=53ae9roAAAAJ&hl=ja",
  githubUsername: "yukistavailable",
  // linkedinUsername: "",
  twitterUsername: "yukistachan",
  // blogUrl: "",
  // cvUrl: "",
  institutionUrl: "https://www-ui.is.s.u-tokyo.ac.jp/en",
  // altName: "",
  // secretDescription: "I like dogs.",
};
