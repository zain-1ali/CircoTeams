import Button from "../../Atoms/Button";
import Text from "../../Atoms/Text";
import GeneralDesign from "../GeneralDesign";
import HighlightedLinkDesign from "../HighlightedLinkDesign";
import LayoutDesign from "../LayoutDesign";
import SaveContactDesign from "../SaveContactDesign";
import WebLinkDesign from "../WeblinkDesign";

const Design = () => {
  return (
    <div className="w-[94%] mt-6 overflow-y-scroll pb-4">
      <Text text="General" classes="font-[600] text-[15px]" />
      <GeneralDesign />
      <Text text="Layout Style" classes="font-[600] text-[15px] mt-6" />
      <LayoutDesign />
      <Text text="Save Contact Style" classes="font-[600] text-[15px] mt-6" />
      <SaveContactDesign />
      <Text
        text="Web Link Button Style"
        classes="font-[600] text-[15px] mt-6"
      />
      <WebLinkDesign />
      <Text text="Highlight Box Style" classes="font-[600] text-[15px] mt-6" />
      <HighlightedLinkDesign />

      <div className="w-[100%] flex justify-end mt-5 gap-4">
        <Button
          text="Cancel"
          btnClasses="text-[12px] font-[600] text-[#646464] w-[63px] h-[37px] rounded-[88px] bg-[#F0F0F0]"
          onClick={() => {}}
        />
        <Button
          text="Save"
          btnClasses="text-[12px] font-[600] text-white w-[138px] h-[37px] rounded-[88px] bg-[#2B6EF6]"
          onClick={() => {}}
          // onClick={
          //   () =>
          //     updateProfileInfo(
          //       {
          //         firstName: profileData?.firstName,
          //         lastName: profileData?.lastName,
          //         company: profileData?.company,
          //         address: profileData?.address,
          //         profileUrl: profileData?.profileUrl,
          //         logoUrl: profileData?.logoUrl,
          //         coverUrl: profileData?.coverUrl,
          //         jobTitle: profileData?.jobTitle,
          //         profileName: profileData.profileName,
          //       },
          //       id,
          //       showError,
          //       showSuccess,
          //       setLoading
          //     )

          // }
        />
      </div>
    </div>
  );
};

export default Design;
