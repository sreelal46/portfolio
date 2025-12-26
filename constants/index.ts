import { FaYoutube, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 40,
    height: 40,
  },

  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "Stripe",
  //   image: "stripe.png",
  //   width: 80,
  //   height: 80,
  // },

  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Express",
    image: "express.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/__.sre_e__45/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  // {
  //   skill_name: "HTML",
  //   image: "html.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "CSS",
  //   image: "css.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "JavaScript",
  //   image: "js.png",
  //   width: 65,
  //   height: 65,
  // },
  // {
  //   skill_name: "Tailwind CSS",
  //   image: "tailwind.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "React",
  //   image: "react.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Next.js 14",
  //   image: "next.png",
  //   width: 80,
  //   height: 80,
  // },
] as const;

export const BACKEND_SKILL = [
  // {
  //   skill_name: "Node.js",
  //   image: "node.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Express.js",
  //   image: "express.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "MongoDB",
  //   image: "mongodb.png",
  //   width: 40,
  //   height: 40,
  // },
] as const;

export const FULLSTACK_SKILL = [] as const;

export const OTHER_SKILL = [] as const;

export const PROJECTS = [
  {
    title: "Netflix-clone",
    image: "/projects/netflix.jpg",
    link: "https://react-netflix-clone-puce.vercel.app/",
  },
  {
    title: "LuxCart Ecommerce",
    image: "/projects/luxCart.png",
    link: "https://github.com/sreelal46/luxcart-ecommerce",
  },
  {
    title: "Smart Park",
    image: "/projects/smartPark.js.png",
    link: "https://sreelal46.github.io/Amazon-clone_homePage/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/sreelal46",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/sreelal-pv-a3956328a/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:sreelalpv1234@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;
