import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Antonio Villaverde Urueta",
  initials: "AV",
  url: "https://tonyvillaverde.com",
  location: "Wuhan, China",
  locationLink: "https://www.google.com/maps/place/wuhan",
  description:
    "Innovative Full Stack Developer with 2 years of experience in enhancing digital interfaces for improved user engagement.",
  summary:
    "Enhanced web application responsiveness, leading to increased mobile and desktop accessibility and integrated SEO strategies that amplified website visibility and sales growth. Seeking to leverage adaptability and teamwork skills to drive transformative digital solutions and align with business objectives.",
  avatarUrl: "/me.jpg",
  skills: [
    "Strategic Communication",
    "Rapid Prototyping",
    "Problem-Solving",
    "Adaptability",
    "Interactive Educational Strategy",
    "Cross-Cultural Collaboration",
    "SEO Optimization",
    "User Experience Enhancement",
    "Entrepreneurial Technology Solutions",
    "Team Leadership",
    "Cross-Platform Development",
    "English B2 Oxford Certified",
    "French B2 DELF Certified",
    "Mandarin Chinese basics",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "tony.villagreen@gmail.com",
    tel: "+526144577880",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ImTonyS",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/antonio-villaverde-b610932a3/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/tonyvillagreen",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@TonyProyecto",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Currify",
      href: "https://currify.me",
      badges: [],
      location: "Remote",
      title: "Founder and Product Developer",
      logoUrl: "/currify-icon.png",
      start: "January 2025",
      end: "Present",
      description:
        "Developed Currify, an AI-powered platform utilizing LangChain, OpenAI's GPT models, and intelligent conversational agents to create personalized, ATS-optimized resumes. Successfully generated 120 professional resumes, directly contributing to 14 users securing new employment. Currently integrating intelligent conversational agents and automating workflows using LangChain, significantly improving user engagement, usability, and satisfaction. Implemented effective SEO optimization strategies, leveraging organic search as the primary marketing channel to drive platform growth.",
    },
    {
      company: "AgendaloBarbero",
      href: "https://agendalobarbero.me",
      badges: [],
      location: "Remote",
      title: "Founder and Lead Developer",
      logoUrl: "/agendalobarbero.png",
      start: "June 2024",
      end: "Present",
      description:
        "Designed and developed a web-based appointment management app for barbers, enabling customers to book and prepay for appointments via Stripe and MercadoPago, streamlining operations and enhancing the customer experience. Programmed the entire platform using JavaScript, achieving 7 monthly paying subscribers within 3 months, delivering a high-quality, efficient solution in record time. Presented the app at Buildspace's Season 5 IRL event in San Francisco, where 1,000 startups convened to showcase their projects, refining pitching skills and gathering valuable feedback for future enhancements.",
    },
    {
      company: "BitaFitness",
      badges: [],
      href: "https://bitafitness.com",
      location: "Chihuahua, Mexico",
      title: "Full Stack Developer",
      logoUrl: "/bitafitness.webp",
      start: "January 2024",
      end: "October 2024",
      description:
        "Developed a responsive web application for BitaFitness, the largest gym in Chihuahua, optimizing accessibility and user experience on both mobile and desktop devices.",
    },
    {
      company: "Museo Semilla Interactivo",
      badges: [],
      href: "https://www.instagram.com/semilla.museo/",
      location: "Chihuahua, Mexico",
      title: "Multicultural Audience Engagement Strategist",
      logoUrl: "/semillamuseo.jpg",
      start: "July 2021",
      end: "December 2023",
      description:
        "Expertly managing and engaging audiences of over 100 people across diverse age groups, demonstrating exceptional communication and presentation skills. Developing and coordinating team dynamics, training personnel, and creating interactive educational experiences that enhance learning and audience participation.",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s5 Participant",
      logoUrl: "/buildspace.jpg",
      start: "2024",
      end: "2024",
    },
    {
      school: "Universidad Tecnológica de Chihuahua",
      href: "https://utch.edu.mx",
      degree: "Information Technology (IT) with Minor in Web Development",
      logoUrl: "/utch.jpeg",
      start: "2022",
      end: "Present",
    },
    {
      school: "Huazhong University of Science and Technology",
      href: "https://english.hust.edu.cn/",
      degree: "Mandarin Chinese Studies",
      logoUrl: "/hust.jpeg",
      start: "August 2024",
      end: "February 2025",
    },
  ],
  projects: [
    {
      title: "Currify",
      href: "https://currify.me",
      dates: "January 2025 - Present",
      active: true,
      description: "AI-powered resume builder using LangChain and GPT",
      technologies: [
        "Next.js",
        "LangChain",
        "OpenAI",
        "TypeScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://currify.me",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/currify.png",
    },
    {
      title: "AgendaloBarbero",
      href: "https://agendalobarbero.me",
      dates: "June 2024 - Present",
      active: true,
      description: "Barbershop appointment management platform",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "TailwindCSS",
        "Stripe",
        "MercadoPago",
      ],
      links: [
        {
          type: "Website",
          href: "https://agendalobarbero.me",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/agendalobarbero.jpeg",
    },
    {
      title: "NASA Space Apps Chihuahua",
      href: "https://www.spaceappschallenge.org/2023/locations/chihuahua/",
      dates: "Sept 2022 - Oct 2024",
      active: false,
      description: "Staff Member organizing local NASA hackathon",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://www.spaceappschallenge.org/2023/locations/chihuahua/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Instagram",
          href: "https://www.instagram.com/spaceappscuu/",
          icon: <Icons.instagram className="size-3" />,
        },
      ],
      image: "/spaceapps-cuu.png",
    },
  ],
} as const;
