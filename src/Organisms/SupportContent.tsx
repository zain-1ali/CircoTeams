import Text from "../Atoms/Text";
import ContactUsCard from "./ContactUsCard";

const SupportContent = () => {
  return (
    <div className="w-[83%] h-[100%] bg-[#f6f6f6] pt-7 px-5">
      <Text
        text="Have a question?"
        classes="font-[600] text-[18px] text-[#5B5B5B]"
      />
      <ContactUsCard />
    </div>
  );
};

export default SupportContent;
