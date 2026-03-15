import ExperienceSection from "@/sections/experience";
import SkillsSection from "@/sections/skills";
import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = { title: "About" };

const About: FC = () => {
  return (
    <div className="grid w-11/12 grid-cols-1 gap-4 sm:w-10/12 md:w-9/12 lg:grid-cols-2 2xl:w-7/12">
      <div className="col-span-1 rounded-lg bg-neutral-900 px-5 py-4 md:px-6 md:py-5 lg:col-span-2">
        <h1 className="text-base font-semibold md:text-xl">About Me</h1>
        <p className="mt-2 text-sm md:text-base 2xl:text-lg">
          Frontend developer with commercial experience in&nbsp;
          <b>React development since 2020</b>. I specialize in&nbsp;
          <b>building complex web applications</b>: from internal admin panels
          to high-load interfaces for operational teams
        </p>
        <p className="mt-2 text-sm md:text-base 2xl:text-lg">
          I have experience developing products&nbsp;
          <b>from scratch to production</b>, making frontend architectural
          decisions, and <b>leading a small team of developers</b>, including
          conducting code reviews and mentoring junior specialists
        </p>
      </div>
      <ExperienceSection />
      <SkillsSection />
    </div>
  );
};

export default About;
