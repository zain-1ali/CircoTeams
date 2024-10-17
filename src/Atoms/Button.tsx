// Button.tsx
import React from "react";

interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Make sure it takes the event parameter
  btnClasses?: string;
  ariaControls?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, btnClasses, ariaControls, icon }) => {
  return (
    <button
      className={btnClasses}
      onClick={onClick}
      aria-controls={ariaControls}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
