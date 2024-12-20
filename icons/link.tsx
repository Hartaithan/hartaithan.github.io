import type { IconProps } from "@/models/icon";
import type { FC } from "react";

const IconLink: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
  </svg>
);

export default IconLink;
