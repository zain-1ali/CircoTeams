import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import avatar from "../assets/images/avatar.png";

const UserAvatar = () => {
  return (
    <div className="flex">
      <Image
        src={avatar}
        classes="h-[45px] w-[45px] rounded-[10px] object-cover"
      />
      <div className="ml-2">
        <Text
          text="Kevin Jin"
          classes="font-[500] text-[16px] text-[#151D48]"
        />
        <Text
          text="Social Profile"
          classes="font-[400] text-[14px] text-[#737791]"
        />
      </div>
    </div>
  );
};

export default UserAvatar;
