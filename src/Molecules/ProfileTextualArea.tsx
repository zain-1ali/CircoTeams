import Text from "../Atoms/Text";

const ProfileTextualArea = () => {
  return (
    <div className="w-[100%] flex flex-col items-center mt-[55px]">
      <Text
        classes="text-[15px] font-[700] w-[80%] text-center"
        text="Kevin Jin"
      />
      <Text
        classes="font-[400] text-[10px] w-[85%] text-center mt-[2px]"
        text="Job Title"
      />
      <Text
        classes="font-[400] text-[10px] w-[85%] text-center mt-[2px]"
        text="Company Name"
      />
      <Text
        classes="font-[400] text-[10px] w-[85%] text-center mt-[2px]"
        text="Location"
      />
    </div>
  );
};

export default ProfileTextualArea;
