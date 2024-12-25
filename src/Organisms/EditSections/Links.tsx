import Button from "../../Atoms/Button";
import ToggleArea from "../../Molecules/ToggleArea";
import { IoIosAdd } from "react-icons/io";
import LinkContainer from "../LinkContainer";
import CustomModal from "../Modal/Modal";
import { useState } from "react";
import LinkModal from "../Modal/LinkModal";
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks";
import { resetLinkData } from "../../Redux/linkSlice";
import { resetSocialLink } from "../../Redux/socialLinkSlice";
import {
  setDirect,
  toggleDirectMode,
  toggleLeadMode,
  // ,
  //  toggleLeadMode
} from "../../Redux/ProfileSlice";
import { useParams } from "react-router-dom";
import {
  updateDirectMode,
  updateLeadCapture,
} from "../../Services/ProfileServices";

const Links = () => {
  const [linkModal, setLinkModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  console.log(window.innerHeight);
  const profileData = useAppSelector((state) => state.profileHandler);
  const handleCloseLinkModal = () => {
    dispatch(resetLinkData());
    dispatch(resetSocialLink());
    setLinkModal(false);
  };
  console.log(profileData.leadMode, "leadmode2");

  return (
    <div className="w-[96%] mt-6 overflow-y-scroll pb-4">
      <div className="w-[100%] flex justify-between items-center">
        <ToggleArea
          text="Lead Capture Mode"
          width="w-[42%]"
          toggleValue={profileData.leadMode}
          toggleChange={() =>
            updateLeadCapture(
              profileData.leadMode,
              profileData.directMode,
              id,
              (mode: boolean) => dispatch(toggleLeadMode(mode)),
              (mode: boolean) => dispatch(toggleDirectMode(mode))
            )
          }
        />
        <ToggleArea
          text="One Link Mode"
          width="w-[33%]"
          toggleValue={profileData?.directMode}
          toggleChange={() =>
            updateDirectMode(
              profileData?.directMode,
              id,
              (mode: boolean) => dispatch(toggleDirectMode(mode)),
              (mode: any) => dispatch(setDirect(mode)),
              (mode: boolean) => dispatch(toggleLeadMode(mode)),
              profileData?.links?.[0],
              profileData?.links?.length,
              profileData.leadMode
            )
          }
        />
        <Button
          text="Add Link"
          btnClasses="h-[41px] w-[22%] rounded-full text-white bg-[#2B6EF6] text-white text-[12px] font-[700] flex justify-center items-center"
          onClick={() => setLinkModal(true)}
          icon={<IoIosAdd className="text-xl " />}
        />
      </div>
      <div className="w-[100%] mt-10 h-[83%] flex flex-col gap-4 overflow-y-scroll">
        {profileData.links && profileData.links.length > 0 ? (
          profileData?.links?.map((link) => {
            return (
              <LinkContainer
                link={link}
                direct={profileData?.direct}
                directMode={profileData?.directMode}
                id={id}
                links={profileData?.links}
              />
            );
          })
        ) : (
          <div className="w-[100%] h-[100%] flex justify-center items-center">
            No links to show
          </div>
        )}
        {/* // <LinkContainer />
        // <LinkContainer />
        // <LinkContainer /> */}
      </div>

      <CustomModal
        open={linkModal}
        onClose={() => handleCloseLinkModal()}
        style={{ height: 595, width: 956, borderRadius: "33px", p: 4 }}
      >
        <LinkModal />
      </CustomModal>
    </div>
  );
};

export default Links;
