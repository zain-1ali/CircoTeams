// import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
// import InputWithLabel from "./InputWithLabel";
import CustomButton from "./CustomButton";
import { setProfileCreationStage } from "../Redux/SignupSlice";
import { useAppDispatch, useAppSelector } from "../Hooks/reduxHooks";
import upldPrfl from "../assets/images/upldPrfl.png";
import upldLogo from "../assets/images/upldLogo.png";
import upldCover from "../assets/images/upldCover.png";
import ImageSelecter from "./ImageSelecter";
import { useNavigate } from "react-router-dom";
import ImageCropperModal from "../Organisms/Cropper";
import React, { useState } from "react";
import { setCoverUrl, setlogoUrl, setProfileUrl } from "../Redux/ProfileSlice";
import useToastNotifications from "../Hooks/useToastNotification.js";
import { createNewUser } from "../Services/userService.js.js";
import { useUploadFile } from "../Hooks/useUploadFile.js";
import { CircularProgress } from "@mui/material";

const SignupCreateProfileStage3: React.FC<any> = ({ passwords }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const [imageType, setImageType] = useState<string>();
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    imgType: string
  ): void => {
    const file = event.target.files?.[0]; // Use optional chaining in case no file is selected
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageType(imgType);
        setImage(reader.result as string); // Type assertion to ensure `reader.result` is treated as a string
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
    if (imageType === "Profile Image") {
      uploadFile(croppedImage?.slice(23), `profileUrl${uniqueTime}`).then(
        (url) => {
          dispatch(setProfileUrl(url));
          setUploadLoading(false);
          setOpen(false);
        }
      );
    } else if (imageType === "Logo") {
      uploadFile(croppedImage?.slice(23), `logoUrl${uniqueTime}`).then(
        (url) => {
          dispatch(setlogoUrl(url));
          setUploadLoading(false);
          setOpen(false);
        }
      );
    } else if (imageType === "Cover Image") {
      uploadFile(croppedImage?.slice(23), `coverUrl${uniqueTime}`).then(
        (url) => {
          dispatch(setCoverUrl(url));
          setUploadLoading(false);
          setOpen(false);
        }
      );
    }
  };

  const profileUrl = useAppSelector((state) => state.profileHandler.profileUrl);

  const logoUrl = useAppSelector((state) => state.profileHandler.logoUrl);

  const coverUrl = useAppSelector((state) => state.profileHandler.coverUrl);

  const profileData = useAppSelector((state) => state.profileHandler);
  const authLinks = useAppSelector((state) => state.authLinkHandler.links);

  const returnExistingLinks = () => {
    let theLinks: any[] = [];
    authLinks.map((link) => {
      if (link.value) {
        theLinks.push(link);
      }
    });
    return theLinks;
  };

  const { uploadFile } = useUploadFile();
  const { showSuccess, showError } = useToastNotifications();

  return (
    <div className="w-[100%] mt-2">
      <div className="w-[100%]">
        <MdKeyboardBackspace
          className="text-[#030229] text-3xl cursor-pointer"
          onClick={() => {
            dispatch(setProfileCreationStage(1));
          }}
        />
      </div>
      <ImageSelecter
        text="Profile Image"
        textClasses="font-[400] text-[16px]"
        image={profileUrl || upldPrfl}
        imgClasses="h-[112px] w-[112px] object-cover mt-3 rounded-full"
        containerClasse="mt-4"
        handleFileChange={handleFileChange}
        onRemove={() => {
          dispatch(setProfileUrl(""));
        }}
      />
      <ImageSelecter
        text="Cover Image"
        textClasses="font-[400] text-[16px]"
        image={coverUrl || upldCover}
        imgClasses="h-[128px] w-[246px] object-cover mt-3 rounded-[16px]"
        containerClasse="mt-4"
        handleFileChange={handleFileChange}
        onRemove={() => {
          dispatch(setCoverUrl(""));
        }}
      />
      <ImageSelecter
        text="Logo"
        textClasses="font-[400] text-[16px]"
        image={logoUrl || upldLogo}
        imgClasses="h-[112px] w-[112px] object-cover mt-3 rounded-full"
        containerClasse="mt-4"
        handleFileChange={handleFileChange}
        onRemove={() => {
          dispatch(setlogoUrl(""));
        }}
      />

      <CustomButton
        text={loading ? "" : "Continue"}
        onClick={() =>
          !loading
            ? createNewUser(
                { ...profileData, links: [...returnExistingLinks()] },
                passwords,
                showError,
                showSuccess,
                navigate,
                setLoading
              )
            : () => {}
        }
        icon={
          loading && <CircularProgress sx={{ color: "#ffffff" }} size={30} />
        }
        btnClasses="bg-[#2B6EF6] text-[white] w-[100%] h-[50px] text-[600] text-[16px] rounded-md mt-6"
      />

      <ImageCropperModal
        open={open}
        handleClose={handleClose}
        imageSrc={image}
        onCropComplete={handleCropComplete}
        aspect={imageType === "Cover Image" ? 16 / 9 : 1 / 1}
        shape={imageType === "Cover Image" ? "rect" : "round"}
        loading={uploadLoading}
      />
    </div>
  );
};

export default SignupCreateProfileStage3;
