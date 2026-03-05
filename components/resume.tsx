import ResumeContacts from "@/components/resume-contacts";
import ResumeEducation from "@/components/resume-education";
import ResumeExperience from "@/components/resume-experience";
import ResumeHeading from "@/components/resume-heading";
import type { Resume as ResumeData } from "@/models/resume";
import type { FC } from "react";

interface Props {
  data: ResumeData;
}

const Resume: FC<Props> = (props) => {
  const { data } = props;
  const { firstName, lastName, contacts, about, experience, education } = data;
  return (
    <div className="mx-auto max-w-3xl bg-white px-4 py-5 shadow-lg md:px-8 md:py-8 print:p-0 print:shadow-none">
      <div className="flex flex-col items-start justify-between xs:flex-row xs:items-center">
        <div>
          <h1 className="text-lg font-medium leading-[normal] sm:text-xl">
            {firstName}
          </h1>
          <h1 className="text-xl font-bold leading-[normal] sm:text-2xl">
            {lastName}
          </h1>
        </div>
        <ResumeContacts data={contacts} />
      </div>
      <ResumeHeading>{about.title}</ResumeHeading>
      <div className="mt-3 flex flex-col gap-y-1 sm:mt-2">
        {about.content.map((line, idx) => (
          <p
            key={idx}
            className="indent-2 text-sm leading-[normal] sm:indent-4">
            {line}
          </p>
        ))}
      </div>
      <ResumeHeading>{experience.title}</ResumeHeading>
      <div className="mt-3 flex flex-col gap-y-4 sm:mt-2">
        {experience.content.map((data, idx) => (
          <ResumeExperience key={idx} data={data} />
        ))}
      </div>
      <ResumeHeading>{education.title}</ResumeHeading>
      <div className="mt-3 flex flex-col gap-y-4 sm:mt-2">
        {education.content.map((data, idx) => (
          <ResumeEducation key={idx} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Resume;
