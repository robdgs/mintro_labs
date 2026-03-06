export interface IMenuItem {
  text: string;
  url: string;
}

export interface IBenefit {
  title: string;
  description: string;
  imageSrc: string;
  bullets: IBenefitBullet[];
}

export interface IBenefitBullet {
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface IPricing {
  name: string;
  price: number | string;
  features: string[];
}

export interface IFAQ {
  question: string;
  answer: string;
}

export interface IPartner {
  name: string;
  role: string;
  message: string;
  avatar: string;
}

export interface IStats {
  title: string;
  icon: JSX.Element;
  description: string;
}

export interface ICourse {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  thumbnail: string;
  category: string;
  modules?: ICourseModule[];
  instructor?: string;
  students?: number;
}

export interface ICourseModule {
  id: string;
  title: string;
  description: string;
  content: string;
  duration: string;
  order: number;
}

export interface IArticle {
  id: string;
  title: string;
  description: string;
  readTime: string;
  category: string;
  thumbnail: string;
  content?: string;
  author?: string;
  date?: string;
}

export interface IQuiz {
  id: string;
  title: string;
  description: string;
  questions: number;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  quizQuestions?: IQuizQuestion[];
}

export interface IQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface ISocials {
  facebook?: string;
  github?: string;
  instagram?: string;
  linkedin?: string;
  threads?: string;
  twitter?: string;
  youtube?: string;
  x?: string;
  [key: string]: string | undefined;
}
