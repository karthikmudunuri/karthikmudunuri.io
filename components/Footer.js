import Link from "next/link";
import NowPlaying from "@/components/NowPlaying";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <NowPlaying />
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>
          </Link>
          <Link href="/dashboard">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Dashboard
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Projects
            </a>
          </Link>
          <Link href="/links">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Links
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/karthikmudunuri">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://linkedin.com/in/karthikmudunuri">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://www.instagram.com/___karthik.varma___">
            Instagram
          </ExternalLink>
          {/* <Link href="/freelance">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Freelancing
            </a>
          </Link> */}
          {/* <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
            YouTube
          </ExternalLink> */}
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/snippets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </a>
          </Link>
          {/* <Link href="/resources">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Resources
            </a>
          </Link> */}
          {/* <Link href="/demos">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Live Demos
            </a>
          </Link> */}
          <Link href="/devcommunity">
            <a className="text-gray-500 hover:text-gray-600 transition">
              devcommunity
            </a>
          </Link>
          <Link href="/friday">
            <a className="text-gray-500 hover:text-gray-600 transition">
              friday
            </a>
          </Link>
          {/* <Link href="/design-inspiration">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Design Inspiration
            </a>
          </Link> */}
        </div>
      </div>
      <p className="flex flex-row text-gray-400 items-center">
        Find me on
        <a href="https://linkedin.com/in/karthikmudunuri" target="__blank">
          {/* <img src="/logos/tailwind.svg" className="h-6 w-6 mx-1" /> */}
          <BsLinkedin className="h-5 w-5 ml-2 mr-2"/>
        </a>{" "}
        and{" "}
        <a href="https://github.com/karthikmudunuri" target="__blank">
          <FaGithub className="h-5 w-5 ml-2 mr-2"/>
        </a>
      </p>
      <p className="flex flex-row text-gray-400 items-center mt-2">
        Portfolio inspired by{" "}
        <a href="https://manuarora.in/" className="ml-1" target="__blank">
          Manu Arora 
        </a>
      </p>
    </footer>
  );
}
