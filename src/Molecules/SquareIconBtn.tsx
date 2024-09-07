import React from "react";
import { profileCardProps } from "../Types";
import pfb1 from "../assets/images/pfb1.png";
import pfb2 from "../assets/images/pfb2.png";
import pfb3 from "../assets/images/pfb3.png";

import pfb4 from "../assets/images/pfb4.png";
import pfb5 from "../assets/images/pfb5.png";
import pfb6 from "../assets/images/pfb6.png";
import Image from "../Atoms/Image";

const SquareIconBtn: React.FC<profileCardProps> = ({
  btnClass,
  imgClass,
  btnType,
  action,
}) => {
  return (
    <div className={btnClass} onClick={() => action()}>
      <Image
        classes={imgClass}
        src={
          btnType === 1
            ? pfb1
            : btnType === 2
            ? pfb2
            : btnType === 3
            ? pfb3
            : btnType === 4
            ? pfb4
            : btnType === 5
            ? pfb5
            : btnType === 6
            ? pfb6
            : ""
        }
      />
    </div>
  );
};

export default SquareIconBtn;
