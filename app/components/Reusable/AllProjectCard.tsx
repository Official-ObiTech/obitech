"use client";

import ProjectCard from "./m/ProjectCard";

export default function AllProjectCard() {
    const cardData = [
      {
        id: "1",
        title: "Master Builder",
        date: "2023-10-1",
        category: "NuxtJs, VueJs",
        image: "app.skaldongroup.com.png",
        alt: "First project",
        progressLabel: "In Progress",
        progressValue: 75,
        description:
          "This application helps manage various parts of the company’s daily operations, such as construction projects, supplies, inventory, payments, and audits. As a result, it improved construction efficiency by providing real-time tracking.",
        to: "https://app.skaldongroup.com/",
      },
      {
        id: "2",
        title: "Obitech Blog",
        date: "2024-12-14",
        category: "NextJs, ReactJs",
        image: "Obitech Blog Website.png",
        alt: "obitech-blog-website",
        progressLabel: "Completed",
        progressValue: 100,
        description:
          "I led the design of the database schema. By integrating Tailwind CSS, I made sure the website was fully responsive across devices. I incorporated Auth.js for secure authentication and AOS for smooth CSS animations....... ",
        to: "https://obitech-blog-website.vercel.app/",
      },
      {
        id: "1",
        title: "Master Builder",
        date: "2023-10-1",
        category: "NuxtJs, VueJs",
        image: "app.skaldongroup.com.png",
        alt: "First project",
        progressLabel: "In Progress",
        progressValue: 75,
        description:
          "This application helps manage various parts of the company’s daily operations, such as construction projects, supplies, inventory, payments, and audits. As a result, it improved construction efficiency by providing real-time tracking.",
        to: "https://app.skaldongroup.com/",
      },
      {
        id: "2",
        title: "Obitech Blog",
        date: "2024-12-14",
        category: "NextJs, ReactJs",
        image: "Obitech Blog Website.png",
        alt: "obitech-blog-website",
        progressLabel: "Completed",
        progressValue: 100,
        description:
          "I led the design of the database schema. By integrating Tailwind CSS, I made sure the website was fully responsive across devices. I incorporated Auth.js for secure authentication and AOS for smooth CSS animations....... ",
        to: "https://obitech-blog-website.vercel.app/",
      },
      {
        id: "1",
        title: "Master Builder",
        date: "2023-10-1",
        category: "NuxtJs, VueJs",
        image: "app.skaldongroup.com.png",
        alt: "First project",
        progressLabel: "In Progress",
        progressValue: 75,
        description:
          "This application helps manage various parts of the company’s daily operations, such as construction projects, supplies, inventory, payments, and audits. As a result, it improved construction efficiency by providing real-time tracking.",
        to: "https://app.skaldongroup.com/",
      },
      {
        id: "2",
        title: "Obitech Blog",
        date: "2024-12-14",
        category: "NextJs, ReactJs",
        image: "Obitech Blog Website.png",
        alt: "obitech-blog-website",
        progressLabel: "Completed",
        progressValue: 100,
        description:
          "I led the design of the database schema. By integrating Tailwind CSS, I made sure the website was fully responsive across devices. I incorporated Auth.js for secure authentication and AOS for smooth CSS animations....... ",
        to: "https://obitech-blog-website.vercel.app/",
      },
      {
        id: "1",
        title: "Master Builder",
        date: "2023-10-1",
        category: "NuxtJs, VueJs",
        image: "app.skaldongroup.com.png",
        alt: "First project",
        progressLabel: "In Progress",
        progressValue: 75,
        description:
          "This application helps manage various parts of the company’s daily operations, such as construction projects, supplies, inventory, payments, and audits. As a result, it improved construction efficiency by providing real-time tracking.",
        to: "https://app.skaldongroup.com/",
      },
      {
        id: "2",
        title: "Obitech Blog",
        date: "2024-12-14",
        category: "NextJs, ReactJs",
        image: "Obitech Blog Website.png",
        alt: "obitech-blog-website",
        progressLabel: "Completed",
        progressValue: 100,
        description:
          "I led the design of the database schema. By integrating Tailwind CSS, I made sure the website was fully responsive across devices. I incorporated Auth.js for secure authentication and AOS for smooth CSS animations....... ",
        to: "https://obitech-blog-website.vercel.app/",
      },
      {
        id: "1",
        title: "Master Builder",
        date: "2023-10-1",
        category: "NuxtJs, VueJs",
        image: "app.skaldongroup.com.png",
        alt: "First project",
        progressLabel: "In Progress",
        progressValue: 75,
        description:
          "This application helps manage various parts of the company’s daily operations, such as construction projects, supplies, inventory, payments, and audits. As a result, it improved construction efficiency by providing real-time tracking.",
        to: "https://app.skaldongroup.com/",
      },
      {
        id: "2",
        title: "Obitech Blog",
        date: "2024-12-14",
        category: "NextJs, ReactJs",
        image: "Obitech Blog Website.png",
        alt: "obitech-blog-website",
        progressLabel: "Completed",
        progressValue: 100,
        description:
          "I led the design of the database schema. By integrating Tailwind CSS, I made sure the website was fully responsive across devices. I incorporated Auth.js for secure authentication and AOS for smooth CSS animations....... ",
        to: "https://obitech-blog-website.vercel.app/",
      },
    ];


  return <ProjectCard cardData={cardData} />;
}
