import { cn } from "@/utils/styles";
import type { ComponentPropsWithoutRef, FC } from "react";

type Props = ComponentPropsWithoutRef<"h1">;

const ResumeHeading: FC<Props> = (props) => {
  const { className, children } = props;
  return (
    <h1
      className={cn(
        "mt-3 text-base font-semibold leading-[normal] sm:text-lg sm:leading-[normal]",
        className,
      )}>
      {children}
    </h1>
  );
};

export default ResumeHeading;
