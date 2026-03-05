import type { ResumeEducationItem } from "@/models/resume";
import type { FC } from "react";

interface Props {
  data: ResumeEducationItem;
}

const ResumeEducation: FC<Props> = (props) => {
  const { data } = props;
  const { date, title, specialty } = data;
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex min-w-48 max-w-48 flex-col text-sm text-neutral-600">
        <p>{date}</p>
      </div>
      <div className="mt-1 flex flex-col text-sm sm:mt-0">
        <p className="font-semibold">{title}</p>
        <p className="mt-1 text-xs leading-[normal] text-neutral-600 sm:mt-0.5 sm:text-sm sm:leading-[normal]">
          {specialty}
        </p>
      </div>
    </div>
  );
};

export default ResumeEducation;
