import ResumeSection from "@/sections/resume";
import type { Metadata } from "next";
import { Suspense, type FC } from "react";

export const metadata: Metadata = { title: "Resume" };

const ResumePage: FC = () => (
  <Suspense>
    <ResumeSection />
  </Suspense>
);

export default ResumePage;
