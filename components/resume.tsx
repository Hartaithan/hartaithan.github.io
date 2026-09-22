import ResumeContacts from "@/components/resume-contacts";
import ResumeExperience from "@/components/resume-experience";
import ResumeHeading from "@/components/resume-heading";
import ResumeSkills from "@/components/resume-skills";
import type { Resume as ResumeData } from "@/models/resume";
import type { FC } from "react";

interface Props {
  data: ResumeData;
}

const Resume: FC<Props> = (props) => {
  const { data } = props;
  const { firstName, lastName, position, contacts, about, skills, experience } =
    data;
  return (
    <div
      id="resume"
      className="mx-auto max-w-3xl bg-white px-4 py-5 shadow-lg md:px-8 md:py-8 print:p-0 print:shadow-none">
      <div className="flex flex-col items-start justify-between">
        <h1 className="text-xl font-medium sm:text-2xl print:text-lg">
          {firstName} {lastName}
          <span className="mx-2">|</span>
          <span className="font-semibold">{position}</span>
        </h1>
        <ResumeContacts data={contacts} />
      </div>
      <ResumeHeading>{about.title}</ResumeHeading>
      <div className="mt-3 flex flex-col gap-y-1 sm:mt-2 print:mt-2 print:gap-y-0.5">
        {about.content.map((line, idx) => (
          <p key={idx} className="indent-2 text-sm sm:indent-4 print:text-xs">
            {line}
          </p>
        ))}
      </div>
      <ResumeHeading>{skills.title}</ResumeHeading>
      <div className="mt-3 columns-1 gap-x-4 sm:mt-2 sm:columns-2 print:mt-1.5">
        {skills.content.map((data, idx) => (
          <ResumeSkills key={idx} data={data} />
        ))}
      </div>
      <ResumeHeading>{experience.title}</ResumeHeading>
      <div className="mt-3 flex flex-col space-y-4 sm:mt-2 print:mt-1.5 print:space-y-3">
        {experience.content.map((data, idx) => (
          <ResumeExperience
            key={idx}
            data={data}
            stackLabel={experience.stackLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default Resume;
