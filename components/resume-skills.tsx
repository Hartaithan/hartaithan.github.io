import type { ComponentPropsWithoutRef, FC } from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {
  title?: string;
  data: string[];
}

const ResumeSkills: FC<Props> = (props) => {
  const { className, title, data, ...rest } = props;
  return (
    <div className={className} {...rest}>
      {title ? (
        <h1 className="text-sm font-medium underline">{title + ":"}</h1>
      ) : (
        <h1 className="hidden text-sm font-medium underline sm:block">‎</h1>
      )}
      {data.map((skill, idx) => (
        <div key={idx} className="flex items-center">
          <div className="relative top-2 mr-2 size-1 self-start bg-black print:bg-black" />
          <p className="text-xs">{skill}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumeSkills;
