import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email?: string;
  telephone?: string;
  socials: ISocials;
} = {
  subheading:
    "Mintro Labs: from Socratic dialogue to digital discovery. Building the future of learning, one question at a time.",
  quickLinks: [
    {
      text: "Features",
      url: "#features",
    },
    {
      text: "Products",
      url: "#Products",
    },
    {
      text: "Team",
      url: "#Team",
    },
  ],
  //email: "address@yoursite.com",
  //telephone: "+1 (123) 456-7890",
  socials: {
    // github: 'https://github.com',
    x: 'https://twitter.com/MintroLabs',
   // twitter: "https://twitter.com/Twitter",
    //facebook: "https://facebook.com",
    // youtube: 'https://youtube.com',
   // linkedin: "https://www.linkedin.com",
    // threads: 'https://www.threads.net',
   // instagram: "https://www.instagram.com",
  },
};
