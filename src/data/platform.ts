import { ICourse, IArticle, IQuiz } from "@/types";

export const courses: ICourse[] = [
  {
    "id": "1",
    "title": "Introduction to Web Development",
    "description": "Learn the fundamentals of HTML, CSS, and JavaScript to build your first website. This comprehensive course will take you from complete beginner to building fully functional websites.",
    "duration": "6 weeks",
    "level": "Beginner",
    "thumbnail": "/images/courses/web-dev.jpg",
    "category": "Web Development",
    "instructor": "Sarah Johnson",
    "students": 12543,
    "modules": [
      {
        "id": "m1",
        "title": "HTML Basics",
        "description": "Learn the building blocks of web pages with HTML",
        "duration": "1 week",
        "order": 1,
        "content": "\n          <h3>Welcome to HTML!</h3>\n          <p>HTML (HyperText Markup Language) is the foundation of every website. It provides the structure and content that browsers render.</p>\n          \n          <h4>What is HTML?</h4>\n          <p>HTML is a markup language that uses tags to define elements on a page. Each tag tells the browser how to display content.</p>\n          \n          <h4>Basic HTML Structure</h4>\n          <pre><code>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n  &lt;head&gt;\n    &lt;title&gt;My First Page&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello World!&lt;/h1&gt;\n    &lt;p&gt;This is my first paragraph.&lt;/p&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre>\n          \n          <h4>Common HTML Tags</h4>\n          <ul>\n            <li><strong>&lt;h1&gt; to &lt;h6&gt;</strong> - Headings (h1 is largest)</li>\n            <li><strong>&lt;p&gt;</strong> - Paragraphs</li>\n            <li><strong>&lt;a&gt;</strong> - Links</li>\n            <li><strong>&lt;img&gt;</strong> - Images</li>\n            <li><strong>&lt;div&gt;</strong> - Container/division</li>\n            <li><strong>&lt;ul&gt;/&lt;ol&gt;/&lt;li&gt;</strong> - Lists</li>\n          </ul>\n          \n          <h4>Practice Exercise</h4>\n          <p>Create a simple personal webpage with a heading, paragraph, and list of your hobbies!</p>\n        "
      },
      {
        "id": "m2",
        "title": "CSS Styling",
        "description": "Make your websites beautiful with CSS",
        "duration": "1.5 weeks",
        "order": 2,
        "content": "\n          <h3>Styling with CSS</h3>\n          <p>CSS (Cascading Style Sheets) transforms plain HTML into visually appealing websites.</p>\n          \n          <h4>CSS Syntax</h4>\n          <pre><code>selector {\n  property: value;\n}</code></pre>\n          \n          <h4>Common Properties</h4>\n          <pre><code>.my-class {\n  color: #333;\n  background-color: #f0f0f0;\n  font-size: 16px;\n  margin: 20px;\n  padding: 10px;\n}</code></pre>\n          \n          <h4>The Box Model</h4>\n          <p>Every element is a box with content, padding, border, and margin.</p>\n          \n          <h4>Flexbox Layout</h4>\n          <pre><code>.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}</code></pre>\n        "
      },
      {
        "id": "m3",
        "title": "JavaScript Fundamentals",
        "description": "Add interactivity to your websites",
        "duration": "2 weeks",
        "order": 3,
        "content": "\n          <h3>JavaScript: Making Pages Interactive</h3>\n          <p>JavaScript brings your websites to life with dynamic behavior.</p>\n          \n          <h4>Variables</h4>\n          <pre><code>let name = \"John\";\nconst age = 25;\nlet isActive = true;</code></pre>\n          \n          <h4>Functions</h4>\n          <pre><code>function greet(name) {\n  return \"Hello, \" + name;\n}\n\nconst add = (a, b) => a + b;</code></pre>\n          \n          <h4>DOM Manipulation</h4>\n          <pre><code>const button = document.querySelector('#myButton');\nbutton.addEventListener('click', () => {\n  alert('Clicked!');\n});</code></pre>\n        "
      }
    ]
  },
  {
    "id": "2",
    "title": "React Fundamentals",
    "description": "Master the basics of React and build interactive user interfaces. Learn component-based architecture, state management, and modern React hooks.",
    "duration": "8 weeks",
    "level": "Intermediate",
    "thumbnail": "/images/courses/react.jpg",
    "category": "Frontend",
    "instructor": "Michael Chen",
    "students": 9876,
    "modules": [
      {
        "id": "m1",
        "title": "Introduction to React",
        "description": "Understand what React is and why it's popular",
        "duration": "1 week",
        "order": 1,
        "content": "\n          <h3>What is React?</h3>\n          <p>React is a JavaScript library for building user interfaces, created and maintained by Facebook.</p>\n          \n          <h4>Why React?</h4>\n          <ul>\n            <li><strong>Component-Based:</strong> Build encapsulated components</li>\n            <li><strong>Declarative:</strong> Design simple views for each state</li>\n            <li><strong>Learn Once, Write Anywhere:</strong> React for web, mobile, and more</li>\n          </ul>\n          \n          <h4>Your First Component</h4>\n          <pre><code>function Welcome() {\n  return &lt;h1&gt;Hello, React!&lt;/h1&gt;;\n}\n\nexport default Welcome;</code></pre>\n          \n          <h4>JSX</h4>\n          <p>JSX lets you write HTML-like code in JavaScript:</p>\n          <pre><code>const element = &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;</code></pre>\n        "
      },
      {
        "id": "m2",
        "title": "Components and Props",
        "description": "Build reusable components and pass data with props",
        "duration": "1.5 weeks",
        "order": 2,
        "content": "\n          <h3>Components: The Building Blocks</h3>\n          <p>Everything in React is a component.</p>\n          \n          <h4>Props: Passing Data</h4>\n          <pre><code>function UserCard({ name, age, email }) {\n  return (\n    &lt;div className=\"card\"&gt;\n      &lt;h2&gt;{name}&lt;/h2&gt;\n      &lt;p&gt;Age: {age}&lt;/p&gt;\n      &lt;p&gt;Email: {email}&lt;/p&gt;\n    &lt;/div&gt;\n  );\n}\n\n&lt;UserCard name=\"John\" age={25} email=\"john@example.com\" /&gt;</code></pre>\n          \n          <h4>Rendering Lists</h4>\n          <pre><code>{users.map(user => (\n  &lt;li key={user.id}&gt;\n    &lt;UserCard {...user} /&gt;\n  &lt;/li&gt;\n))}</code></pre>\n        "
      },
      {
        "id": "m3",
        "title": "State and Hooks",
        "description": "Manage component state with useState hook",
        "duration": "2 weeks",
        "order": 3,
        "content": "\n          <h3>State: Making Components Interactive</h3>\n          <p>State allows components to remember information.</p>\n          \n          <h4>useState Hook</h4>\n          <pre><code>import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    &lt;div&gt;\n      &lt;p&gt;Count: {count}&lt;/p&gt;\n      &lt;button onClick={() => setCount(count + 1)}&gt;\n        Increment\n      &lt;/button&gt;\n    &lt;/div&gt;\n  );\n}</code></pre>\n          \n          <h4>useEffect Hook</h4>\n          <pre><code>useEffect(() => {\n  // Runs after render\n  console.log('Component rendered');\n}, [dependency]); // Re-run when dependency changes</code></pre>\n        "
      }
    ]
  },
  {
    "id": "3",
    "title": "Advanced TypeScript",
    "description": "Deep dive into TypeScript advanced features and design patterns. Master generics, utility types, and type-safe programming.",
    "duration": "5 weeks",
    "level": "Advanced",
    "thumbnail": "/images/courses/typescript.jpg",
    "category": "Programming",
    "instructor": "Dr. Emily Watson",
    "students": 5432,
    "modules": [
      {
        "id": "m1",
        "title": "TypeScript Fundamentals Review",
        "description": "Quick review of TypeScript basics",
        "duration": "0.5 weeks",
        "order": 1,
        "content": "\n          <h3>TypeScript Essentials</h3>\n          <p>A quick refresher before diving into advanced concepts.</p>\n          \n          <h4>Basic Types</h4>\n          <pre><code>let name: string = \"John\";\nlet age: number = 25;\nlet isActive: boolean = true;\nlet items: number[] = [1, 2, 3];</code></pre>\n          \n          <h4>Interfaces</h4>\n          <pre><code>interface User {\n  id: number;\n  name: string;\n  email?: string;\n  readonly createdAt: Date;\n}</code></pre>\n          \n          <h4>Generics Basics</h4>\n          <pre><code>function identity&lt;T&gt;(arg: T): T {\n  return arg;\n}</code></pre>\n        "
      },
      {
        "id": "m2",
        "title": "Advanced Types",
        "description": "Master union, intersection, and conditional types",
        "duration": "1.5 weeks",
        "order": 2,
        "content": "\n          <h3>Advanced Type System</h3>\n          <p>TypeScript's type system is incredibly powerful.</p>\n          \n          <h4>Union Types</h4>\n          <pre><code>type Status = \"pending\" | \"approved\" | \"rejected\";\ntype ID = string | number;</code></pre>\n          \n          <h4>Intersection Types</h4>\n          <pre><code>type EmployeePerson = Person & Employee;</code></pre>\n          \n          <h4>Conditional Types</h4>\n          <pre><code>type IsString&lt;T&gt; = T extends string ? true : false;</code></pre>\n          \n          <h4>Mapped Types</h4>\n          <pre><code>type Readonly&lt;T&gt; = {\n  readonly [P in keyof T]: T[P];\n};</code></pre>\n        "
      },
      {
        "id": "m3",
        "title": "Generics Deep Dive",
        "description": "Master generic types and constraints",
        "duration": "1.5 weeks",
        "order": 3,
        "content": "\n          <h3>Generics: Writing Reusable Code</h3>\n          <p>Generics allow you to write flexible, type-safe code.</p>\n          \n          <h4>Generic Functions</h4>\n          <pre><code>function firstElement&lt;T&gt;(arr: T[]): T | undefined {\n  return arr[0];\n}</code></pre>\n          \n          <h4>Generic Constraints</h4>\n          <pre><code>interface Lengthwise {\n  length: number;\n}\n\nfunction logLength&lt;T extends Lengthwise&gt;(arg: T): void {\n  console.log(arg.length);\n}</code></pre>\n          \n          <h4>Generic Classes</h4>\n          <pre><code>class Stack&lt;T&gt; {\n  private items: T[] = [];\n  \n  push(item: T): void {\n    this.items.push(item);\n  }\n}</code></pre>\n        "
      }
    ]
  },
  {
    "id": "4",
    "title": "UI/UX Design Principles",
    "description": "Learn how to create beautiful and user-friendly interfaces. Master design thinking, prototyping, and user research.",
    "duration": "4 weeks",
    "level": "Beginner",
    "thumbnail": "/images/courses/ux.jpg",
    "category": "Design",
    "instructor": "Alex Rivera",
    "students": 8765,
    "modules": [
      {
        "id": "m1",
        "title": "Introduction to UX Design",
        "description": "Understanding user experience fundamentals",
        "duration": "1 week",
        "order": 1,
        "content": "\n          <h3>What is UX Design?</h3>\n          <p>UX Design is about creating products that provide meaningful and relevant experiences to users.</p>\n          \n          <h4>Key Principles</h4>\n          <ul>\n            <li><strong>User-Centered:</strong> Always design with the user in mind</li>\n            <li><strong>Consistency:</strong> Maintain uniformity across the interface</li>\n            <li><strong>Accessibility:</strong> Make products usable for everyone</li>\n            <li><strong>Feedback:</strong> Provide clear feedback for user actions</li>\n          </ul>\n          \n          <h4>The Design Process</h4>\n          <ol>\n            <li>Research and understand users</li>\n            <li>Define the problem</li>\n            <li>Ideate solutions</li>\n            <li>Prototype and test</li>\n            <li>Iterate based on feedback</li>\n          </ol>\n        "
      },
      {
        "id": "m2",
        "title": "Visual Design Basics",
        "description": "Color, typography, and layout principles",
        "duration": "1.5 weeks",
        "order": 2,
        "content": "\n          <h3>Visual Design Elements</h3>\n          <p>Good visual design enhances usability and creates emotional connections.</p>\n          \n          <h4>Color Theory</h4>\n          <ul>\n            <li>Primary, secondary, and tertiary colors</li>\n            <li>Color psychology and meaning</li>\n            <li>Contrast and accessibility</li>\n            <li>Creating color palettes</li>\n          </ul>\n          \n          <h4>Typography</h4>\n          <ul>\n            <li>Font families and pairing</li>\n            <li>Hierarchy and readability</li>\n            <li>Line height and spacing</li>\n          </ul>\n          \n          <h4>Layout Principles</h4>\n          <ul>\n            <li>Grid systems</li>\n            <li>White space and balance</li>\n            <li>Visual hierarchy</li>\n          </ul>\n        "
      },
      {
        "id": "m3",
        "title": "Prototyping and Testing",
        "description": "Create and validate your designs",
        "duration": "1.5 weeks",
        "order": 3,
        "content": "\n          <h3>From Wireframes to Prototypes</h3>\n          <p>Learn to create and test your design ideas.</p>\n          \n          <h4>Wireframing</h4>\n          <p>Low-fidelity sketches that show structure and layout without detailed design.</p>\n          \n          <h4>Prototyping Tools</h4>\n          <ul>\n            <li><strong>Figma:</strong> Collaborative design tool</li>\n            <li><strong>Adobe XD:</strong> UI/UX design and prototyping</li>\n            <li><strong>Sketch:</strong> Vector-based design</li>\n          </ul>\n          \n          <h4>User Testing</h4>\n          <ol>\n            <li>Define test goals</li>\n            <li>Recruit participants</li>\n            <li>Conduct sessions</li>\n            <li>Analyze results</li>\n            <li>Iterate on design</li>\n          </ol>\n        "
      }
    ]
  },
  {
    "id": "5",
    "title": "Node.js Backend Development",
    "description": "Build scalable backend applications with Node.js and Express. Learn RESTful APIs, databases, and authentication.",
    "duration": "10 weeks",
    "level": "Intermediate",
    "thumbnail": "/images/courses/nodejs.jpg",
    "category": "Backend",
    "instructor": "David Kumar",
    "students": 7654,
    "modules": [
      {
        "id": "m1",
        "title": "Node.js Fundamentals",
        "description": "Understanding Node.js and its ecosystem",
        "duration": "1.5 weeks",
        "order": 1,
        "content": "\n          <h3>Welcome to Node.js</h3>\n          <p>Node.js is a JavaScript runtime built on Chrome's V8 engine for building server-side applications.</p>\n          \n          <h4>Why Node.js?</h4>\n          <ul>\n            <li>JavaScript on the server</li>\n            <li>Non-blocking, event-driven architecture</li>\n            <li>Vast ecosystem (npm)</li>\n            <li>Great for real-time applications</li>\n          </ul>\n          \n          <h4>Your First Server</h4>\n          <pre><code>const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello World!');\n});\n\nserver.listen(3000, () => {\n  console.log('Server running on port 3000');\n});</code></pre>\n        "
      },
      {
        "id": "m2",
        "title": "Express.js Framework",
        "description": "Building web applications with Express",
        "duration": "2 weeks",
        "order": 2,
        "content": "\n          <h3>Express.js</h3>\n          <p>Express is a minimal and flexible Node.js web application framework.</p>\n          \n          <h4>Basic Server</h4>\n          <pre><code>const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n\napp.listen(3000, () => {\n  console.log('Server started on port 3000');\n});</code></pre>\n          \n          <h4>Middleware</h4>\n          <pre><code>app.use(express.json());\napp.use(express.urlencoded({ extended: true }));\n\napp.use((req, res, next) => {\n  console.log('Request received');\n  next();\n});</code></pre>\n        "
      },
      {
        "id": "m3",
        "title": "RESTful APIs",
        "description": "Creating REST APIs with Express",
        "duration": "2.5 weeks",
        "order": 3,
        "content": "\n          <h3>Building REST APIs</h3>\n          <p>REST is an architectural style for designing networked applications.</p>\n          \n          <h4>CRUD Operations</h4>\n          <pre><code>// GET all users\napp.get('/api/users', async (req, res) => {\n  const users = await User.find();\n  res.json(users);\n});\n\n// GET single user\napp.get('/api/users/:id', async (req, res) => {\n  const user = await User.findById(req.params.id);\n  res.json(user);\n});\n\n// POST create user\napp.post('/api/users', async (req, res) => {\n  const user = await User.create(req.body);\n  res.status(201).json(user);\n});\n\n// PUT update user\napp.put('/api/users/:id', async (req, res) => {\n  const user = await User.findByIdAndUpdate(req.params.id, req.body);\n  res.json(user);\n});\n\n// DELETE user\napp.delete('/api/users/:id', async (req, res) => {\n  await User.findByIdAndDelete(req.params.id);\n  res.status(204).send();\n});</code></pre>\n        "
      }
    ]
  },
  {
    "id": "6",
    "title": "Database Design & SQL",
    "description": "Master database design principles and SQL queries. Learn relational databases, normalization, and optimization.",
    "duration": "6 weeks",
    "level": "Intermediate",
    "thumbnail": "/images/courses/sql.jpg",
    "category": "Database",
    "instructor": "Prof. Maria Garcia",
    "students": 6543,
    "modules": [
      {
        "id": "m1",
        "title": "Database Fundamentals",
        "description": "Introduction to relational databases",
        "duration": "1 week",
        "order": 1,
        "content": "\n          <h3>What is a Database?</h3>\n          <p>A database is an organized collection of structured data stored electronically.</p>\n          \n          <h4>Relational Databases</h4>\n          <p>Store data in tables with rows and columns, connected through relationships.</p>\n          \n          <h4>Key Concepts</h4>\n          <ul>\n            <li><strong>Tables:</strong> Store data in rows and columns</li>\n            <li><strong>Primary Key:</strong> Unique identifier for each record</li>\n            <li><strong>Foreign Key:</strong> Links tables together</li>\n            <li><strong>Index:</strong> Improves query performance</li>\n          </ul>\n          \n          <h4>Popular RDBMS</h4>\n          <ul>\n            <li>MySQL</li>\n            <li>PostgreSQL</li>\n            <li>SQLite</li>\n            <li>Microsoft SQL Server</li>\n          </ul>\n        "
      },
      {
        "id": "m2",
        "title": "SQL Basics",
        "description": "Learn SQL query language",
        "duration": "2 weeks",
        "order": 2,
        "content": "\n          <h3>Structured Query Language (SQL)</h3>\n          <p>SQL is the standard language for managing relational databases.</p>\n          \n          <h4>SELECT Queries</h4>\n          <pre><code>-- Select all columns\nSELECT * FROM users;\n\n-- Select specific columns\nSELECT name, email FROM users;\n\n-- With WHERE clause\nSELECT * FROM users WHERE age > 18;\n\n-- Sorting\nSELECT * FROM users ORDER BY name ASC;\n\n-- Limiting results\nSELECT * FROM users LIMIT 10;</code></pre>\n          \n          <h4>INSERT, UPDATE, DELETE</h4>\n          <pre><code>-- Insert\nINSERT INTO users (name, email, age) \nVALUES ('John', 'john@example.com', 25);\n\n-- Update\nUPDATE users \nSET age = 26 \nWHERE id = 1;\n\n-- Delete\nDELETE FROM users \nWHERE id = 1;</code></pre>\n        "
      },
      {
        "id": "m3",
        "title": "Database Design & Normalization",
        "description": "Design efficient database schemas",
        "duration": "2 weeks",
        "order": 3,
        "content": "\n          <h3>Database Design Principles</h3>\n          <p>Good database design is crucial for performance and maintainability.</p>\n          \n          <h4>Normalization</h4>\n          <p>Process of organizing data to reduce redundancy.</p>\n          \n          <h5>First Normal Form (1NF)</h5>\n          <ul>\n            <li>Atomic values (no arrays or lists)</li>\n            <li>Unique rows</li>\n          </ul>\n          \n          <h5>Second Normal Form (2NF)</h5>\n          <ul>\n            <li>Must be in 1NF</li>\n            <li>All non-key attributes depend on the primary key</li>\n          </ul>\n          \n          <h5>Third Normal Form (3NF)</h5>\n          <ul>\n            <li>Must be in 2NF</li>\n            <li>No transitive dependencies</li>\n          </ul>\n          \n          <h4>Relationships</h4>\n          <ul>\n            <li><strong>One-to-One:</strong> User has one profile</li>\n            <li><strong>One-to-Many:</strong> User has many posts</li>\n            <li><strong>Many-to-Many:</strong> Students enroll in courses</li>\n          </ul>\n        "
      }
    ]
  }
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
