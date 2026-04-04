export const site = {
  name: "Radu Andrei Gorcea",
  label: "Full-Stack Developer",
  desc: "A Full-Stack Developer based in Romania. I build performant, accessible products from polished front-end experiences to reliable back-end systems."
};

export interface Project {
  title: string;
  description: string;
  tags?: string[];
  href?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: "Vantage",
    description: "A web app that uncovers hidden business gems from Reddit discussions featuring an interface for browsing AI-processed business ideas with user authentication and analytics dashboard.",
    tags: ["Astro", "React", "TypeScript", "Prisma", "PostgreSQL", "Reddit API"],
    href: "https://raduandreigorcea.github.io/Vantage-Landing-Page/",
    repo: "https://github.com/RuseCristian/Vantange-AI-business-Leads",
  },
  {
    title: "Idleview",
    description: "A beautiful, fullscreen dashboard application built with Tauri that displays the time, date, weather, and stunning contextual background images from Unsplash.",
    tags: ["Tauri", "Rust", "JavaScript", "Vue.js", "Embedded", "Unsplash API"],
    repo: "https://github.com/raduandreigorcea/Idleview",
  },
  {
    title: "FamCart",
    description: "A shared shopping list app that helps families plan groceries together. Users can create or join a household, add products, and keep their shopping list synchronized in real time.",
    tags: ["Vue.js", "TypeScript", "PostgreSQL"],
    repo: "https://github.com/raduandreigorcea/FamCart",
  },
  {
    title: "Pixlet",
    description: "A modern, lightweight pixel art editor built with Vue 3, TypeScript, and Tauri. Create pixel art with an intuitive interface, powerful drawing tools, and seamless performance.",
    tags: ["Vue.js", "TypeScript", "Tauri", "Rust"],
    repo: "https://github.com/raduandreigorcea/Pixlet",
  }
];
