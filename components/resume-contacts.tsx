import type { ResumeContact } from "@/models/resume";
import type { FC } from "react";

interface Props {
  data: ResumeContact[];
}

const ResumeContacts: FC<Props> = (props) => {
  const { data } = props;
  return (
    <div className="mt-2 flex flex-col self-start text-left text-sm font-medium xs:mt-0 xs:self-auto xs:text-right">
      {data.map((contact, index) => {
        const { type, value } = contact;
        const key = `${type}-${index}`;
        if (type === "mail") {
          return (
            <a key={key} className="underline" href={`mailto:${value}`}>
              {value}
            </a>
          );
        }
        if (type === "link") {
          return (
            <a key={key} className="underline" href={value}>
              {value}
            </a>
          );
        }
        return <p key={key}>{value}</p>;
      })}
    </div>
  );
};

export default ResumeContacts;
