export const site = {
  name: "Radu Andrei Gorcea",
  label: "Front-end Developer",
  desc: "A Full Stack Front-end Developer based in Romania. Meticulous web developer with over 2 years of front end experience and passion for responsive and mobile-first website design."
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
    title: "Mellisfera",
    description: "An e-commerce website. Mellisfera offers pure honey, harvested directly from local beehives to preserve its natural essence and goodness.",
    tags: ["Astro", "TypeScript", "Stripe API"],
    href: "https://raduandreigorcea.github.io/Mellisfera/",
    repo: "https://github.com/raduandreigorcea/Mellisfera",
  },
  {
    title: "Pixlet",
    description: "A modern, lightweight pixel art editor built with Vue 3, TypeScript, and Tauri. Create pixel art with an intuitive interface, powerful drawing tools, and seamless performance.",
    tags: ["Vue.js", "TypeScript", "Tauri", "Rust"],
    href: "https://raduandreigorcea.github.io/Pixlet/",
    repo: "https://github.com/raduandreigorcea/Pixlet",
  }
];
