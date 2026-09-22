import type { ResumeContact } from "@/models/resume";
import type { FC } from "react";

interface ContactItemProps {
  contact: ResumeContact;
  index: number;
}

const ResumeContactItem: FC<ContactItemProps> = (props) => {
  const { contact, index } = props;
  const { type, value } = contact;
  const separator = index > 0 ? <span aria-hidden="true">·</span> : null;
  return (
    <p className="contents">
      {separator}
      {type === "text" && <span>{value}</span>}
      {type !== "text" && (
        <a
          className="underline"
          href={type === "mail" ? `mailto:${value}` : value}>
          {value}
        </a>
      )}
    </p>
  );
};

interface Props {
  data: ResumeContact[];
}

const ResumeContacts: FC<Props> = (props) => {
  const { data } = props;
  return (
    <div className="mt-1 flex flex-wrap gap-x-2 gap-y-0.5 self-start text-left text-sm font-medium xs:justify-items-end xs:self-auto xs:text-right">
      {data.map((contact, index) => (
        <ResumeContactItem
          key={`${contact.type}-${index}`}
          contact={contact}
          index={index}
        />
      ))}
    </div>
  );
};

export default ResumeContacts;
