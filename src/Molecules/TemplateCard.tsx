import Text from "../Atoms/Text";
import i16 from "../assets/images/i16.png";
import Image from "../Atoms/Image";
import Button from "../Atoms/Button";
import bgPlchldr from "../assets/images/bgPlchldr.png";
import CustomModal from "../Organisms/Modal/Modal";
import EditTemplate from "../Organisms/Modal/EditTemplate";
import { useState } from "react";
import { useAppDispatch } from "../Hooks/reduxHooks";
import {
  resetState,
  setAddress,
  setCompany,
  setCoverUrl,
  setFirstName,
  setId,
  setJobTitle,
  setLastName,
  setLinks,
  setlogoUrl,
  setPhone,
  setProfileDesign,
  setProfileName,
  setProfileTitle,
  setProfileType,
  setProfileUrl,
  setQrColor,
  setEmail,
  setQrLogo,
} from "../Redux/ProfileSlice";
// import AssignTemplate from "../Organisms/Modal/AssignTemplate";
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
import { GoKebabHorizontal } from "react-icons/go";
import ManageTemplate from "../Organisms/Modal/ManageTemplate";

const TemplateCard: React.FC<any> = ({ data }) => {
  const [openEditTemplate, setopenEditTemplate] = useState(false);
  const dispatch = useAppDispatch();
  const innerHeight = window.innerWidth;

  // console.log(data?.phone, "<>>>><<<<<<>>>>>>><<<<<<<<>>");

  const setTemplateData = (templateData: any) => {
    // console.log(templateData?.phone, ")))))(((((((");

    dispatch(setFirstName(templateData?.firstName));
    dispatch(setEmail(templateData?.email));
    dispatch(setLastName(templateData?.lastName));
    dispatch(setJobTitle(templateData?.jobTitle));
    dispatch(setAddress(templateData?.address));
    dispatch(setProfileUrl(templateData?.profileUrl));
    dispatch(setId(templateData?.id));
    dispatch(setPhone(templateData?.phone));
    dispatch(setCoverUrl(templateData?.coverUrl));
    dispatch(setlogoUrl(templateData?.logoUrl));
    dispatch(setProfileName(templateData?.profileName));
    dispatch(setCompany(templateData?.company));
    dispatch(setProfileTitle(templateData?.profileTitle));
    dispatch(setProfileType(templateData?.profileType));
    if (typeof templateData?.links === "object") {
      dispatch(setLinks(Object.values(templateData?.links)));
    } else {
      dispatch(setLinks([]));
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
    dispatch(setQrColor(templateData?.qrColor));
    dispatch(setQrLogo(templateData?.qrLogo));
    dispatch(setProfileLock(templateData?.profilePictureLock));
    dispatch(setLogoLock(templateData?.logoLock));
    dispatch(setCoverLock(templateData?.coverLock));
    dispatch(setJobLock(templateData?.jobLock));
    dispatch(setCompanyLock(templateData?.companyLock));
    dispatch(setLocationLock(templateData?.locationLock));
    dispatch(setPhoneLock(templateData?.phoneLock));
    dispatch(setEmailLock(templateData?.setEmailLock));

    dispatch(setGeneralStyleLock(templateData?.generalStyleLock));
    dispatch(setLayoutStyleLock(templateData?.layoutStyleLock));
    dispatch(setsaveContactStyleLock(templateData?.saveContactStyleLock));
    dispatch(setWebLinkStyleLock(templateData?.webLinkStyleLock));
    dispatch(sethighlightBoxStyleLock(templateData?.highlightBoxStyleLock));
  };

  const openEditTemplatePanel = () => {
    setTemplateData(data);

    setopenEditTemplate(true);
  };

  const handleCloseEditTemplate = () => {
    dispatch(resetState());
    dispatch(setProfileLock(false));
    dispatch(setLogoLock(false));
    dispatch(setCoverLock(false));
    dispatch(setJobLock(false));
    dispatch(setCompanyLock(false));
    dispatch(setLocationLock(false));
    dispatch(setPhoneLock(false));
    dispatch(setEmailLock(false));
    setopenEditTemplate(false);
  };

  const [assignModal, setAssignModal] = useState<boolean>(false);

  const handleCancel = () => {
    dispatch(setFirstName(data?.firstName));
    dispatch(setLastName(data?.lastName));
    dispatch(setJobTitle(data?.jobTitle));
    dispatch(setAddress(data?.address));
    dispatch(setProfileUrl(data?.profileUrl));
    dispatch(setCoverUrl(data?.coverUrl));
    dispatch(setlogoUrl(data?.logoUrl));
    dispatch(setProfileName(data?.profileName));
    dispatch(setCompany(data?.company));
    // dispatch(setEmail(data?.email));
    // dispatch(setPhone(data?.phone));
  };

  return (
    <div className="w-[30%] h-[240px] bg-white shadow-md rounded-[23px] pt-2 flex flex-col items-center">
      <div className="w-[95%] border h-[130px] rounded-[18px] relative">
        <div className="w-[43px] h-[18px] bg-white flex justify-center items-center absolute top-2 right-2 rounded-full cursor-pointer">
          <GoKebabHorizontal className="text-[#C0C0C0] text-lg" />
        </div>
        <Image
          src={data?.coverUrl || bgPlchldr}
          classes="h-[100%] w-[100%] object-cover rounded-[18px]"
        />
      </div>
      <Text text={data?.profileName} classes="font-[700] text-[16px] mt-2" />
      <div className="flex items-center gap-2 mt-[2px]">
        <Image src={i16} classes="h-[11px] w-[11px]" />
        <Text
          text={
            typeof data?.members === "object"
              ? Object.values(data?.members)?.length + " Members"
              : "0 Members"
          }
          classes="font-[700] text-[11px] text-[#CDCCD4]"
        />
      </div>

      <div className="flex gap-2 mt-3">
        <Button
          text="Edit"
          btnClasses="font-[600] text-[12px] text-[#808080] w-[100px] h-[30px] border rounded-[22px] border-[#C9C9C9]"
          onClick={() => openEditTemplatePanel()}
        />

        <Button
          text="Assign"
          btnClasses="font-[600] text-[12px] text-[#808080] w-[100px] h-[30px] border rounded-[22px] border-[#C9C9C9]"
          onClick={() => setAssignModal(true)}
        />
      </div>
      <CustomModal
        open={openEditTemplate}
        onClose={() => handleCloseEditTemplate()}
        style={{
          height: innerHeight > 700 ? "86%" : "83%",
          width: "83%",
          borderRadius: 5,
          // p: 4,
        }}
      >
        <EditTemplate handleCancel={handleCancel} />
      </CustomModal>

      <CustomModal
        open={assignModal}
        onClose={() => setAssignModal(false)}
        style={{ height: "590px", width: "950px", borderRadius: 5, p: 4 }}
      >
        {/* <AssignTemplate template={data} /> */}
        <ManageTemplate team={data} onClose={() => setAssignModal(false)} />
      </CustomModal>
    </div>
  );
};

export default TemplateCard;
