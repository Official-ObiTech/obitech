"use client";

import ProjectCard from "./m/ProjectCard";

export default function AllProjectCard() {
    const cardData = [
      {
        id: "1",
        title: "Master Builder",
        date: "Oct 2023",
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
        date: "Jan 2022",
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
        id: "3",
        title: "Blog Backend",
        date: "Jan 2022",
        category: "NextJs",
        image: "obitech-blog-backend.vercel.app_login.png",
        alt: "blog-backend",
        progressLabel: "Completed",
        progressValue: 100,
        description:
          "Created the Obitech Blog website to meet the demand for a scalable, secure, and easy-to-use content management system. The site uses MongoDB to manage data, Auth.js for secure admin login, and Chart.js for visualizing data.",
        to: "https://obitech-blog-backend.vercel.app/login",
      },
      {
        id: "4",
        title: "Rotabliss ",
        date: "April 2023",
        category: "NuxtJs",
        image: "rotabliss",
        alt: "rotabliss",
        progressLabel: "In Progress",
        progressValue: 80,
        description:
          "I helped build Rotabliss to meet the growing need for advanced HR solutions, successfully combining time tracking, onboarding, and organizational structure features to improve productivity and efficiency",
        to: "https://",
      },
      {
        id: "5",
        title: "StartUps",
        date: "Dec 2024",
        category: "NextJs",
        image: "startups",
        alt: "startups",
        progressLabel: "In Progress",
        progressValue: 75,
        description:
          "Developed a platform to manage startups and organizational structures using React.js, Shadcn, and Netlify. Integrated Auth.js with GitHub and Google logins. The platform allows users to view and manage startup information through dynamic and static pages.",
        to: "https://",
      },
      {
        id: "6",
        title: "Add New Project",
        date: "2024-12-14",
        category: "NextJs, ReactJs",
        image: "Add New Project",
        alt: "obitech-blog-website",
        progressLabel: "Completed",
        progressValue: 100,
        description:
          "I led the design of the database schema. By integrating Tailwind CSS, I made sure the website was fully responsive across devices. I incorporated Auth.js for secure authentication and AOS for smooth CSS animations....... ",
        to: "https://",
      },
      {
        id: "7",
        title: "Add New Project",
        date: "2023-10-1",
        category: "NuxtJs, VueJs",
        image: "Add New Project",
        alt: "First project",
        progressLabel: "In Progress",
        progressValue: 75,
        description:
          "This application helps manage various parts of the company’s daily operations, such as construction projects, supplies, inventory, payments, and audits. As a result, it improved construction efficiency by providing real-time tracking.",
        to: "https://",
      },
      {
        id: "8",
        title: "Add New Project",
        date: "2024-12-14",
        category: "NextJs, ReactJs",
        image: "Add New Project",
        alt: "obitech-blog-website",
        progressLabel: "Completed",
        progressValue: 100,
        description:
          "I led the design of the database schema. By integrating Tailwind CSS, I made sure the website was fully responsive across devices. I incorporated Auth.js for secure authentication and AOS for smooth CSS animations....... ",
        to: "https://",
      },
      {
        id: "9",
        title: "Add New Project",
        date: "2023-10-1",
        category: "NuxtJs, VueJs",
        image: "Add New Project",
        alt: "First project",
        progressLabel: "In Progress",
        progressValue: 75,
        description:
          "This application helps manage various parts of the company’s daily operations, such as construction projects, supplies, inventory, payments, and audits. As a result, it improved construction efficiency by providing real-time tracking.",
        to: "https://",
      },
      {
        id: "10",
        title: "Add New Project",
        date: "2024-12-14",
        category: "NextJs, ReactJs",
        image: "Add New Project",
        alt: "obitech-blog-website",
        progressLabel: "Completed",
        progressValue: 100,
        description:
          "I led the design of the database schema. By integrating Tailwind CSS, I made sure the website was fully responsive across devices. I incorporated Auth.js for secure authentication and AOS for smooth CSS animations....... ",
        to: "https://",
      },
    ];


  return <ProjectCard cardData={cardData} />;
}
