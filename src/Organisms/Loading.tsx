import { CircularProgress } from "@mui/material";
import { LoadingProps } from "../Types";

const Loading: React.FC<LoadingProps> = ({ bgColor }) => {
  return (
    <div
      className="h-[100%] w-[100%] flex justify-center items-center absolute"
      style={{ backgroundColor: bgColor }}
    >
      <CircularProgress sx={{ color: "#2B6EF6" }} />
    </div>
  );
};

export default Loading;
