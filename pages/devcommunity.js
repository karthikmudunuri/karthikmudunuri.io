import React from "react";
import Container from "@/components/Container";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import FreeCodeCamp from "@/components/FreeCodeCampCard/FreeCodeCamp";

export default function DevCommunityPage() {
  return (
    <Container
      title="Blogs at Dev Community – Karthik Mudunuri"
      description="I've been writing articles for Dev Community - Check out my latest articles here."
      image="/me.png"
    >
      <FreeCodeCamp />
      <div className="max-w-2xl mx-auto mb-16 w-full">
        <Contact />
      </div>
    </Container>
  );
}
