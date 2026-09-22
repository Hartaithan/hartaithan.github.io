import { cn } from "@/utils/styles";
import type { ComponentPropsWithoutRef, FC } from "react";

type Props = ComponentPropsWithoutRef<"h1">;

const ResumeHeading: FC<Props> = (props) => {
  const { className, children } = props;
  return (
    <h1
      className={cn(
        "mt-3 text-base font-semibold sm:text-lg print:mt-2 print:text-sm",
        className,
      )}>
      {children}
    </h1>
  );
};

export default ResumeHeading;
