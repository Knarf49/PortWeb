// src/data/projects.ts

export interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: "Bean scene",
    description: "Coffee shop website",
    image: "/Bean-scene-thumbnail.png",
    link: "https://bean-scene-9y3334yhc-franks-projects-e487ec0a.vercel.app/",
    techStack: ["Next.js", "Shadcn", "Tailwind CSS", "Payload cms", "mongodb"],
  },
  {
    title: "TechD",
    description:
      "Nextjs smartPhone ecommerce website with responsive layout and clerk authentication.",
    image: "/TechD_Thumbnail.png",
    link: "https://techd-six.vercel.app/",
    techStack: [
      "Nextjs",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Clerk",
    ],
  },
  {
    title: "Positivus",
    description: "Digital Marketing website",
    image: "/Positivus-hero-img.png",
    link: "https://positivus-six-mu.vercel.app/",
    techStack: ["Next.js", "Shadcn", "Tailwind CSS"],
  },
];
