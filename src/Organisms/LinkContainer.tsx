import Button from "../Atoms/Button";
import IOSSwitch from "../Atoms/CustomToggleBtn";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import { useAppDispatch } from "../Hooks/reduxHooks";
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
          src={link.linkImageUrl || returnPngIcons(link.linkID)}
          classes="h-[36px] w-[36px] object-cover"
        />
        <Text
          text={link.title || link.name}
          classes="font-[600] text-[14px] w-[50%]"
        />
      </div>
      <div className="flex items-center gap-3">
        <Button
          btnClasses="h-[20px] w-[45px] bg-primary text-white text-[11px] font-[700] flex justify-center items-center rounded-full outline-none focus:outline-none"
          onClick={() => setLinkToEdit(link)}
          text="Edit"
        />
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
