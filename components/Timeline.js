import { useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <BsPatchCheckFill className="text-blue-500 mr-2" />

        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

export const FullTimeline = () => (
  <>
   <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Life Changelog and Updates
      </h3>
    <Divider />
    <Year>2024</Year>
    <ul>
      <Step title="Internship - Articus solutions pvt ltd 🤘🏻">
        Got an Internship at Articus solutions pvt ltd as a Reactjs Intern. Developed a
        Health care tool & a tool for running ML Models on real time data sets.
      </Step>
      <Step title="Full-Stack Journey 🔩">
        Learnt NodeJS, MongoDB, MySQL along with React and the best practices to
        build products and web apps which can scale easily.
      </Step>
      <Step title="Full-Stack Journey 🔩">
        Learnt NodeJS, MongoDB, MySQL along with React and the best practices to
        build products and web apps which can scale easily.
      </Step>
    </ul>
    <Divider />
    <Year>2023</Year>
    <ul>
      <Step title="Opportunity in collage">
        Started as web development with modern animations using threejs and GSAP.Got an opportunity in College to develop their website.
      </Step>
      <Step title="React Enthusiast ⚒">
        Was introducted to React, watched javascript mastery on youtube and continued to watch turtorials. I haven't stopped since then.
      </Step>
    </ul>
    <Divider />
    <Year>2022</Year>
    <ul>
      <Step title="Introduced to Open Source ⚡️">
        My Domain was Open Source Software and Open Standards. I got to know
        about Free Software Foundation, Git and GitHub .
      </Step>
      <Step title="First Back 😂">
        I consider this as an achievement. Skipping Classes and learning in my room with fewer than 10% Attendance 😅.
      </Step>
    </ul>
    <Divider />
    <Year>2021</Year>
    <ul>
       <Step title="Started College 🔥">
        Opted for Computer Science \( Artificial Intelligence & Data science \) B.Tech Degree from Woxsen University, Hyderabad.
      </Step>
      <Step title="Completed 12th Grade 📜">
        Completed 12th grade with 95.7% Marks in MPC. Again, a big
        achievement for me.
      </Step>
      <Step title="Developed interest in Web Development 🚀">
        One of my friends introduced me to Web Development. I started off by
        making simple HTML, CSS websites with a keen interest in design.
      </Step>
    </ul>
    <Divider />
    <Year>2019</Year>
    <ul>
      <Step title="Completed 10th Grade 📜">
        Scored 9.8/10 CGPA in 10th Grade. For me it was huge.
      </Step>
      <Step title="Wanted to take up as a Pilot🛫">
        I always wanted to become a pilot. Though my parents didn't
        agree and that let me to opt for Science stream.
      </Step>
      
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="First Computer 💻 of My Brother">
        I played GTA San Andreas all day, everyday and Memorized Cheat codes 😅.
      </Step>
    </ul>
    <ul>
      <Step title="Went to my First Hostel At 9th Grade">
        Went to Vijayawada for Studies from our Hometown.
      </Step>
    </ul>
    <Divider />
    <Year>2004</Year>
    <ul>
      <Step title="An Enginner was Born in India 👶🏼 🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Life Changelog and Updates
      </h3>
      <Year>2025</Year>
      <ul>
        <Step title="Released EldoraUI version 2.0">
          <a href="https://eldoraui.site" target="__blank">
            EldoraUI
          </a>{" "}
          crossed 300 users and I couldn't be any happier.
        </Step>
      </ul>
      <Divider />
      <Year>2022</Year>
      <ul>
        <Step title="Started working on Moonbeam 🤩">
          Started working on{" "}
          <a href="https://gomoonbeam.com" target="__blank">
            Moonbeam{" "}
          </a>
          as a front-end developer. Building a chrome extension was the most fun
          and challenging part.
        </Step>
        <Step title="Algochurn crosses 200 users 🤌🏻">
          <a href="https://algochurn.com" target="__blank">
            Algochurn
          </a>{" "}
          is now helping 200+ registered users and 14,000+ monthly users.
        </Step>
        <Step title="1,000+ Followers on Twitter 🌟">
          Crossed 1,000 mark on{" "}
          <a
            href="https://www.twitter.com/mannupaaji"
            className="font-semibold"
            target="__blank"
          >
            Twitter
          </a>
          . You can help increase the count by following me. 😉
        </Step>
        <Step title="Built and launched Algochurn 🍾">
          Built{" "}
          <a href="https://algochurn.com" target="__blank">
            Algochurn
          </a>
          , A platform to practice DS ALgo along with front-end to ace your next
          technical interview.
        </Step>
        <Step title="Promoted to Senior Software Engineer 🎉">
          Promoted to Senior Software Engineer - Worked on applications handling
          20,000+ users per day. Working on Web, Mobile, and even TV
          applications. 🔥
        </Step>
      </ul>
      <Divider />
      <Year>2021</Year>
      <ul>
        <Step title="Built Tailwind Master Kit 🪁">
          Built{" "}
          <a href="https://www.tailwindmasterkit.com">TailwindMasterKit</a>, A
          SaaS marketplace for beautiful, handcrafted Website components built
          with and for Tailwind supported websites. Built the components from
          the ground up for React and HTML in 30+ categories.
        </Step>
        <Step title="Created covidrescue.co.in 💊">
          Created <a href="https://www.covidrescue.co.in">covidrescue.co.in</a>
          to help people with verified leads on Oxygen, Remdesivir, Food, Beds,
          ICU, Medicines and more.
        </Step>
        <Step title="Created Covid-19 Vaccination slots notification system 💉">
          Integrated Vaccination slots notification system in covidrescue web
          app. Notified people whenever vaccination slot was available in their
          area and city.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Joined mroads 🎉">
          {" "}
          Joined{" "}
          <span className="font-bold">
            <span className="text-blue-500">m</span>roads
          </span>{" "}
          as a Software Development Engineer. Working on their Flagship product
          as a Front-End Developer.
        </Step>
        <Step title="Cleared GATE 2019 💯">
          Cleared GATE 2019 after 8 months of continuous studies. I still hate
          Computer System Architecture & Organization.
        </Step>
        <Step title="Competitive Programming 🏆">
          Cleared Hackerrank and Hackerearth contests. Got a strong grip on
          Competitive Programming.
        </Step>
        <Step title="Taught programming to students🥳">
          Taught fundamental programming to school students. It included Basic C
          programming, Introduction to Web Development and logic building.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Placements - Got Placed ✨">
          Had 3 offers in Hand. 1 On-Campus and 2 Off-Campus in the Software
          Developer (Full-Stack) roles.
        </Step>
        <Step title="Full-Stack Applications 🚀">
          Started freelancing, developed full-stack applications for clients
          ranging from E-Commerce stores to static landing pages.
        </Step>
        <Step title="GATE Preparation ⚛️">
          Started preparing for GATE (Graduate Aptitute Test in Engineering).
          Learnt all the Computer Science subjects again from scratch.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
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
        </button>
      )}
    </>
  );
}
