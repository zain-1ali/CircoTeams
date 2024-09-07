import React from "react";
import Image from "../Atoms/Image";
import { LogoProps } from "../Types";
import logo from "../assets/images/logo.png";

const Logo: React.FC<LogoProps> = ({ Imgclasses, containerClasses }) => {
  return (
    <div className={containerClasses}>
      <Image src={logo} classes={Imgclasses} />
    </div>
  );
};

export default Logo;
