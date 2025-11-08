import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `What is Mintro Labs?`,
        answer: 'Mintro Labs is a non-profit startup that reimagines how people learn about Web3, blockchain, and emerging technologies. We combine maieutic learning methods, gamified education, and on-chain certification to make tech learning more engaging, structured, and accessible.',
    },
    {
        question: `Who is ${siteDetails.siteName} for?`,
        answer: 'Mintro Labs is designed for students, universities, and young professionals eager to explore the Web3 ecosystem. We also collaborate with companies and institutions that want to feature their technologies or protocols in our workshops, labs, and courses.',
    },
    {
        question: 'What makes Mintro Labs different?',
        answer: `Unlike traditional learning platforms, Mintro Labs integrates game mechanics, community collaboration, and verified blockchain credentials.
Our approach transforms learning into an interactive journey — with clear progress, recognition, and real-world outcomes.`
    },
    {
        question: 'Can companies collaborate with Mintro Labs?',
        answer: 'Absolutely. Companies can feature their technology, protocol, or case study in our courses, labs, or competitions. It’s an opportunity to educate, attract, and connect with the next generation of talent in a meaningful way.',
    },
    {
        question:'Is Mintro Labs free to use?',
        answer: 'Access to most of our learning content is free. Specialized workshops, collaborations, or advanced certifications may be hosted in partnership with educational institutions or supported by grants and sponsors.',
    },
    {
        question: 'How does Mintro Labs reach schools and universities?',
        answer: 'Through our partner aba2020, we deliver programs directly to high schools and universities across Italy. Our activities are also part of PCTO programs and European innovation and education initiatives.'
    },
    {
        question: 'How can I get involved with Mintro Labs?',
        answer: 'You can join as a learner, apply as a mentor or partner, or collaborate on educational initiatives. Follow us, sign up for updates, or contact our team to start building the future of learning together.',
    }
];