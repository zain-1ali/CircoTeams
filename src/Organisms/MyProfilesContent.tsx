import { useEffect, useState } from "react";
import Text from "../Atoms/Text";
import UserProfileCard from "./UserProfileCard";
import { getMultipleChilds, getSingleChildFromDb } from "../Services/Constants";
import CustomModal from "./Modal/Modal";
import SellfProfileSure from "./Modal/SellfProfileSure";
import { createSelfProfile } from "../Services/ProfileServices";
import useToastNotifications from "../Hooks/useToastNotification";
import Loading from "./Loading";
import CreateTeamProfile from "./Modal/CreateTeamProfile";

const MyProfilesContent = () => {
  const companyId: string | null = localStorage.getItem("circoCompanyUid");
  const [companyProfile, setCompanyProfile] = useState<any>({});
  const [sureModal, setSureModal] = useState<boolean>(false);
  const [creatTeamProfileModal, setTeamProfileModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  console.log(loading);
  const [allProfiles, setAllProfiles] = useState<any>([]);

  const getCompanyProfile = (data: any) => {
    if (data) {
      setCompanyProfile(Object.values(data)?.[0]);
    }
  };

  const getAllProfiles = (data: any) => {
    if (data) {
      setAllProfiles(Object.values(data));
    }
  };

  // getting company profile
  useEffect(() => {
    getSingleChildFromDb("/User", "id", companyId, getCompanyProfile);
  }, []);

  console.log(companyProfile);

  // getting all child profiles
  useEffect(() => {
    getMultipleChilds(
      "User/",
      "parentID",
      companyProfile?.id,
      getAllProfiles,
      setLoading
    );
  }, [companyProfile?.id]);

  console.log(allProfiles);

  const { showError, showSuccess } = useToastNotifications();

  return (
    <div className="h-[100%] w-[83%] bg-[#F7F7F8] flex justify-center relative">
      <div className="w-[95%]  h-[96%] overflow-y-scroll">
        <Text text="My Profiles" classes="font-[700] text-[24px] mt-[30px]" />
        <div className="w-[100%] flex justify-start gap-[8%] mt-3 flex-wrap gap-y-6">
          {companyProfile?.id && (
            <UserProfileCard isCreatePrfl={false} profile={companyProfile} />
          )}

          {allProfiles?.map((profile: any, i: any) => {
            if (profile?.profileType === "self") {
              return (
                <UserProfileCard
                  isCreatePrfl={false}
                  profile={profile}
                  key={i}
                />
              );
            }
          })}

          <UserProfileCard
            isCreatePrfl={true}
            onClick={() => setSureModal(true)}
          />
        </div>

        <Text
          text="My Team Profile"
          classes="font-[700] text-[24px] mt-[30px]"
        />
        <div className="w-[100%] flex justify-start gap-[8%] gap-y-5 mt-3 flex-wrap">
          {allProfiles?.map((profile: any, i: any) => {
            if (profile?.profileType === "team") {
              return (
                <UserProfileCard
                  isCreatePrfl={false}
                  profile={profile}
                  key={i}
                />
              );
            }
          })}
          <UserProfileCard
            isCreatePrfl={true}
            onClick={() => setTeamProfileModal(true)}
          />
        </div>
      </div>
      <CustomModal
        open={sureModal}
        onClose={() => setSureModal(false)}
        style={{ height: 150, width: 350, borderRadius: 5, p: 4 }}
        childProps={{
          onclick: () =>
            createSelfProfile(
              companyProfile,
              showError,
              showSuccess,
              setLoading
            ),
        }}
      >
        <SellfProfileSure
          onClose={() => setSureModal(false)}
          onClick={() =>
            createSelfProfile(
              companyProfile,
              showError,
              showSuccess,
              setLoading
            )
          }
        />
      </CustomModal>

      <CustomModal
        open={creatTeamProfileModal}
        onClose={() => setTeamProfileModal(false)}
        style={{ height: 250, width: 300, borderRadius: 5, p: 4 }}
      >
        <CreateTeamProfile
          onClose={() => setSureModal(false)}
          setLoading={setLoading}
          loading={loading}
        />
      </CustomModal>

      {loading && <Loading bgColor="#F7F7F8" />}
    </div>
  );
};

export default MyProfilesContent;
