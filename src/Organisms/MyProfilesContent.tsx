import Text from "../Atoms/Text";
import UserProfileCard from "./UserProfileCard";

const MyProfilesContent = () => {
  return (
    <div className="h-[100%] w-[83%] bg-[#F7F7F8] flex justify-center">
      <div className="w-[95%]  h-[96%] overflow-y-scroll">
        <Text text="My Profiles" classes="font-[700] text-[24px] mt-[30px] " />
        <div className="w-[100%] flex justify-start gap-[8%] mt-3 flex-wrap">
          <UserProfileCard isCreatePrfl={false} />
          <UserProfileCard isCreatePrfl={false} />
          <UserProfileCard isCreatePrfl={true} />
        </div>

        <Text
          text="My Team Profile"
          classes="font-[700] text-[24px] mt-[30px] "
        />
        <div className="w-[100%] flex justify-start gap-[8%] mt-3 flex-wrap">
          <UserProfileCard isCreatePrfl={true} />
        </div>
      </div>
    </div>
  );
};

export default MyProfilesContent;
