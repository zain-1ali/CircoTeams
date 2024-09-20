import Text from "../Atoms/Text";
import ContactUsOptions from "../Molecules/ContactUsOptions";
import i22 from "../assets/images/i22.png";
import i23 from "../assets/images/i23.png";

const ContactUsCard = () => {
  return (
    <div className="w-[100%] h-[254px] rounded-[31px] bg-white mt-5 p-6">
      <Text text="Contact us" classes="font-[600] text-[18px] text-[#1F1F1F]" />
      <Text
        text="Our team of experts is here to provide support!"
        classes="font-[400] text-[15px] text-[#8B8B8B]"
      />
      <div className="flex gap-5 mt-5">
        <ContactUsOptions
          icon={i22}
          heading="Email us"
          text="support@getcirco.com"
          btnText="Email"
        />

        <ContactUsOptions
          icon={i23}
          heading="Support Documents"
          text="Find answers on our support page"
          btnText="View"
        />
      </div>
    </div>
  );
};

export default ContactUsCard;
