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
  setFirstName,
  setJobTitle,
  setLastName,
  setLinks,
  setlogoUrl,
  setProfileName,
  setProfileUrl,
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

  console.log(profileData);

  // setting redux states

  useEffect(() => {
    dispatch(setFirstName(profileData?.firstName));
    dispatch(setLastName(profileData?.lastName));
    dispatch(setJobTitle(profileData?.jobTitle));
    dispatch(setAddress(profileData?.address));
    dispatch(setProfileUrl(profileData?.profileUrl));
    dispatch(setCoverUrl(profileData?.coverUrl));
    dispatch(setlogoUrl(profileData?.logoUrl));
    dispatch(setProfileName(profileData?.profileName));
    dispatch(setCompany(profileData?.company));
    if (typeof profileData?.links === "object") {
      dispatch(setLinks(Object.values(profileData?.links)));
    }
  }, [profileData?.id]);

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
