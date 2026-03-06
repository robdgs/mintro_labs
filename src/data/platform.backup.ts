import { ICourse, IArticle, IQuiz } from "@/types";

export const courses: ICourse[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description:
      "Learn the fundamentals of HTML, CSS, and JavaScript to build your first website.",
    duration: "6 weeks",
    level: "Beginner",
    thumbnail: "/images/courses/web-dev.jpg",
    category: "Web Development",
  },
  {
    id: "2",
    title: "React Fundamentals",
    description:
      "Master the basics of React and build interactive user interfaces.",
    duration: "8 weeks",
    level: "Intermediate",
    thumbnail: "/images/courses/react.jpg",
    category: "Frontend",
  },
  {
    id: "3",
    title: "Advanced TypeScript",
    description:
      "Deep dive into TypeScript advanced features and design patterns.",
    duration: "5 weeks",
    level: "Advanced",
    thumbnail: "/images/courses/typescript.jpg",
    category: "Programming",
  },
  {
    id: "4",
    title: "UI/UX Design Principles",
    description: "Learn how to create beautiful and user-friendly interfaces.",
    duration: "4 weeks",
    level: "Beginner",
    thumbnail: "/images/courses/ux.jpg",
    category: "Design",
  },
  {
    id: "5",
    title: "Node.js Backend Development",
    description:
      "Build scalable backend applications with Node.js and Express.",
    duration: "10 weeks",
    level: "Intermediate",
    thumbnail: "/images/courses/nodejs.jpg",
    category: "Backend",
  },
  {
    id: "6",
    title: "Database Design & SQL",
    description: "Master database design principles and SQL queries.",
    duration: "6 weeks",
    level: "Intermediate",
    thumbnail: "/images/courses/sql.jpg",
    category: "Database",
  },
];

