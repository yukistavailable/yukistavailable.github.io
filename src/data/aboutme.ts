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
  title: "AI/CG Researcher",
  institution: "",
  // Note that links work in the description
  description:
    "I'm a researcher at a Japanese video game development company. <br> I earned my master's degree in computer science under Takeo Igarashi at the University of Tokyo, where I was a member of <a href='https://www-ui.is.s.u-tokyo.ac.jp/en/'>UI Research Group </a>. My research interests include machine learning, computer graphics, and human-computer interaction (HCI).",
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
