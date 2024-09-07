import { buttonProps } from "../Types";

const Button: React.FC<buttonProps> = ({
  img,
  text,
  icon,
  btnClasses,
  imgClasses,
  onClick,
}) => {
  return (
    <button className={btnClasses} onClick={() => onClick()}>
      {img && <img src={img} alt="" className={imgClasses} />}
      {text}
      {icon}
    </button>
  );
};

export default Button;
