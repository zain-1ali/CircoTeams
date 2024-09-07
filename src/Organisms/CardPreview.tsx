import Classic from "./CardThemes/Classic";

const CardPreview = () => {
  const innerHeight: number = window.innerHeight;

  return (
    <div
      className={`w-[272px] flex justify-center bg-white ${
        innerHeight <= 700 ? "h-[85%]" : "h-[589px]"
      }  border rounded-[26px] shadow-lg`}
    >
      <Classic />
    </div>
  );
};

export default CardPreview;