export const articles: IArticle[] = [
  {
    id: "1",
    title: "The Future of Education Technology",
    description:
      "Exploring how AI and machine learning are transforming the education landscape.",
    readTime: "5 min read",
    category: "Technology",
    thumbnail: "/images/articles/ed-tech.jpg",
    author: "Sarah Johnson",
    date: "March 1, 2026",
    content: `
      <h2>The Dawn of AI-Powered Learning</h2>
      <p>Education technology has reached an inflection point. With the rapid advancement of artificial intelligence and machine learning, we're witnessing a fundamental transformation in how knowledge is delivered, absorbed, and assessed.</p>
      
      <h3>Personalized Learning Paths</h3>
      <p>Gone are the days of one-size-fits-all education. Modern AI systems can analyze a student's learning patterns, strengths, and weaknesses to create truly personalized learning experiences. These systems adapt in real-time, adjusting difficulty levels and content presentation based on individual progress.</p>
      
      <h3>Intelligent Tutoring Systems</h3>
      <p>AI-powered tutoring systems are now capable of providing instant feedback, answering questions, and offering explanations tailored to each student's level of understanding. These systems work 24/7, making quality education accessible anytime, anywhere.</p>
      
      <h3>Predictive Analytics</h3>
      <p>Machine learning algorithms can now predict when students might struggle with certain concepts, allowing educators to intervene proactively. This data-driven approach is revolutionizing student support and success rates.</p>
      
      <h3>The Human Element</h3>
      <p>Despite all this technology, the role of human educators remains crucial. Teachers are evolving from information deliverers to learning facilitators, focusing on critical thinking, creativity, and emotional intelligence - areas where human guidance is irreplaceable.</p>
      
      <p><strong>The future of education is not about replacing teachers with technology, but about empowering both educators and students with tools that make learning more effective, engaging, and accessible to all.</strong></p>
    `,
  },
  {
    id: "2",
    title: "10 Tips for Effective Online Learning",
    description:
      "Best practices to maximize your learning experience in online courses.",
    readTime: "7 min read",
    category: "Learning",
    thumbnail: "/images/articles/online-learning.jpg",
    author: "Michael Chen",
    date: "February 28, 2026",
    content: `
      <h2>Master the Art of Online Learning</h2>
      <p>Online learning offers incredible flexibility, but it also requires discipline and strategy. Here are ten proven tips to help you succeed in your online courses.</p>
      
      <h3>1. Create a Dedicated Study Space</h3>
      <p>Designate a specific area for learning. This helps your brain associate that space with focus and productivity. Keep it clean, organized, and free from distractions.</p>
      
      <h3>2. Stick to a Schedule</h3>
      <p>Treat online courses like traditional classes. Block out specific times for studying and stick to them. Consistency is key to building lasting habits.</p>
      
      <h3>3. Set Clear Goals</h3>
      <p>Define what you want to achieve from each course. Break down large goals into smaller, manageable milestones to maintain motivation.</p>
      
      <h3>4. Take Notes Actively</h3>
      <p>Don't just passively watch videos. Take detailed notes, summarize key points in your own words, and create mind maps to reinforce learning.</p>
      
      <h3>5. Participate in Discussions</h3>
      <p>Engage with fellow students and instructors in forums and discussion boards. This builds understanding and creates accountability.</p>
      
      <h3>6. Minimize Distractions</h3>
      <p>Turn off notifications, use website blockers if needed, and communicate your study times to family or roommates.</p>
      
      <h3>7. Practice Time Management</h3>
      <p>Use techniques like the Pomodoro method (25 minutes of focused work, 5-minute breaks) to maintain concentration and prevent burnout.</p>
      
      <h3>8. Review Regularly</h3>
      <p>Don't wait until exam time. Review material regularly using spaced repetition to move information into long-term memory.</p>
      
      <h3>9. Ask for Help</h3>
      <p>Don't struggle in silence. Reach out to instructors, join study groups, or use tutoring services when you need support.</p>
      
      <h3>10. Take Care of Yourself</h3>
      <p>Get enough sleep, exercise regularly, and maintain a healthy diet. Your physical well-being directly impacts your learning capacity.</p>
      
      <p><strong>Remember: Online learning success is less about being naturally talented and more about being consistently disciplined.</strong></p>
    `,
  },
  {
    id: "3",
    title: "Building Your First Portfolio Website",
    description: "A step-by-step guide to creating a professional portfolio.",
    readTime: "10 min read",
    category: "Web Development",
    thumbnail: "/images/articles/portfolio.jpg",
    author: "Emma Rodriguez",
    date: "February 25, 2026",
    content: `
      <h2>Your Portfolio: Your Digital Handshake</h2>
      <p>In today's digital world, a portfolio website is your professional calling card. Whether you're a developer, designer, writer, or creative professional, here's how to build a portfolio that stands out.</p>
      
      <h3>Step 1: Define Your Goals</h3>
      <p>Before writing a single line of code, ask yourself: What do you want this portfolio to achieve? Are you looking for employment, freelance clients, or showcasing personal projects? Your goal will shape every decision that follows.</p>
      
      <h3>Step 2: Choose Your Technology Stack</h3>
      <p>For beginners, we recommend starting simple:</p>
      <ul>
        <li><strong>HTML/CSS/JavaScript</strong> - The fundamentals that give you complete control</li>
        <li><strong>Static Site Generators</strong> - Like Next.js, Gatsby, or Hugo for better performance</li>
        <li><strong>CMS Options</strong> - WordPress or Webflow if you prefer visual builders</li>
      </ul>
      
      <h3>Step 3: Essential Pages</h3>
      <p>Your portfolio should include:</p>
      <ul>
        <li><strong>Home/About</strong> - Who you are and what you do (make it personal!)</li>
        <li><strong>Projects</strong> - Your best work with case studies</li>
        <li><strong>Skills</strong> - Technologies and tools you're proficient in</li>
        <li><strong>Contact</strong> - Make it easy for people to reach you</li>
      </ul>
      
      <h3>Step 4: Showcase Your Best Work</h3>
      <p>Quality over quantity! Include 3-5 of your best projects. For each project:</p>
      <ul>
        <li>Use high-quality screenshots or demos</li>
        <li>Explain the problem you solved</li>
        <li>Describe your approach and technologies used</li>
        <li>Include links to live demos and code (if public)</li>
      </ul>
      
      <h3>Step 5: Design Principles</h3>
      <ul>
        <li><strong>Keep it clean</strong> - White space is your friend</li>
        <li><strong>Make it responsive</strong> - Test on all device sizes</li>
        <li><strong>Use consistent branding</strong> - Colors, fonts, and style should be cohesive</li>
        <li><strong>Fast loading times</strong> - Optimize images and minimize dependencies</li>
      </ul>
      
      <h3>Step 6: Personal Touch</h3>
      <p>Let your personality shine through! Include a professional photo, write in your own voice, and don't be afraid to show what makes you unique.</p>
      
      <h3>Step 7: SEO and Accessibility</h3>
      <p>Use semantic HTML, add alt text to images, ensure good color contrast, and optimize meta tags for search engines.</p>
      
      <h3>Step 8: Deploy and Share</h3>
      <p>Free hosting options like Vercel, Netlify, or GitHub Pages make deployment a breeze. Once live, share your portfolio on LinkedIn, Twitter, and other professional networks.</p>
      
      <p><strong>Remember: Your portfolio is never truly finished. Update it regularly with new projects and skills as you grow!</strong></p>
    `,
  },
  {
    id: "4",
    title: "The Power of Spaced Repetition",
    description: "How to use spaced repetition to improve long-term retention.",
    readTime: "6 min read",
    category: "Learning",
    thumbnail: "/images/articles/spaced-rep.jpg",
    author: "Dr. James Park",
    date: "February 20, 2026",
    content: `
      <h2>Remember More, Study Less</h2>
      <p>What if I told you that studying less frequently could actually help you remember more? Welcome to the science-backed technique of spaced repetition.</p>
      
      <h3>The Science Behind It</h3>
      <p>Spaced repetition leverages the psychological spacing effect: we learn better when we spread out study sessions over time rather than cramming. This technique aligns with how our brain naturally consolidates memories.</p>
      
      <h3>How It Works</h3>
      <p>The concept is simple yet powerful:</p>
      <ol>
        <li>Learn something new</li>
        <li>Review it after a short interval (e.g., 1 day)</li>
        <li>Review again after a longer interval (e.g., 3 days)</li>
        <li>Continue increasing intervals (7 days, 14 days, 30 days, etc.)</li>
      </ol>
      
      <h3>The Forgetting Curve</h3>
      <p>German psychologist Hermann Ebbinghaus discovered that we forget approximately 50% of new information within an hour, and up to 90% within a week. Spaced repetition fights this curve by reinforcing memories just before you're likely to forget them.</p>
      
      <h3>Practical Implementation</h3>
      <p><strong>Digital Tools:</strong></p>
      <ul>
        <li>Anki - Highly customizable flashcard app</li>
        <li>Quizlet - User-friendly with pre-made card sets</li>
        <li>RemNote - Combines note-taking with spaced repetition</li>
      </ul>
      
      <p><strong>Manual Method:</strong></p>
      <p>Use the Leitner system with physical flashcards and boxes for different review intervals.</p>
      
      <h3>Best Practices</h3>
      <ul>
        <li><strong>Keep cards simple</strong> - One concept per card</li>
        <li><strong>Use active recall</strong> - Test yourself before flipping the card</li>
        <li><strong>Create your own cards</strong> - The creation process itself aids learning</li>
        <li><strong>Be consistent</strong> - Review daily, even if just for 10-15 minutes</li>
        <li><strong>Include context</strong> - Add examples or mnemonics to cards</li>
      </ul>
      
      <h3>What to Use It For</h3>
      <ul>
        <li>Languages (vocabulary, grammar patterns)</li>
        <li>Medical/Law terminology</li>
        <li>Programming syntax and concepts</li>
        <li>Historical dates and facts</li>
        <li>Formulas and equations</li>
      </ul>
      
      <h3>Common Mistakes to Avoid</h3>
      <ul>
        <li>Making cards too complex</li>
        <li>Creating cards for things you don't understand yet</li>
        <li>Skipping review sessions</li>
        <li>Not retiring cards you've truly mastered</li>
      </ul>
      
      <p><strong>The Bottom Line:</strong> Spaced repetition is one of the most efficient learning techniques ever studied. By working with your brain's natural memory processes, you can learn more in less time and retain it for life.</p>
    `,
  },
  {
    id: "5",
    title: "Career Paths in Tech 2026",
    description: "Exploring the most in-demand tech careers and skills.",
    readTime: "8 min read",
    category: "Career",
    thumbnail: "/images/articles/career.jpg",
    author: "Alex Thompson",
    date: "February 15, 2026",
    content: `
      <h2>Navigate Your Tech Career in 2026</h2>
      <p>The tech industry continues to evolve at breakneck speed. Here's your guide to the hottest career paths and the skills you need to succeed.</p>
      
      <h3>1. AI/ML Engineer</h3>
      <p><strong>Average Salary:</strong> $150,000 - $250,000</p>
      <p><strong>Key Skills:</strong> Python, TensorFlow, PyTorch, Statistics, Deep Learning</p>
      <p>With AI integration becoming ubiquitous, ML engineers are in unprecedented demand. You'll build and deploy models that power everything from recommendation systems to autonomous vehicles.</p>
      
      <h3>2. Cloud Architect</h3>
      <p><strong>Average Salary:</strong> $140,000 - $220,000</p>
      <p><strong>Key Skills:</strong> AWS/Azure/GCP, Kubernetes, Docker, Infrastructure as Code</p>
      <p>As companies complete their cloud migrations, architects who can design scalable, secure, cost-effective cloud solutions are invaluable.</p>
      
      <h3>3. Cybersecurity Specialist</h3>
      <p><strong>Average Salary:</strong> $130,000 - $200,000</p>
      <p><strong>Key Skills:</strong> Penetration Testing, Network Security, Cryptography, Compliance</p>
      <p>With cyber threats growing more sophisticated, security professionals are essential. This field offers excellent job security and growth potential.</p>
      
      <h3>4. Full-Stack Developer</h3>
      <p><strong>Average Salary:</strong> $110,000 - $180,000</p>
      <p><strong>Key Skills:</strong> React/Vue/Angular, Node.js, Database Design, API Development</p>
      <p>The classic tech role remains in high demand. Modern full-stack devs need to understand everything from UI/UX to database optimization.</p>
      
      <h3>5. DevOps Engineer</h3>
      <p><strong>Average Salary:</strong> $120,000 - $190,000</p>
      <p><strong>Key Skills:</strong> CI/CD, Linux, Scripting, Monitoring Tools, Automation</p>
      <p>DevOps engineers bridge development and operations, ensuring smooth deployments and reliable systems.</p>
      
      <h3>6. Data Scientist</h3>
      <p><strong>Average Salary:</strong> $130,000 - $210,000</p>
      <p><strong>Key Skills:</strong> Python/R, SQL, Statistics, Data Visualization, Machine Learning</p>
      <p>Turn data into actionable insights. Data scientists are critical for data-driven decision making across all industries.</p>
      
      <h3>7. Product Manager (Technical)</h3>
      <p><strong>Average Salary:</strong> $140,000 - $230,000</p>
      <p><strong>Key Skills:</strong> Technical Background, Agile, User Research, Analytics, Communication</p>
      <p>Technical PMs guide product development from conception to launch, requiring both tech knowledge and business acumen.</p>
      
      <h3>Emerging Roles to Watch</h3>
      <ul>
        <li><strong>Prompt Engineer</strong> - Optimizing AI model interactions</li>
        <li><strong>Blockchain Developer</strong> - Building decentralized applications</li>
        <li><strong>AR/VR Developer</strong> - Creating immersive experiences</li>
        <li><strong>IoT Specialist</strong> - Connecting the physical and digital worlds</li>
      </ul>
      
      <h3>Universal Skills for Success</h3>
      <p>Regardless of your specific path, these skills are crucial:</p>
      <ul>
        <li><strong>Problem-Solving</strong> - Break down complex challenges</li>
        <li><strong>Continuous Learning</strong> - Technology never stops evolving</li>
        <li><strong>Communication</strong> - Explain technical concepts to non-technical stakeholders</li>
        <li><strong>Collaboration</strong> - Work effectively in teams</li>
        <li><strong>System Thinking</strong> - Understand how components interact</li>
      </ul>
      
      <h3>Getting Started</h3>
      <ol>
        <li>Choose a path that aligns with your interests</li>
        <li>Build projects to demonstrate your skills</li>
        <li>Contribute to open-source projects</li>
        <li>Network with professionals in your target field</li>
        <li>Consider certifications for credibility</li>
        <li>Stay current with industry trends</li>
      </ol>
      
      <p><strong>Remember:</strong> The best tech career is one that challenges you, aligns with your values, and keeps you excited to learn. Don't just chase salaries—find work that fulfills you!</p>
    `,
  },
];

