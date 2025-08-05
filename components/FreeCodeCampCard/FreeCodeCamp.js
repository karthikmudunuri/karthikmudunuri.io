import React from "react";
import Contact from "@/components/Contact";
import ProjectFCC from "./Project";

export default function FreeCodeCamp({ showDesc = true }) {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 mt-20">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">
        Dev Community
      </h1>
      {showDesc && (
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I’ve been writing articles for{" "}
          <a href="https://dev.to/karthikmudunuri">
            Dev community 
          </a>{" "}
          where I generally write about my projects updates and technical learnings. Some
          of the articles that I wrote are down below.
        </h2>
      )}
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-10 w-full">
         <ProjectFCC
          link="https://dev.to/karthikmudunuri/enhance-your-web-projects-with-sphere-animations-using-eldoraui-3f1j"
          title="Enhance Your Web Projects with Sphere Animations Using EldoraUI 🚀"
          image="devcommunity/sphere.webp"
          date="Jan 7, 2025"
        />
        <ProjectFCC
          link="https://dev.to/karthikmudunuri/coming-soon-eldora-20-the-future-of-page-design-18ce"
          title="🚀 Coming Soon: Eldora 2.0 – The Future of Page Design"
          image="devcommunity/comingsoon.webp"
          date="Nov 21, 2024"
        />

        <ProjectFCC
          link="https://dev.to/karthikmudunuri/introducing-eldora-ui-22m5"
          title="Introducing Eldora UI"
          image="devcommunity/eldora.webp"
          date="July 17, 2024"
        />
        {/* <ProjectFCC
          link="https://www.freecodecamp.org/news/how-to-build-a-working-contact-form-with-sendgrid-and-next-js/"
          title="Send emails with your contact form with SendGrid and Next.js"
          image="freecodecamp/sendgrid.png"
          date="October 21, 2021"
        />

        <ProjectFCC
          link="https://www.freecodecamp.org/news/how-to-create-beautiful-box-shadows-in-html-and-css/"
          title="Create Beautiful box shadows with HTML, CSS and TailwindCSS"
          image="freecodecamp/boxshadows.png"
          date="January 3, 2022"
        />
        <ProjectFCC
          link="https://www.freecodecamp.org/news/how-to-build-a-portfolio-site-with-nextjs-tailwindcss/"
          title="Build a developers portfolio website with Next.js and TailwindCSS"
          image="freecodecamp/portfolio.png"
          date="September 21, 2021"
        /> */}
      </div>
    </div>
  );
}
