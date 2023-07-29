// exampleData.ts
export interface Question {
  id: number;
  title: string;
  content: string;
  tags: string[];
  author: string;
}

const exampleData: Question[] = [
  {
    id: 1,
    title: "How to use React Hooks?",
    content: "This is the content of the question about React Hooks.",
    tags: ["react", "hooks", "javascript"],
    author: "John Doe",
  },
  {
    id: 2,
    title: "What is the difference between let and const in JavaScript?",
    content: "This is the content of the question about JavaScript variables.",
    tags: ["javascript", "es6"],
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "How to fetch data using Axios in React?",
    content: "This is the content of the question about Axios and React.",
    tags: ["react", "axios", "javascript"],
    author: "Bob Johnson",
  },
  {
    id: 4,
    title: "What are the best practices for React component naming?",
    content:
      "This is the content of the question about React component naming.",
    tags: ["react", "best-practices", "coding"],
    author: "Sarah Adams",
  },

  {
    id: 5,
    title: "How to deploy a React app to GitHub Pages?",
    content:
      "This is the content of the question about deploying a React app to GitHub Pages.",
    tags: ["react", "deployment", "github-pages"],
    author: "Mike Johnson",
  },
  {
    id: 6,
    title: "How to implement pagination in React?",
    content:
      "This is the content of the question about implementing pagination in React.",
    tags: ["react", "pagination", "frontend"],
    author: "Emily Smith",
  },
  {
    id: 30,
    title: "How to style components with styled-components?",
    content: "This is the content of the question about styled-components.",
    tags: ["react", "styled-components", "css"],
    author: "Alex Johnson",
  },
];

export default exampleData;
