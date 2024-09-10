import EditContainer from "./EditContainer";
import EditProfileHeader from "./EditProfileHeader";
import EditSidebar from "./EditSidebar";
import Profile_QrContainer from "./Profile_QrContainer";

const EditprofileContent = () => {
  const innerHeight: number = window.innerHeight;

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
          <EditContainer />
          <Profile_QrContainer />
        </div>
      </div>
    </div>
  );
};

export default EditprofileContent;
