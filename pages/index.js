import Container from "@/components/Container";
import Link from "next/link";
import BlogPost from "@/components/BlogPost";
import ProjectCard from "@/components/ProjectCard";
import Timeline, { FullTimeline } from "@/components/Timeline";
import Contact from "@/components/Contact";

import { LIGHT_COLORS } from "@/lib/constants";

import { shuffleArray } from "@/lib/shuffleArray";
import { useEffect, useState } from "react";
import { useIsFontReady } from "@/lib/useIsFontReady";

import { useTheme } from "next-themes";
import Talks from "@/components/Talks";
import Header from "@/components/Header";

export default function Home() {
  const [colors, setColors] = useState([]);

  let tempInterval;

  const isFontReady = useIsFontReady();
  const { theme, setTheme } = useTheme();

  const play = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);

  return (
    <Container
      title="Karthik Mudunuri - Developer, Writer, Creator"
      description="Full-Stack developer, JavaScript enthusiast, Freelancer, Tech Blogger and a Learner. I love building products and web apps that impact millions of lives."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <Header />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Recent Blogs
        </h3>
        <BlogPost
          title="Publishing npm package"
          summary="Publishing npm package"
          slug="publishing-npm-package"
        />
       
        <Link href="/blog">
          <a
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          >
            See All Blogs
            <svg
              className="h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </Link>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
                     title="Eldora UI"
                     description="An open-source React component library built with Next.js, Tailwind CSS, and Framer Motion — designed for speed, consistency, and developer happiness."
                     href="https://eldoraui.site"
                     icon="eldoraui"
                     tags={["Next.js", "React", "TailwindCSS", "Framer-motion","Full-Stack"]}
                   />
                  
                
         
          
        </div>
        <Link href="/projects">
          <a
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          >
            See More
            <svg
              className="h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </Link>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Upcoming Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
                     title="Motion Components"
                     description="Professional, modern and beautiful framer motion components built with Next.js and TailwindCSS"
                     href="https://www.eldoraui.site/docs/components/integrations"
                     icon="vscode"
                     tags={["NextJS", "Tailwind", "framer-motion"]}
                   />
                   <ProjectCard
                     title="More projects coming soon.."
                     description="I get ideas all day 🙄, All of them are updated here as soon as I start working on them."
                     href="#"
                     icon="more"
                   />
        </div>
       

        <FullTimeline />
        <Contact />
      </div>
    </Container>
  );
}
