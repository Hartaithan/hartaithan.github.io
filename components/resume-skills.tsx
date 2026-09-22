import type { ResumeSkillGroup } from "@/models/resume";
import type { FC } from "react";

interface Props {
  data: ResumeSkillGroup;
}

const ResumeSkills: FC<Props> = (props) => {
  const { data } = props;
  const { label, items } = data;
  return (
    <p className="mb-1 break-inside-avoid text-sm print:mb-0.5 print:text-xs">
      <span className="font-semibold">{label}: </span>
      {items.join(", ")}
    </p>
  );
};

export default ResumeSkills;
