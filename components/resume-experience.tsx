import type { ResumeExperienceItem } from "@/models/resume";
import type { FC } from "react";

interface Props {
  data: ResumeExperienceItem;
}

const ResumeExperience: FC<Props> = (props) => {
  const { data } = props;
  const { date, duration, title, description, position, tags } = data;
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex min-w-48 max-w-48 flex-col text-xs text-neutral-600 sm:text-sm">
        <p>{date}</p>
        {duration.length > 0 && <p>({duration})</p>}
      </div>
      <div className="mt-2 flex flex-col text-sm sm:mt-0">
        <p className="font-semibold">{title}</p>
        <div className="flex flex-col items-start text-neutral-600 sm:flex-row sm:items-center">
          <p className="underline">{position}</p>
          <p className="ml-0 text-xs leading-[normal] sm:ml-1">
            ({tags.join(", ")})
          </p>
        </div>
        <p className="mt-1 text-xs leading-[normal] text-neutral-600 sm:mt-0.5 sm:text-sm sm:leading-[normal]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ResumeExperience;
