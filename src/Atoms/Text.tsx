import { textProps } from "../Types";

const Text: React.FC<textProps> = ({ text, classes }) => {
  return (
    <>
      <p className={classes}>{text}</p>
    </>
  );
};

export default Text;
