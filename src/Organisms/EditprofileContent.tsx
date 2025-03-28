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
  setParentId,
  setTemplateId,
  setProfileDesign,
  setProfileName,
  setProfileTitle,
  setProfileUrl,
  setQrColor,
  setQrLogo,
  setUsername,
  toggleDirectMode,
  toggleLeadMode,
  setId,
} from "../Redux/ProfileSlice";
import {
  setCompanyLock,
  setCoverLock,
  setEmailLock,
  setGeneralStyleLock,
  sethighlightBoxStyleLock,
  setJobLock,
  setLayoutStyleLock,
  setLocationLock,
  setLogoLock,
  setPhoneLock,
  setProfileLock,
  setsaveContactStyleLock,
  setWebLinkStyleLock,
} from "../Redux/TemplateLockedSlice";
import { setProfileEditSection } from "../Redux/EditSectionsSlice";

const EditprofileContent = () => {
  const innerHeight: number = window.innerHeight;

  const [profileData, setProfileData] = useState<any>({});

  const { id } = useParams();
  const dispatch = useAppDispatch();

  const getProfileData = (data: any) => {
    if (data) {
      setProfileData(Object.values(data)?.[0]);
      dispatch(setCoverLock(false));
      dispatch(setLogoLock(false));
      dispatch(setProfileLock(false));
      dispatch(setJobLock(false));
      dispatch(setCompanyLock(false));
      dispatch(setLocationLock(false));
      dispatch(setEmailLock(false));
      dispatch(setPhoneLock(false));
      dispatch(setGeneralStyleLock(false));
      dispatch(setLayoutStyleLock(false));
      dispatch(setsaveContactStyleLock(false));
      dispatch(setWebLinkStyleLock(false));
      dispatch(sethighlightBoxStyleLock(false));
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

      dispatch(setCoverLock(templateData?.coverLock));
      dispatch(setLogoLock(templateData?.logoLock));
      dispatch(setProfileLock(templateData?.profilePictureLock));
      dispatch(setJobLock(templateData?.jobLock));
      dispatch(setCompanyLock(templateData?.companyLock));
      dispatch(setLocationLock(templateData?.locationLock));
      dispatch(setEmailLock(templateData?.emailLock));
      dispatch(setPhoneLock(templateData?.phoneLock));
      dispatch(setGeneralStyleLock(templateData?.generalStyleLock));
      dispatch(setLayoutStyleLock(templateData?.layoutStyleLock));
      dispatch(setsaveContactStyleLock(templateData?.saveContactStyleLock));
      dispatch(setWebLinkStyleLock(templateData?.webLinkStyleLock));
      dispatch(sethighlightBoxStyleLock(templateData?.highlightBoxStyleLock));

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
      dispatch(setProfileTitle(profilesData?.profileTitle));
      dispatch(
        setCompany(
          templateData?.companyLock
            ? templateData?.company
            : profilesData?.company
        )
      );
      dispatch(
        setCompany(
          templateData?.emailLock
            ? templateData?.email
            : profilesData?.email
        )
      );
      dispatch(toggleLeadMode(templateData?.leadMode));
      dispatch(toggleDirectMode(templateData?.directMode));
      dispatch(setUsername(templateData?.username || id));
      dispatch(setDirect(templateData?.direct));
      // dispatch(setEmail(templateData?.email));
      dispatch(setPhone(templateData?.phone));
      // console.log(templateData?.leadMode);
      if (typeof templateData?.links === "object") {
        dispatch(setLinks(Object.values(templateData?.links)));
      }

      dispatch(
        setProfileDesign({
          appIconColor: templateData?.generalStyleLock
            ? templateData?.profileDesign?.appIconColor
            : profileData?.profileDesign?.appIconColor,

          backgroundColor: templateData?.layoutStyleLock
            ? templateData?.profileDesign?.backgroundColor
            : profileData?.profileDesign?.backgroundColor,

          backgroundImage: templateData?.layoutStyleLock
            ? templateData?.profileDesign?.backgroundImage
            : profileData?.profileDesign?.backgroundImage,

          backgroundOpacity: 98,

          backgroundTheme: templateData?.layoutStyleLock
            ? templateData?.profileDesign?.backgroundTheme
            : profileData?.profileDesign?.backgroundTheme,

          boxBackgroundColor: templateData?.highlightBoxStyleLock
            ? templateData?.profileDesign?.boxBackgroundColor
            : profileData?.profileDesign?.boxBackgroundColor,

          boxTextColor: templateData?.highlightBoxStyleLock
            ? templateData?.profileDesign?.boxTextColor
            : profileData?.profileDesign?.boxTextColor,

          hideCompanyLogo: false,
          hideSaveContact: false,

          highlightBoxStyle: templateData?.highlightBoxStyleLock
            ? templateData?.profileDesign?.highlightBoxStyle
            : profileData?.profileDesign?.highlightBoxStyle,

          profileFont: templateData?.generalStyleLock
            ? templateData?.profileDesign?.profileFont
            : profileData?.profileDesign?.profileFont,

          saveContactBackgroundColor: templateData?.saveContactStyleLock
            ? templateData?.profileDesign?.saveContactBackgroundColor
            : profileData?.profileDesign?.saveContactBackgroundColor,

          saveContactStyle: templateData?.saveContactStyleLock
            ? templateData?.profileDesign?.saveContactStyle
            : profileData?.profileDesign?.saveContactStyle,

          saveContactTextColor: templateData?.saveContactStyleLock
            ? templateData?.profileDesign?.saveContactTextColor
            : profileData?.profileDesign?.saveContactTextColor,

          weblinkButtonBackgroundColor: templateData?.webLinkStyleLock
            ? templateData?.profileDesign?.weblinkButtonBackgroundColor
            : profileData?.profileDesign?.weblinkButtonBackgroundColor,

          weblinkButtonTextColor: templateData?.webLinkStyleLock
            ? templateData?.profileDesign?.weblinkButtonTextColor
            : profileData?.profileDesign?.weblinkButtonTextColor,

          weblinkStyle: templateData?.webLinkStyleLock
            ? templateData?.profileDesign?.weblinkStyle
            : profileData?.profileDesign?.weblinkStyle,

          whiteProfileText: false,
          whiteTextAndBorder: templateData?.layoutStyleLock
            ? templateData?.profileDesign?.whiteTextAndBorder
            : profileData?.profileDesign?.whiteTextAndBorder,
        })
      );

      // if (templateData?.profileDesign?.backgroundImage) {
      //   dispatch(
      //     setProfileDesign({
      //       backgroundImage: templateData?.profileDesign?.backgroundImage,
      //     })
      //   );
      // } else {
      //   dispatch(
      //     setProfileDesign({
      //       backgroundImage:
      //         "https://firebasestorage.googleapis.com/v0/b/wajjcard-7be7d.appspot.com/o/pexels-egos68-1906658.jpg?alt=media&token=727feb95-1b77-4190-a273-38db9710e9d1",
      //     })
      //   );
      // }
    }
  };

  // setting redux states

  useEffect(() => {
    dispatch(setProfileEditSection(0));
    if (profileData?.templateId) {
      dispatch(setFirstName(profileData?.firstName));
      dispatch(setEmail(profileData?.email));
      dispatch(setLastName(profileData?.lastName));
      dispatch(setTemplateId(profileData?.templateId));
      dispatch(setParentId(profileData?.parentID));
      dispatch(setId(profileData?.id));
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
      dispatch(setProfileTitle(profileData?.profileTitle));
      dispatch(setCompany(profileData?.company));
      dispatch(toggleLeadMode(profileData?.leadMode));
      dispatch(toggleDirectMode(profileData?.directMode));
      dispatch(setUsername(profileData?.username || id));
      dispatch(setDirect(profileData?.direct));
      dispatch(setEmail(profileData?.email));
      dispatch(setPhone(profileData?.phone));
      dispatch(setParentId(profileData?.parentID));
      // console.log(profileData?.leadMode);
      typeof profileData?.links === "object" ?
        dispatch(setLinks(Object.values(profileData?.links)))
        : dispatch(setLinks([]));
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
      dispatch(
        setQrLogo(
          profileData?.qrLogo ||
            "https://firebasestorage.googleapis.com/v0/b/wajjcard-7be7d.appspot.com/o/circo-logo.png?alt=media&token=06b62f72-4d56-48cc-b61e-e1aa7ee4af64"
        )
      );
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
    dispatch(setProfileTitle(profileData?.profileTitle));
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
