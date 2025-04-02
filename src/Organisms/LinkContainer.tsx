import Button from "../Atoms/Button";
import IOSSwitch from "../Atoms/CustomToggleBtn";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import {
  useAppDispatch,
  useAppSelector,
  // , useAppSelector
} from "../Hooks/reduxHooks";
import { setDirect, setLinks } from "../Redux/ProfileSlice";
import { updateDirect, updateLinkShareAble } from "../Services/ProfileServices";
import { returnPngIcons } from "../assets/ReturnSocialIconsPng";
import dragIcon from "../assets/images/i9.png";

const LinkContainer: React.FC<any> = ({
  link,
  direct,
  directMode,
  id,
  links,
  setLinkToEdit,
}) => {
  const dispatch = useAppDispatch();
  const profileData = useAppSelector((state) => state.profileHandler);
  return (
    <div
      className="w-[100%] flex justify-between items-center min-h-[66px] max-h-[66px] rounded-[20px] bg-[#F9F9F9] pl-3 pr-3"
      style={
        directMode === true
          ? {
              opacity: direct?.id === link?.id ? 1 : 0.4,
            }
          : { opacity: 1 }
      }
      onClick={() =>
        updateDirect(
          id,
          (mode: any) => dispatch(setDirect(mode)),
          link,
          directMode
        )
      }
    >
      <div className="flex items-center gap-3">
        <Image src={dragIcon} classes="h-[22px] w-[22px]" />
        <Image
          src={link.linkImgUrl || returnPngIcons(link.linkID)}
          classes="h-[36px] w-[36px] object-cover rounded-[8px]"
        />
        <Text
          text={link.title || link.name}
          classes="font-[600] text-[14px] w-[50%]"
        />
      </div>
      <div className="flex items-center gap-3">
        {profileData?.profileType === "circoTemplate" && (
          <div className="h-[24px] w-[89px] text-[#D9D9D9] border border-[#D9D9D9] rounded-full font-[500] text-[10px] flex justify-center items-center">
            {link?.assignedTo === "individual"
              ? "Individual Link"
              : "Common Link"}
          </div>
        )}

        {profileData?.profileType === "circoTemplate" && (
          <Button
            btnClasses="h-[20px] w-[45px] bg-primary text-white text-[11px] font-[700] flex justify-center items-center rounded-full outline-none focus:outline-none"
            onClick={() => setLinkToEdit(link)}
            text="Edit"
          />
        )}

        {profileData?.profileType != "circoTemplate" &&
          profileData?.templateId &&
          link?.assigendTo === "individual" && (
            <Button
              btnClasses="h-[20px] w-[45px] bg-primary text-white text-[11px] font-[700] flex justify-center items-center rounded-full outline-none focus:outline-none"
              onClick={() => setLinkToEdit(link)}
              text="Edit"
            />
          )}

        {profileData?.profileType != "circoTemplate" &&
          !profileData?.templateId && (
            <Button
              btnClasses="h-[20px] w-[45px] bg-primary text-white text-[11px] font-[700] flex justify-center items-center rounded-full outline-none focus:outline-none"
              onClick={() => setLinkToEdit(link)}
              text="Edit"
            />
          )}

        {!directMode && (
          <IOSSwitch
            checked={link?.shareable}
            onChange={() =>
              updateLinkShareAble(
                id,
                link.id,
                link?.shareable,
                links,
                (mode: any) => dispatch(setLinks(mode))
              )
            }
          />
        )}
      </div>
    </div>
  );
};

export default LinkContainer;
