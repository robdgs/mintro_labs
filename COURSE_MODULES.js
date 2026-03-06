// Add these modules to the courses in platform.ts

// For course id: "1" - Introduction to Web Development
const webDevModules = [
  {
    id: "m1",
    title: "HTML Basics",
    description: "Learn the building blocks of web pages with HTML",
    duration: "1 week",
    order: 1,
    content: `
      <h3>Welcome to HTML!</h3>
      <p>HTML (HyperText Markup Language) is the foundation of every website.</p>
      
      <h4>Basic HTML Structure</h4>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      
      <h4>Common Tags</h4>
      <ul>
        <li><strong>&lt;h1-h6&gt;</strong> - Headings</li>
        <li><strong>&lt;p&gt;</strong> - Paragraphs</li>
        <li><strong>&lt;a&gt;</strong> - Links</li>
        <li><strong>&lt;img&gt;</strong> - Images</li>
      </ul>
    `,
  },
  {
    id: "m2",
    title: "CSS Styling",
    description: "Make your websites beautiful with CSS",
    duration: "1.5 weeks",
    order: 2,
    content: `
      <h3>Styling with CSS</h3>
      <p>CSS transforms plain HTML into beautiful websites.</p>
      
      <h4>Basic Syntax</h4>
      <pre><code>selector {
  property: value;
}</code></pre>
      
      <h4>Common Properties</h4>
      <pre><code>.my-class {
  color: #333;
  font-size: 16px;
  margin: 20px;
}</code></pre>
    `,
  },
  {
    id: "m3",
    title: "JavaScript Fundamentals",
    description: "Add interactivity to your websites",
    duration: "2 weeks",
    order: 3,
    content: `
      <h3>JavaScript Basics</h3>
      <p>Make your pages interactive!</p>
      
      <h4>Variables</h4>
      <pre><code>let name = "John";
const age = 25;</code></pre>
      
      <h4>Functions</h4>
      <pre><code>function greet(name) {
  return "Hello, " + name;
}</code></pre>
    `,
  },
];

// For course id: "2" - React Fundamentals
const reactModules = [
  {
    id: "m1",
    title: "Introduction to React",
    description: "Understand what React is and why it's popular",
    duration: "1 week",
    order: 1,
    content: `
      <h3>What is React?</h3>
      <p>React is a JavaScript library for building user interfaces.</p>
      
      <h4>Your First Component</h4>
      <pre><code>function Welcome() {
  return &lt;h1&gt;Hello, React!&lt;/h1&gt;;
}</code></pre>
    `,
  },
  {
    id: "m2",
    title: "Components and Props",
    description: "Build reusable components",
    duration: "1.5 weeks",
    order: 2,
    content: `
      <h3>Components</h3>
      <p>Everything in React is a component.</p>
      
      <h4>Props</h4>
      <pre><code>function UserCard({ name, age }) {
  return (
    &lt;div&gt;
      &lt;h2&gt;{name}&lt;/h2&gt;
      &lt;p&gt;{age}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
    `,
  },
  {
    id: "m3",
    title: "State and Hooks",
    description: "Manage component state",
    duration: "2 weeks",
    order: 3,
    content: `
      <h3>useState Hook</h3>
      <p>Make components interactive with state.</p>
      
      <pre><code>const [count, setCount] = useState(0);

&lt;button onClick={() => setCount(count + 1)}&gt;
  Count: {count}
&lt;/button&gt;</code></pre>
    `,
  },
];

// For course id: "3" - Advanced TypeScript
const typescriptModules = [
  {
    id: "m1",
    title: "TypeScript Fundamentals",
    description: "Quick review of TypeScript basics",
    duration: "0.5 weeks",
    order: 1,
    content: `
      <h3>TypeScript Essentials</h3>
      <p>TypeScript adds types to JavaScript.</p>
      
      <h4>Basic Types</h4>
      <pre><code>let name: string = "John";
let age: number = 25;
let items: number[] = [1, 2, 3];</code></pre>
    `,
  },
  {
    id: "m2",
    title: "Advanced Types",
    description: "Union, intersection, and conditional types",
    duration: "1.5 weeks",
    order: 2,
    content: `
      <h3>Advanced Type System</h3>
      <p>TypeScript's type system is powerful.</p>
      
      <h4>Union Types</h4>
      <pre><code>type ID = string | number;</code></pre>
      
      <h4>Intersection Types</h4>
      <pre><code>type Employee = Person & Worker;</code></pre>
    `,
  },
  {
    id: "m3",
    title: "Generics",
    description: "Write reusable typed code",
    duration: "1.5 weeks",
    order: 3,
    content: `
      <h3>Generics</h3>
      <p>Create flexible, type-safe code.</p>
      
      <pre><code>function identity&lt;T&gt;(arg: T): T {
  return arg;
}</code></pre>
    `,
  },
];

// Instructions:
// 1. Add 'instructor: "Name"' and 'students: number' to each course
// 2. Add 'modules: []' with the above content to each course
// Example:
/*
{
  id: "1",
  title: "Introduction to Web Development",
  description: "...",
  duration: "6 weeks",
  level: "Beginner",
  thumbnail: "/images/courses/web-dev.jpg",
  category: "Web Development",
  instructor: "Sarah Johnson",
  students: 12543,
  modules: webDevModules
},
*/
