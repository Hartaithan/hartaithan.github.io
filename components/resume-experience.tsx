import type { ResumeExperienceItem } from "@/models/resume";
import type { FC } from "react";

interface Props {
  data: ResumeExperienceItem;
  stackLabel: string;
}

const ResumeExperience: FC<Props> = (props) => {
  const { data, stackLabel } = props;
  const { date, duration, title, summary, description, position, tags } = data;
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-sm print:text-xs">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <p className="font-semibold">{title}</p>
          <p>{position}</p>
        </div>
        <div className="flex flex-wrap gap-x-3">
          <p className="text-neutral-600">{date}</p>
          {duration.length > 0 && (
            <p className="text-neutral-600">({duration})</p>
          )}
        </div>
      </div>
      <p className="mt-0.5 text-sm text-neutral-600 print:text-xs">{summary}</p>
      <p className="mt-1.5 text-xs print:mt-1 print:text-[11px]">
        <span className="font-semibold">{stackLabel}: </span>
        {tags.join(", ")}
      </p>
      <div className="mt-1 flex flex-col text-base">
        {description.map((line, idx) => (
          <div key={idx} className="flex items-center">
            <div className="relative top-2 mr-2 aspect-square size-1 self-start bg-black print:top-1.5 print:mr-1.5 print:bg-black" />
            <p className="text-sm sm:mt-0.5 print:text-xs">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeExperience;
