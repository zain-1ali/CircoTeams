import { useState } from "react";
import Text from "../../Atoms/Text";
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks";
import { useUploadFile } from "../../Hooks/useUploadFile";
import ColorSelector from "../../Molecules/ColorSelector";
import TextButton from "../../Molecules/TextButton";
import UploadIcon from "../../Molecules/UploadIcon";
import { setQrColor, setQrLogo } from "../../Redux/ProfileSlice";
import junk1 from "../../assets/images/junk1.png";
import ImageCropperModal from "../Cropper";
import {
  updateProfileInfo,
  updateUserName,
} from "../../Services/ProfileServices";
import { useParams } from "react-router-dom";
import useToastNotifications from "../../Hooks/useToastNotification";

const  Share = () => {
  const profileData = useAppSelector((state) => state.profileHandler);
  const dispatch = useAppDispatch();
  const handleChangeAppIconColor = (color: string) => {
    dispatch(setQrColor(color));
  };

  const [loading, setLoading] = useState<boolean>(false);
  const { showSuccess, showError } = useToastNotifications();

  console.log(loading);

  const { id } = useParams();

  const { uploadFile } = useUploadFile();

  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

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

  const handleCropComplete = (croppedImage: string) => {
    const uniqueTime = Date.now();
    setUploadLoading(true);

    uploadFile(croppedImage?.slice(23), `profileUrl${uniqueTime}`).then(
      (url) => {
        url && dispatch(setQrLogo(url));
        setUploadLoading(false);
        setOpen(false);
      }
    );
  };

  return (
    <div className="w-[94%] mt-6 overflow-y-scroll pb-4">
      <Text text="QR Code" classes="font-[600] text-[15px]" />
      <div className="mt-3">
        <ColorSelector
          colorType="QR Code Color"
          handleChangeColor={handleChangeAppIconColor}
          color={profileData?.qrColor}
        />
        <div className="mt-2">
          <UploadIcon
            imgSrc={profileData.qrLogo || junk1}
            isShare={true}
            handleFileChange={handleFileChange}
            removeImg={() => dispatch(setQrLogo(""))}
          />
        </div>
      </div>

      <Text text="Share" classes="font-[600] text-[15px] mt-5" />
      <Text
        text="Profile URL"
        classes="font-[600] text-[12px] text-[#8D8D8D] mt-3"
      />
      <TextButton
        text="http://www.circo.me/"
        btnText="Save"
        width="w-[416px] mt-2"
        onClick={() =>
          updateUserName(
            profileData?.username,
            id,
            showError,
            showSuccess,
            setLoading,
            false,
            () =>
              updateProfileInfo(
                { qrColor: profileData?.qrColor, qrLogo: profileData.qrLogo },
                id,
                showError,
                showSuccess,
                setLoading
              )
          )
        }
      />

      <ImageCropperModal
        open={open}
        handleClose={handleClose}
        imageSrc={image}
        onCropComplete={handleCropComplete}
        aspect={1 / 1}
        shape={"rect"}
        loading={uploadLoading}
      />
    </div>
  );
};

export default Share;
