import Text from "../../Atoms/Text";
import ImageSelecter from "../../Molecules/ImageSelecter";
import InputWithLabel from "../../Molecules/InputWithLabel";
import upldPrfl from "../../assets/images/upldPrfl.png";
import upldLogo from "../../assets/images/upldLogo.png";
import upldCover from "../../assets/images/upldCover.png";
import InternationalPhone from "../../Molecules/InternationalPhone";
import Button from "../../Atoms/Button";
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks";
import {
  setAddress,
  setCompany,
  setCoverUrl,
  setFirstName,
  setJobTitle,
  setLastName,
  setlogoUrl,
  setPhone,
  setProfileName,
  setProfileUrl,
} from "../../Redux/ProfileSlice";
import ImageCropperModal from "../Cropper";
import { useUploadFile } from "../../Hooks/useUploadFile";
import useToastNotifications from "../../Hooks/useToastNotification";
import { useState } from "react";
import { updateProfileInfo } from "../../Services/ProfileServices";
import { useParams } from "react-router-dom";
import { updateTemplateInfo } from "../../Services/TemplatesServices";

const EditInfo: React.FC<any> = ({ handleCancel }) => {
  const profileData = useAppSelector((state) => state.profileHandler);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const [imageType, setImageType] = useState<string>();
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  console.log(loading);

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

  const { uploadFile } = useUploadFile();
  const { showSuccess, showError } = useToastNotifications();

  console.log(profileData);

  return (
    <div className="w-[94%] mt-6 overflow-y-scroll pb-4">
      <Text
        text={
          profileData?.profileTitle === "circoTemplate"
            ? "Template Setting"
            : "Basic Info"
        }
        classes="font-[600] text-[15px]"
      />
      <InputWithLabel
        type="text"
        label={
          profileData?.profileTitle === "circoTemplate"
            ? "Template Name"
            : "Profile Name"
        }
        onChange={(e) => dispatch(setProfileName(e.target.value))}
        value={profileData?.profileName}
        inputClasses="h-[40px] w-[238px] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
        labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
      />

      <div className="flex justify-start gap-[10%] mt-5">
        <ImageSelecter
          text="Profile Image"
          textClasses="font-[600] text-[12px] text-[#8D8D8D]"
          image={profileData?.profileUrl || upldPrfl}
          imgClasses="h-[87px] w-[87px]  mt-2 rounded-full"
          containerClasse="flex flex-col items-center"
          handleFileChange={handleFileChange}
        />
        <ImageSelecter
          text="Cover Image"
          textClasses="font-[600] text-[12px] text-[#8D8D8D]"
          image={profileData?.coverUrl || upldCover}
          imgClasses="h-[91px] rounded-[10px] w-[174px]  mt-2"
          containerClasse="flex flex-col items-center"
          handleFileChange={handleFileChange}
        />
        <ImageSelecter
          text="Logo"
          textClasses="font-[600] text-[12px] text-[#8D8D8D]"
          image={profileData?.logoUrl || upldLogo}
          imgClasses="h-[87px] w-[87px]  mt-2 rounded-full"
          containerClasse="flex flex-col items-center"
          handleFileChange={handleFileChange}
        />
      </div>

      <Text text="Profile Info" classes="font-[600] text-[15px] mt-5" />

      {profileData?.profileTitle != "circoTemplate" && (
        <div className="flex justify-between">
          <div className="w-[48%]">
            <InputWithLabel
              type="text"
              label="First Name"
              onChange={(e) => dispatch(setFirstName(e.target.value))}
              value={profileData.firstName}
              inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
              labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
            />
          </div>
          <div className="w-[48%]">
            <InputWithLabel
              type="text"
              label="Last Name"
              onChange={(e) => dispatch(setLastName(e.target.value))}
              value={profileData.lastName}
              inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
              labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
            />
          </div>
        </div>
      )}

      <div className="flex justify-between mt-2">
        <div className="w-[48%]">
          <InputWithLabel
            type="text"
            label="Job Title"
            onChange={(e) => dispatch(setJobTitle(e.target.value))}
            value={profileData.jobTitle}
            inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
            labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
          />
        </div>
        <div className="w-[48%]">
          <InputWithLabel
            type="text"
            label="Company"
            onChange={(e) => dispatch(setCompany(e.target.value))}
            value={profileData.company}
            inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
            labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
          />
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div className="w-[48%]">
          <InputWithLabel
            type="text"
            label="Location"
            onChange={(e) => dispatch(setAddress(e.target.value))}
            value={profileData.address}
            inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
            labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
          />
        </div>
      </div>

      <Text text="Contact Info" classes="font-[600] text-[15px] mt-5" />

      <div className="flex justify-between">
        <div className="w-[48%]">
          <InputWithLabel
            type="text"
            label="Email"
            onChange={() => {}}
            value={profileData.email}
            inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
            labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
            disabled={true}
          />
        </div>
        <div className="w-[48%]">
          <InternationalPhone
            labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
            flagBtnHeight="40px"
            flagBtnWidth="50px"
            inputClasses="w-[90%] h-[40px] outline-none pl-2 bg-[#F7F7F8] rounded-r-md"
            value={profileData.phone}
            onChange={(data: any) => dispatch(setPhone(data))}
          />
        </div>
      </div>

      <div className="w-[100%] flex justify-end mt-5 gap-4">
        <Button
          text="Cancel"
          btnClasses="text-[12px] font-[600] text-[#646464] w-[63px] h-[37px] rounded-[88px] bg-[#F0F0F0]"
          onClick={() => handleCancel()}
        />
        <Button
          text="Save"
          btnClasses="text-[12px] font-[600] text-white w-[138px] h-[37px] rounded-[88px] bg-[#2B6EF6]"
          onClick={
            () => {
              profileData?.profileTitle === "circoTemplate"
                ? updateTemplateInfo(
                    {
                      company: profileData?.company,
                      address: profileData?.address,
                      profileUrl: profileData?.profileUrl,
                      logoUrl: profileData?.logoUrl,
                      coverUrl: profileData?.coverUrl,
                      jobTitle: profileData?.jobTitle,
                      profileName: profileData.profileName,
                    },
                    profileData?.id,
                    showError,
                    showSuccess,
                    setLoading
                  )
                : updateProfileInfo(
                    {
                      firstName: profileData?.firstName || "",
                      lastName: profileData?.lastName || "",
                      company: profileData?.company || "",
                      address: profileData?.address || "",
                      profileUrl: profileData?.profileUrl || "",
                      logoUrl: profileData?.logoUrl || "",
                      coverUrl: profileData?.coverUrl || "",
                      jobTitle: profileData?.jobTitle || "",
                      profileName: profileData.profileName || "",
                      phone: profileData.phone || "",
                    },
                    id,
                    showError,
                    showSuccess,
                    setLoading
                  );
            }
            // console.log("working")
          }
        />
      </div>

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

export default EditInfo;
