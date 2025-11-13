import {
  FiBarChart,
  FiBriefcase,
  FiDollarSign,
  FiLock,
  FiPieChart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
  FiUsers,
  FiTool,
  FiZap,
  FiThumbsUp,
  FiPaperclip,
  FiCpu,
  FiFileText,
  FiGift,
  FiBookOpen,
  FiDribbble,
  FiArchive,
  FiCode,
  FiCheckSquare
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
   
  {
    title: "Gamification",
    description:
      "Education hasn’t evolved, it’s time it did. Learning becomes an experience with maieutic questioning and hands-on activities. \n Mintro Labs transforms courses and workshops into dynamic journeys built on progress, challenge, and discovery.",
    bullets: [
      {
        title: "Progressive Modules",
        description:
          "Structured like a game where you advance through curated modules that evolve with your skills",
        icon: <FiCode size={26} />,
      },
      {
        title: "Verified Credentials",
        description: "Earn on-chain certificates aligned with the ELEVATE framework of the Digital Europe Programme",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Challenges",
        description:
          "Apply knowledge in hands-on projects and competitions between different high schools that strengthen teamwork and creativity.",
        icon: <FiDribbble size={26} />,
      },
    ],
    imageSrc: "/images/mock2.png",
  },

  {
    title: "Learning Resources",
    description:
      "No more scattered tutorials or fragmented resources. \n Mintro Labs centralizes all learning materials, from guides and documentation to tests and competitions into one gamified platform. \n A single ecosystem for Web3 learning: clear, accessible, and designed to reduce noise while boosting understanding.",
    bullets: [
      {
        title: "Unified Knowledge Hub",
        description:
          "Articles, guides, and tutorials in one cohesive platform.",
        icon: <FiBookOpen size={26} />,
      },
      {
        title: "AI Study Companion",
        description:
          "Get personalized study recommendations and resources based on your learning style and progress.",
        icon: <FiUser size={26} />,
      },
      {
        title: "Test Your Knowledge",
        description:
          "Interactive quizzes and challenges to reinforce learning and track your progress.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/Untitled.png",
  },
  {
    title: "By Our Side",
    description:
      "Mintro Labs partners with ABA2020 to bring innovation directly to schools, universities, and enterprises. \n Thanks to ABA2020 Mintro Labs delivers hands-on blockchain education directly into classrooms and universities.",
    bullets: [
      {
        title: "Proven Expertise",
        description: "ABA2020 has collaborated with Roma Tre, LUISS, UCBM, and institutions across Italy.",
        icon: <FiArchive size={26} />,
      },
      {
        title: "Educational Access",
        description:
          "Delivered through PCTO programs and European innovation grants, ensuring real impact in classrooms.",
        icon: <FiCpu size={26} />,
      },
      {
        title: "Shared Vision",
        description:
          "Aba2020 and Mintro Labs are committed to democratizing blockchain education for all.",
        icon: <FiUsers size={26} />,
      },
    ],
    imageSrc: "/images/aba.png",
  },
];
