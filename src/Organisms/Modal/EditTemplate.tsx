// import React from "react";
import EditSidebar from "../EditSidebar";
import EditContainer from "../EditContainer";
import Profile_QrContainer from "../Profile_QrContainer";

const EditTemplate = () => {
  return (
    <div
      className={`w-[100%] flex h-[100%]  bg-[white] absolute bottom-2 rounded-[20px]`}
    >
      <EditSidebar />
      <EditContainer />
      <Profile_QrContainer />
    </div>
  );
};

export default EditTemplate;
