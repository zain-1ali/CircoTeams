import { useState } from "react";
import card from "../assets/images/card.png";
import classic from "../assets/images/classic.png";
import color from "../assets/images/colored.png";
import custom from "../assets/images/custom.png";
import portrait from "../assets/images/portrait.png";
import IOSSwitch from "../Atoms/CustomToggleBtn";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import { useAppDispatch, useAppSelector } from "../Hooks/reduxHooks";
import { useUploadFile } from "../Hooks/useUploadFile";
import ColorSelector from "../Molecules/ColorSelector";
import UploadIcon from "../Molecules/UploadIcon";
import {
  setBackgroundColor,
  setProfileDesign,
  setTheme,
  setwhitenText,
} from "../Redux/ProfileSlice";
import ImageCropperModal from "./Cropper";
const LayoutDesign = () => {
  interface Layout {
    name: string;
    image: string;
  }

  const layout: Layout[] = [
    { name: "Classic", image: classic },
    { name: "Portrait", image: portrait },
    { name: "Color", image: color },
    { name: "Card", image: card },
    { name: "Custom", image: custom },
  ];
  const profileDesign = useAppSelector(
    (state) => state.profileHandler.profileDesign
  );
  const dispatch = useAppDispatch();
  const handleChangeAppBgColor = (color: string) => {
    dispatch(setBackgroundColor(color));
  };
  const profileData = useAppSelector((state) => state.profileHandler);
  console.log("this is image:", profileData?.profileDesign.backgroundImage);

  const layoutBg =
    profileData?.profileDesign.backgroundImage ||
    "https://firebasestorage.googleapis.com/v0/b/wajjcard-7be7d.appspot.com/o/pexels-egos68-1906658.jpg?alt=media&token=727feb95-1b77-4190-a273-38db9710e9d1";

  const { uploadFile } = useUploadFile();

  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
        setOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCropComplete = (croppedImage: string) => {
    const uniqueTime = Date.now();
    setUploadLoading(true);

    uploadFile(croppedImage?.slice(23), `social${uniqueTime}`).then((url) => {
      dispatch(setProfileDesign({ backgroundImage: url }));
      setUploadLoading(false);
      setOpen(false);
    });
  };

  return (
    <div className="w-[100%]   min-h-[350px] rounded-[20px] bg-[#F9F9F9] pl-4 pr-4 pt-6 mt-1 ">
      <div className="w-[100%] flex justify-between">
        {layout?.map((elem) => {
          return (
            <div
              className={`${
                elem.name === profileDesign?.backgroundTheme &&
                "border-[4px] border-primary rounded-2xl "
              }`}
              onClick={() => dispatch(setTheme(elem.name))}
            >
              <Image
                src={elem?.image}
                classes={`h-[174px] w-[78px]  cursor-pointer `}
              />
            </div>
          );
        })}
      </div>
      <div className="w-[100%]">
        <UploadIcon
          imgSrc={layoutBg}
          isShare={false}
          handleFileChange={handleFileChange}
          removeImg={() => {}}
          isThemeImg={true}
        />
      </div>

      <div className="mt-6">
        <ColorSelector
          colorType="Background Color"
          color={profileDesign?.backgroundColor}
          handleChangeColor={handleChangeAppBgColor}
        />
      </div>
      <div className="flex mt-4 items-center gap-3">
        <Text
          text="Whiten Profile Text"
          classes="text-[#8D8D8D] text-[12px] font-[600]  "
        />
        <IOSSwitch
          onChange={() =>
            dispatch(setwhitenText(!profileDesign.whiteProfileText))
          }
          value={profileDesign.whiteProfileText}
        />
      </div>

      <ImageCropperModal
        open={open}
        handleClose={handleClose}
        imageSrc={image}
        onCropComplete={handleCropComplete}
        aspect={9 / 16}
        shape={"rect"}
        loading={uploadLoading}
      />
    </div>
  );
};

export default LayoutDesign;
