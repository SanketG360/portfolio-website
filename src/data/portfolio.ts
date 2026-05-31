export const personalInfo = {
  name: "Sanket Godse",
  title: "Software Engineer | Java Backend Developer | Distributed Systems Enthusiast",
  description: "I build scalable backend systems, real-time architectures, and production-grade distributed applications using Java, Spring Boot, Kafka, Redis, PostgreSQL, and modern cloud-native technologies.",
  email: "sanketgodse360@gmail.com",
  github: "https://github.com/SanketG360",
  linkedin: "https://www.linkedin.com/in/sanket-godse-a8b662198/",
  leetcode: "https://leetcode.com/u/algo_sanket/",
  resumeUrl: "#",
};

export const aboutText = `I'm a software engineer focused on backend engineering, distributed systems, and scalable application architecture. I enjoy building high-performance systems using Java, Spring Boot, Kafka, Redis, PostgreSQL, and Node.js.

My interests include event-driven systems, real-time communication, microservices, caching strategies, system design, and cloud-native architectures.

I love solving engineering problems related to scalability, performance optimization, and resilient backend systems.`;

export const skills = {
  Backend: [
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
  ],
  Frontend: [
    { name: "React.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
  ],
  Database: [
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Redis", level: 85 },
  ],
  "Distributed Systems": [
    { name: "Apache Kafka", level: 85 },
    { name: "WebSockets", level: 80 },
    { name: "Event-Driven Architecture", level: 85 },
    { name: "Microservices", level: 80 },
  ],
  "DevOps & Tools": [
    { name: "Docker", level: 80 },
    { name: "Git", level: 90 },
    { name: "GitHub", level: 90 },
    { name: "Postman", level: 85 },
    { name: "Linux", level: 75 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "SmartNotify – Real-Time Notification Engine",
    tagline: "Distributed event-driven notification platform built using Kafka, Redis, and WebSockets.",
    description: "SmartNotify is a scalable real-time notification engine designed using event-driven architecture principles. The platform processes asynchronous events using Apache Kafka, leverages Redis for caching and fast message delivery, and uses WebSockets for instant real-time communication. The system is designed with idempotency handling, retry mechanisms, asynchronous processing, and scalable microservice architecture patterns.",
    highlights: [
      "Real-time notifications using WebSockets",
      "Kafka-based asynchronous event processing",
      "Redis caching & pub/sub integration",
      "Idempotency & retry handling",
      "Distributed microservice architecture",
      "High scalability and fault tolerance",
    ],
    techStack: ["Java", "Spring Boot", "Kafka", "Redis", "WebSocket", "PostgreSQL", "Docker"],
    github: "",
    demo: "#",
    image: "/projects/smartnotify.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "AirBnB Clone – Full Stack Booking Platform",
    tagline: "Production-style property booking and management platform.",
    description: "Built a full-stack accommodation booking platform inspired by AirBnB with authentication, property listing management, booking workflows, image uploads, search filtering, and responsive user experience. The platform focuses on scalable backend APIs, optimized database handling, secure authentication flows, and modern frontend architecture.",
    highlights: [
      "Authentication & authorization",
      "Property listing management",
      "Booking workflows",
      "Search & filtering",
      "REST API architecture",
      "Responsive modern UI",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT", "Tailwind CSS"],
    github: "https://github.com/SanketG360/Hotel-CRM",
    demo: "#",
    image: "/projects/airbnb.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Distributed LinkedIn Clone",
    tagline: "Scalable social networking platform with graph-based relationship architecture.",
    description: "Designed and developed a distributed professional networking platform inspired by LinkedIn using graph database concepts and scalable backend services. The platform supports user connections, feeds, posts, messaging, profile systems, and graph-based relationship management optimized for scalability and social network traversal.",
    highlights: [
      "Graph-based relationship modeling",
      "Distributed backend architecture",
      "Feed generation system",
      "Real-time messaging concepts",
      "Scalable social graph design",
      "Optimized connection traversal",
    ],
    techStack: ["Java", "Spring Boot", "Neo4j", "Kafka", "Redis", "PostgreSQL", "Docker"],
    github: "",
    demo: "#",
    image: "/projects/linkedin.jpg",
    featured: true,
  },
];

export const experience = [
  {
    id: 1,
    company: "Centralogic",
    title: "Software Engineer",
    location: "Pune, Maharashtra",
    period: "Oct 2024 – Present",
    description: "Engineered the backend core for Monotype R360 — a research automation platform that discovers subsidiary intelligence, digital assets, and enterprise font usage across global organizations.",
    highlights: [
      "Designed and developed scalable RESTful APIs and modular backend services using Spring Boot, following layered architecture and SOLID design principles.",
      "Built high-volume data ingestion pipelines to collect, normalize, validate, and persist subsidiary intelligence from multiple third-party research APIs.",
      "Integrated external intelligence services to automatically extract subsidiary hierarchies, ownership structures, regional metadata, websites, and email domains.",
      "Implemented asynchronous event-driven workflows using Apache Kafka to decouple long-running research operations and improve backend scalability.",
      "Leveraged Kafka consumer groups for parallel processing of website and application discovery workflows, significantly improving data throughput.",
      "Developed automated font-analysis workflows to identify Monotype font usage across discovered websites, enabling scalable licensing research.",
      "Optimized PostgreSQL query performance for high-volume datasets using indexing, efficient joins, and JPA/Hibernate tuning.",
      "Introduced Redis caching for frequently accessed research results and external API payloads, reducing redundant calls and improving response latency.",
      "Integrated Azure Blob Storage for secure storage of research artifacts and system-generated outputs.",
      "Engineered reverse-proxy based API routing for secure communication with external platforms and third-party services.",
      "Collaborated with frontend, QA, and AI teams to deliver production-grade features and improve platform reliability.",
    ],
    techStack: ["Java", "Spring Boot", "Apache Kafka", "Redis", "PostgreSQL", "Azure Blob Storage", "Docker"],
  },
];

export const systemDesignConcepts = [
  {
    id: 1,
    title: "Kafka Event Flow",
    description: "Event-driven architecture with Apache Kafka for asynchronous message processing",
    icon: "workflow",
  },
  {
    id: 2,
    title: "Redis Caching Layer",
    description: "High-performance caching and pub/sub messaging with Redis",
    icon: "database",
  },
  {
    id: 3,
    title: "WebSocket Communication",
    description: "Real-time bidirectional communication for instant notifications",
    icon: "radio",
  },
  {
    id: 4,
    title: "Microservice Architecture",
    description: "Distributed services with independent deployment and scaling",
    icon: "boxes",
  },
  {
    id: 5,
    title: "Message Queue Pipelines",
    description: "Reliable message delivery with retry mechanisms and dead letter queues",
    icon: "git-branch",
  },
  {
    id: 6,
    title: "Scalable Backend Patterns",
    description: "Load balancing, circuit breakers, and fault-tolerant system design",
    icon: "network",
  },
];

export const githubStats = {
  username: "SanketG360",
  profileUrl: "https://github.com/SanketG360",
  totalRepos: 25,
  totalContributions: 500,
  currentStreak: 45,
  topLanguages: ["Java", "TypeScript", "JavaScript", "Python"],
};

export const leetcodeStats = {
  username: "algo_sanket",
  profileUrl: "https://leetcode.com/u/algo_sanket/",
  totalSolved: 250,
  easy: 120,
  medium: 100,
  hard: 30,
  contestRating: 1650,
};
