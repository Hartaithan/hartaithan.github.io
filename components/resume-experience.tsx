import type { ResumeExperienceItem } from "@/models/resume";
import type { FC } from "react";

interface Props {
  data: ResumeExperienceItem;
}

const ResumeExperience: FC<Props> = (props) => {
  const { data } = props;
  const { date, duration, title, description, position, tags } = data;
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-x-2 text-sm md:flex-row print:flex-row">
        <p className="font-semibold">{title}</p>
        <p>{position}</p>
        <p className="text-xs leading-[unset]">({tags.join(", ")})</p>
      </div>
      <div className="mt-1 flex flex-wrap gap-x-3 text-sm sm:mt-0">
        <p className="text-neutral-600">{date}</p>
        {duration.length > 0 && (
          <p className="text-neutral-600">({duration})</p>
        )}
      </div>
      <div className="mt-1 flex flex-col text-base">
        {description.map((line, idx) => (
          <div key={idx} className="flex items-center">
            <div className="relative top-2 mr-2 aspect-square size-1 self-start bg-black print:bg-black" />
            <p className="mt-1 text-sm leading-[normal] sm:mt-0.5 sm:leading-[normal]">
              {line}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeExperience;
