import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className="h-[100%] w-[100%] flex justify-center items-center bg-[#0007] absolute">
      <CircularProgress sx={{ color: "#2B6EF6" }} />
    </div>
  );
};

export default Loading;
