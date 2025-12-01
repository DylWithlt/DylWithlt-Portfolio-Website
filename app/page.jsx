import Hero from "../components/Hero";
import FeaturedWork from "../components/FeaturedWork";
import Employers from "../components/Employers";
import Packages from "../components/Packages";
import ContactLinks from "../components/ContactLinks";
import AboutMe from "../components/AboutMe";
import { projects } from "../data/projects";

const employers = [
  {
    company: "Sam Dev Studios",
    role: "Full Time Developer",
    link: "https://www.samsdevstudio.com/",
    start: "Sep 16, 2025",
    end: "Nov 12, 2025",
    summary: [
      "Worked with a team to deliver a Roblox game that was months in the making.",
      "Rebuilt game to a simpler version from scratch in two weeks.",
    ],
  },
  {
    company: "Increates",
    role: "Full Time Developer",
    link: "https://increates.com/",
    start: "July 7, 2025",
    end: "Sep 16, 2025",
    summary: [
      "Created updates and maintained the code for World Roleplay",
      "Conducted code Audits for purchases for the company.",
    ],
  },
  {
    company: "MomoCity",
    role: "Full Time Developer",
    link: "https://x.com/DreamMomoCity",
    start: "July 7, 2025",
    end: "Sep 16, 2025",
    summary: [
      "Created character creator with complexities comparable to the Sims or Black Desert Online.",
    ],
  },
];

const plans = [
  {
    title: "Short term comission",
    price: "$50 Minimum Payment",
    description: "Want something quick and simple?",
    features: [
      "Fast Delivery",
      "Unlimited Iterations",
      "Payment Upon Completion & Before Delivery",
      "Plugins",
    ],
  },
  {
    title: "Full Time Work",
    price: "$25-30/hr (negotiable)",
    description: "Long term development.",
    features: ["Scripting backend", "Scripting frontend"],
  },
  {
    title: "Tutoring",
    price: "$25/hr",
    description: "Learn how to code guided by me.",
    features: ["Experienced Tutor", "Expert Knowledge"],
  },
];

const contactLinks = [
  { label: "GitHub", href: "https://github.com/DylWithlt" },
  { label: "Discord", href: "https://discord.gg/amJ78Y7cPm" },
];

export default function Page() {
  const desc = [
    "Hello!",
    "My name is Dylan, but I go by DylWithIt online.",
    "Thanks for visiting my website. I'm a 26-year-old developer (last updated 12/1/2025) who’s been building on Roblox since 2015 and playing since 2008. I graduated with a degree in Computer Science in 2023, and worked as a tutor for the school until I finished my program.",
    "Over the years, I've worked with a lot of talented people and tried to give back to the community when I can—mostly by teaching others I've met along the way. Some of them have gone on to do awesome things or even turn development into a full-time career.",
    "The best way to reach me is on Discord.",
  ];

  return (
    <>
      <Hero
        name="DylWithlt"
        role="Full Time Developer"
        tagline="Wizard of Code"
      />
      <Employers items={employers} />
      <Packages plans={plans} />
      <AboutMe description={desc} />
      <ContactLinks links={contactLinks} />
    </>
  );
}