export const quizzes: IQuiz[] = [
  {
    id: "1",
    title: "HTML & CSS Basics Quiz",
    description: "Test your knowledge of HTML tags and CSS properties.",
    questions: 5,
    category: "Web Development",
    difficulty: "Easy",
    quizQuestions: [
      {
        id: "q1",
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        correctAnswer: 1,
        explanation:
          "<ul> stands for 'unordered list' and creates a bulleted list, while <ol> creates an ordered (numbered) list.",
      },
      {
        id: "q2",
        question: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Creative Style Sheets",
          "Colorful Style Sheets",
        ],
        correctAnswer: 1,
        explanation:
          "CSS stands for Cascading Style Sheets, which describes how HTML elements are displayed.",
      },
      {
        id: "q3",
        question: "Which CSS property is used to change the text color?",
        options: ["text-color", "font-color", "color", "text-style"],
        correctAnswer: 2,
        explanation:
          "The 'color' property is used to set the color of text in CSS.",
      },
      {
        id: "q4",
        question: "What is the correct HTML tag for the largest heading?",
        options: ["<h6>", "<heading>", "<h1>", "<head>"],
        correctAnswer: 2,
        explanation:
          "<h1> defines the largest heading, while <h6> defines the smallest heading.",
      },
      {
        id: "q5",
        question: "How do you select an element with id 'header' in CSS?",
        options: [".header", "#header", "*header", "header"],
        correctAnswer: 1,
        explanation:
          "The # symbol is used to select elements by their ID in CSS, while . is used for classes.",
      },
    ],
  },
  {
    id: "2",
    title: "JavaScript Fundamentals",
    description:
      "Challenge yourself with JavaScript questions covering variables, functions, and more.",
    questions: 5,
    category: "Programming",
    difficulty: "Medium",
    quizQuestions: [
      {
        id: "q1",
        question: "What is the output of: console.log(typeof null)?",
        options: ["'null'", "'undefined'", "'object'", "'number'"],
        correctAnswer: 2,
        explanation:
          "This is a known quirk in JavaScript. typeof null returns 'object' due to a bug in the original JavaScript implementation that was never fixed for backwards compatibility.",
      },
      {
        id: "q2",
        question:
          "Which keyword is used to declare a block-scoped variable in JavaScript?",
        options: ["var", "let", "const", "Both let and const"],
        correctAnswer: 3,
        explanation:
          "Both 'let' and 'const' are block-scoped, while 'var' is function-scoped. 'const' is for constants, 'let' for variables that can be reassigned.",
      },
      {
        id: "q3",
        question: "What will be the output of: [1, 2, 3].map(x => x * 2)?",
        options: ["[1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "6"],
        correctAnswer: 1,
        explanation:
          "The map() method creates a new array with the results of calling a function for every element. Here it multiplies each element by 2.",
      },
      {
        id: "q4",
        question: "What does the '===' operator do in JavaScript?",
        options: [
          "Assigns a value",
          "Compares values only",
          "Compares both value and type",
          "Declares a constant",
        ],
        correctAnswer: 2,
        explanation:
          "'===' is the strict equality operator that compares both value and type, while '==' only compares values after type coercion.",
      },
      {
        id: "q5",
        question: "What is a closure in JavaScript?",
        options: [
          "A function that closes the browser",
          "A function that has access to variables in its outer scope",
          "A way to close loops",
          "A type of error handling",
        ],
        correctAnswer: 1,
        explanation:
          "A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.",
      },
    ],
  },
  {
    id: "3",
    title: "React Advanced Concepts",
    description:
      "Test your understanding of React hooks, context, and performance optimization.",
    questions: 5,
    category: "Frontend",
    difficulty: "Hard",
    quizQuestions: [
      {
        id: "q1",
        question: "When does the useEffect hook run by default?",
        options: [
          "Only once when component mounts",
          "After every render",
          "Before every render",
          "Only when dependencies change",
        ],
        correctAnswer: 1,
        explanation:
          "By default, useEffect runs after every render. You can control this with the dependency array.",
      },
      {
        id: "q2",
        question: "What is the purpose of React.memo()?",
        options: [
          "To memorize user inputs",
          "To prevent re-rendering of a component if props haven't changed",
          "To store data in memory",
          "To create memoized selectors",
        ],
        correctAnswer: 1,
        explanation:
          "React.memo() is a higher-order component that prevents unnecessary re-renders by memoizing the result based on props.",
      },
      {
        id: "q3",
        question:
          "Which hook would you use to access context in a functional component?",
        options: ["useState", "useContext", "useReducer", "useRef"],
        correctAnswer: 1,
        explanation:
          "useContext is the hook specifically designed to consume context values in functional components.",
      },
      {
        id: "q4",
        question:
          "What is the correct way to update state based on previous state in useState?",
        options: [
          "setState(state + 1)",
          "setState(prevState => prevState + 1)",
          "setState = state + 1",
          "state = state + 1",
        ],
        correctAnswer: 1,
        explanation:
          "When updating state based on previous state, you should use the functional form: setState(prevState => newState) to ensure you're working with the most current state.",
      },
      {
        id: "q5",
        question: "What does the useCallback hook do?",
        options: [
          "Calls a function automatically",
          "Returns a memoized callback function",
          "Handles errors in callbacks",
          "Creates async callbacks",
        ],
        correctAnswer: 1,
        explanation:
          "useCallback returns a memoized version of the callback that only changes if dependencies change, helping to optimize performance by preventing unnecessary re-renders.",
      },
    ],
  },
  {
    id: "4",
    title: "Database Normalization",
    description:
      "Assess your knowledge of database design and normalization techniques.",
    questions: 5,
    category: "Database",
    difficulty: "Medium",
    quizQuestions: [
      {
        id: "q1",
        question: "What is the main purpose of database normalization?",
        options: [
          "To make queries faster",
          "To reduce data redundancy and improve data integrity",
          "To increase database size",
          "To make the database more complex",
        ],
        correctAnswer: 1,
        explanation:
          "Normalization is primarily used to reduce data redundancy and improve data integrity by organizing data efficiently.",
      },
      {
        id: "q2",
        question:
          "Which normal form requires that all attributes depend on the primary key?",
        options: [
          "First Normal Form (1NF)",
          "Second Normal Form (2NF)",
          "Third Normal Form (3NF)",
          "Boyce-Codd Normal Form (BCNF)",
        ],
        correctAnswer: 1,
        explanation:
          "Second Normal Form (2NF) requires that all non-key attributes are fully functionally dependent on the primary key.",
      },
      {
        id: "q3",
        question: "What does First Normal Form (1NF) require?",
        options: [
          "No duplicate rows",
          "All columns contain atomic values",
          "No transitive dependencies",
          "All foreign keys are valid",
        ],
        correctAnswer: 1,
        explanation:
          "1NF requires that all columns contain atomic (indivisible) values and that there are no repeating groups.",
      },
      {
        id: "q4",
        question: "What is a primary key?",
        options: [
          "The first column in a table",
          "A unique identifier for each record in a table",
          "The most important data in a table",
          "A foreign key reference",
        ],
        correctAnswer: 1,
        explanation:
          "A primary key is a unique identifier for each record in a table. It must be unique and cannot be null.",
      },
      {
        id: "q5",
        question: "What is denormalization?",
        options: [
          "Removing all normal forms",
          "Intentionally introducing redundancy for performance",
          "Deleting data from tables",
          "Breaking normalization rules by mistake",
        ],
        correctAnswer: 1,
        explanation:
          "Denormalization is the intentional introduction of redundancy to improve query performance, typically done after normalization.",
      },
    ],
  },
  {
    id: "5",
    title: "UX Design Principles",
    description:
      "Test your understanding of user experience design fundamentals.",
    questions: 5,
    category: "Design",
    difficulty: "Easy",
    quizQuestions: [
      {
        id: "q1",
        question: "What does UX stand for?",
        options: [
          "User Xerox",
          "User Experience",
          "Universal XML",
          "Unified Exchange",
        ],
        correctAnswer: 1,
        explanation:
          "UX stands for User Experience, which encompasses all aspects of a user's interaction with a product or service.",
      },
      {
        id: "q2",
        question:
          "Which principle states that similar elements should be grouped together?",
        options: ["Proximity", "Alignment", "Contrast", "Repetition"],
        correctAnswer: 0,
        explanation:
          "The proximity principle states that related items should be placed close together to show their relationship.",
      },
      {
        id: "q3",
        question: "What is a wireframe in UX design?",
        options: [
          "The final design mockup",
          "A low-fidelity sketch of the interface layout",
          "The code structure",
          "User feedback documentation",
        ],
        correctAnswer: 1,
        explanation:
          "A wireframe is a low-fidelity visual representation of the interface that shows the basic structure and layout without detailed design elements.",
      },
      {
        id: "q4",
        question: "What is the purpose of user personas in UX design?",
        options: [
          "To create user accounts",
          "To represent target user groups and their needs",
          "To design user interfaces",
          "To test the application",
        ],
        correctAnswer: 1,
        explanation:
          "User personas are fictional characters that represent different user types and help designers empathize with and design for their target audience.",
      },
      {
        id: "q5",
        question: "What does the term 'affordance' mean in UX design?",
        options: [
          "The cost of the design",
          "The property of an object that suggests how it can be used",
          "The color scheme",
          "The loading speed",
        ],
        correctAnswer: 1,
        explanation:
          "Affordance refers to the properties of an object that indicate how it can be used, like a button that looks clickable or a handle that looks pullable.",
      },
    ],
  },
];
