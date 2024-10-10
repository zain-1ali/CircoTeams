import Button from "../../Atoms/Button";
import ToggleArea from "../../Molecules/ToggleArea";
import { IoIosAdd } from "react-icons/io";
import LinkContainer from "../LinkContainer";
import CustomModal from "../Modal/Modal";
import { useState } from "react";
import LinkModal from "../Modal/LinkModal";

const Links = () => {
  const [linkModal, setLinkModal] = useState<boolean>(false);
  console.log(window.innerHeight);

  return (
    <div className="w-[96%] mt-6 overflow-y-scroll pb-4">
      <div className="w-[100%] flex justify-between items-center">
        <ToggleArea text="Lead Capture Mode" width="w-[42%]" />
        <ToggleArea text="One Link Mode" width="w-[33%]" />
        <Button
          text="Add Link"
          btnClasses="h-[41px] w-[22%] rounded-full text-white bg-[#2B6EF6] text-white text-[12px] font-[700] flex justify-center items-center"
          onClick={() => setLinkModal(true)}
          icon={<IoIosAdd className="text-xl " />}
        />
      </div>
      <div className="w-[100%] mt-10 h-[83%] flex flex-col gap-4 overflow-y-scroll">
        <LinkContainer />
        <LinkContainer />
        <LinkContainer />
        <LinkContainer />
      </div>

      <CustomModal
        open={linkModal}
        onClose={() => setLinkModal(false)}
        style={{ height: 595, width: 956, borderRadius: "33px", p: 4 }}
      >
        <LinkModal />
      </CustomModal>
    </div>
  );
};

export default Links;
