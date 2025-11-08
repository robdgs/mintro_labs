import {
  FiBarChart2,
  FiBriefcase,
  FiDollarSign,
  FiLock,
  FiPieChart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Gamified Learning",
    description:
      "Learning becomes an experience. Mintro Labs transforms courses and workshops into dynamic journeys built on progress, challenge, and discovery.",
    bullets: [
      {
        title: "Progressive Modules",
        description:
          "Structured like a game where you advance through curated modules that evolve with your skills",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Verified Credentials",
        description: "Earn on-chain certificates aligned with the ELEVATE framework of the Digital Europe Programme",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Challenges",
        description:
          "Apply knowledge in hands-on projects and competitions that strengthen teamwork and creativity.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/mock2.png",
  },

  {
    title: "Learning Resources",
    description:
      "A single ecosystem for Web3 learning: clear, accessible, and designed to reduce noise while boosting understanding.",
    bullets: [
      {
        title: "Unified Knowledge Hub",
        description:
          "Articles, guides, and tutorials in one cohesive platform.",
        icon: <FiLock size={26} />,
      },
      {
        title: "AI Study Companion",
        description:
          "Get personalized study recommendations and resources based on your learning style and progress.",
        icon: <FiUser size={26} />,
      },
      {
        title: "Real-Time Fraud Detection",
        description:
          "Our system constantly monitors for suspicious activity to keep your money safe.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/Untitled.png",
  },
  {
    title: "By Our Side",
    description:
      "Mintro Labs partners with ABA2020 to bring innovation directly to schools, universities, and enterprises.",
    bullets: [
      {
        title: "Proven Expertise",
        description: "ABA2020 has collaborated with Roma Tre, LUISS, UCBM, and institutions across Italy.",
        icon: <FiDollarSign size={26} />,
      },
      {
        title: "Educational Access",
        description:
          "Delivered through PCTO programs and European innovation grants, ensuring real impact in classrooms.",
        icon: <FiBriefcase size={26} />,
      },
      {
        title: "Shared Vision",
        description:
          "Track your investments with easy-to-understand metrics and visuals.",
        icon: <FiPieChart size={26} />,
      },
    ],
    imageSrc: "/images/aba.png",
  },
];
