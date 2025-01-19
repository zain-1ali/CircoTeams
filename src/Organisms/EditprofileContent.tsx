import { useParams } from "react-router-dom";
import EditContainer from "./EditContainer";
import EditProfileHeader from "./EditProfileHeader";
import EditSidebar from "./EditSidebar";
import Profile_QrContainer from "./Profile_QrContainer";
import { useEffect, useState } from "react";
import { getSingleChildFromDb } from "../Services/Constants";
import { useAppDispatch } from "../Hooks/reduxHooks";
import {
  setAddress,
  setCompany,
  setCoverUrl,
  setDirect,
  setEmail,
  setFirstName,
  setJobTitle,
  setLastName,
  setLinks,
  setlogoUrl,
  setPhone,
  setProfileDesign,
  setProfileName,
  setProfileUrl,
  setQrColor,
  setQrLogo,
  setUsername,
  toggleDirectMode,
  toggleLeadMode,
} from "../Redux/ProfileSlice";

const EditprofileContent = () => {
  const innerHeight: number = window.innerHeight;

  const [profileData, setProfileData] = useState<any>({});

  const { id } = useParams();
  const dispatch = useAppDispatch();

  const getProfileData = (data: any) => {
    if (data) {
      setProfileData(Object.values(data)?.[0]);
    }
  };

  // getting profile data
  useEffect(() => {
    getSingleChildFromDb("User/", "id", id, getProfileData);
  }, [id]);

  const getTemplateData = (templatesData: any, profilesData: any) => {
    // profilePictureLock:false,coverLock:false,logoLock:false,jobLock:false,companyLock:false,locationLock:false,emailLock:false,phoneLock:false
    console.log(templatesData, "here is template data");

    if (templatesData) {
      const templateData: any = Object.values(templatesData)?.[0];

      // console.log(templateData, "here is refined");

      dispatch(
        setJobTitle(
          templateData?.jobLock
            ? templateData?.jobTitle
            : profilesData?.jobTitle
        )
      );
      dispatch(
        setAddress(
          templateData?.locationLock
            ? templateData?.address
            : profilesData?.address
        )
      );
      dispatch(
        setProfileUrl(
          templateData?.profilePictureLock
            ? templateData?.profileUrl
            : profilesData?.profileUrl
        )
      );
      dispatch(
        setCoverUrl(
          templateData?.coverLock
            ? templateData?.coverUrl
            : profilesData?.coverUrl
        )
      );
      dispatch(
        setlogoUrl(
          templateData?.logoLock ? templateData?.logoUrl : profilesData?.logoUrl
        )
      );
      dispatch(setProfileName(profilesData?.profileName));
      dispatch(
        setCompany(
          templateData?.companyLock
            ? templateData?.company
            : profilesData?.company
        )
      );
      dispatch(toggleLeadMode(templateData?.leadMode));
      dispatch(toggleDirectMode(templateData?.directMode));
      dispatch(setUsername(templateData?.username));
      dispatch(setDirect(templateData?.direct));
      dispatch(setEmail(templateData?.email));
      dispatch(setPhone(templateData?.phone));
      console.log(templateData?.leadMode);
      if (typeof templateData?.links === "object") {
        dispatch(setLinks(Object.values(templateData?.links)));
      }
      dispatch(setProfileDesign(templateData?.profileDesign));

      if (templateData?.profileDesign?.backgroundImage) {
        dispatch(
          setProfileDesign({
            backgroundImage: templateData?.profileDesign?.backgroundImage,
          })
        );
      } else {
        dispatch(
          setProfileDesign({
            backgroundImage:
              "https://firebasestorage.googleapis.com/v0/b/wajjcard-7be7d.appspot.com/o/pexels-egos68-1906658.jpg?alt=media&token=727feb95-1b77-4190-a273-38db9710e9d1",
          })
        );
      }
    }
  };

  // setting redux states

  useEffect(() => {
    if (profileData?.templateId) {
      dispatch(setFirstName(profileData?.firstName));
      dispatch(setLastName(profileData?.lastName));
      getSingleChildFromDb(
        "Template/",
        "id",
        profileData?.templateId,
        (data: any) => {
          getTemplateData(data, profileData);
        }
      );
    } else {
      dispatch(setFirstName(profileData?.firstName));
      dispatch(setLastName(profileData?.lastName));
      dispatch(setJobTitle(profileData?.jobTitle));
      dispatch(setAddress(profileData?.address));
      dispatch(setProfileUrl(profileData?.profileUrl));
      dispatch(setCoverUrl(profileData?.coverUrl));
      dispatch(setlogoUrl(profileData?.logoUrl));
      dispatch(setProfileName(profileData?.profileName));
      dispatch(setCompany(profileData?.company));
      dispatch(toggleLeadMode(profileData?.leadMode));
      dispatch(toggleDirectMode(profileData?.directMode));
      dispatch(setUsername(profileData?.username));
      dispatch(setDirect(profileData?.direct));
      dispatch(setEmail(profileData?.email));
      dispatch(setPhone(profileData?.phone));
      console.log(profileData?.leadMode);
      if (typeof profileData?.links === "object") {
        dispatch(setLinks(Object.values(profileData?.links)));
      }
      dispatch(setProfileDesign(profileData?.profileDesign));

      if (profileData?.profileDesign?.backgroundImage) {
        dispatch(
          setProfileDesign({
            backgroundImage: profileData?.profileDesign?.backgroundImage,
          })
        );
      } else {
        dispatch(
          setProfileDesign({
            backgroundImage:
              "https://firebasestorage.googleapis.com/v0/b/wajjcard-7be7d.appspot.com/o/pexels-egos68-1906658.jpg?alt=media&token=727feb95-1b77-4190-a273-38db9710e9d1",
          })
        );
      }

      dispatch(setQrColor(profileData?.qrColor));
      dispatch(setQrLogo(profileData?.qrLogo));
    }
  }, [profileData?.id]);

  const handleCancel = () => {
    dispatch(setFirstName(profileData?.firstName));
    dispatch(setLastName(profileData?.lastName));
    dispatch(setJobTitle(profileData?.jobTitle));
    dispatch(setAddress(profileData?.address));
    dispatch(setProfileUrl(profileData?.profileUrl));
    dispatch(setCoverUrl(profileData?.coverUrl));
    dispatch(setlogoUrl(profileData?.logoUrl));
    dispatch(setProfileName(profileData?.profileName));
    dispatch(setCompany(profileData?.company));
    dispatch(setEmail(profileData?.email));
    dispatch(setPhone(profileData?.phone));
  };

  return (
    <div className="w-[83%] h-[100%] bg-[#F7F7F8] flex justify-center">
      <div className="w-[95%] relative ">
        <EditProfileHeader />
        <div
          className={`w-[100%] flex ${
            innerHeight > 700 ? "h-[86%]" : "h-[83%]"
          }  bg-[white] absolute bottom-2 rounded-[20px]`}
        >
          <EditSidebar />
          <EditContainer handleCancel={handleCancel} />
          <Profile_QrContainer />
        </div>
      </div>
    </div>
  );
};

export default EditprofileContent;
