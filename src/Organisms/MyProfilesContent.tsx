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
import Qr from "./Modal/Qr";
import { useAppDispatch } from "../Hooks/reduxHooks";
import { setProfileDesign } from "../Redux/ProfileSlice";
import { useNavigate } from "react-router-dom";

const MyProfilesContent = () => {
  const companyId: string | null = localStorage.getItem("circoCompanyUid");
  const isAdmin: string | null = localStorage.getItem("isAdmin") || "true";
  const [companyProfile, setCompanyProfile] = useState<any>({});
  const [sureModal, setSureModal] = useState<boolean>(false);
  const [qrModal, setQrModal] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const [creatTeamProfileModal, setTeamProfileModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  console.log(loading);
  const [allProfiles, setAllProfiles] = useState<any>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
    dispatch(setProfileDesign({ whiteTextAndBorder: false }));
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

  const handleQrModal = (id: string) => {
    setQrModal(true);
    setSelectedId(id);
  };

  const returnProfilesLenth = (type: string) => {
    if (type === "self") {
      return (
        allProfiles?.filter((profile: any) => profile?.profileType === "self")
          .length + 1
      );
    } else {
      return allProfiles?.filter(
        (profile: any) => profile?.profileType === "team"
      ).length;
    }
  };

  return (
    <div className="h-[100%] w-[83%] bg-[#F7F7F8] flex justify-center relative ">
      <div className="w-[95%]  h-[100%] overflow-y-scroll pb-2">
        <div className="flex  mt-[30px] gap-2">
          <Text text="My Profiles" classes="font-[700] text-[24px]" />
          <Text
            text={`(${returnProfilesLenth("self")})`}
            classes="font-[600] text-[12px] text-[#B5B5B5] mt-3"
          />
        </div>

        <div className="w-[100%] flex justify-start gap-[8%] mt-3 flex-wrap gap-y-6">
          {companyProfile?.id && (
            <UserProfileCard
              isCreatePrfl={false}
              profile={companyProfile}
              handleQrModal={handleQrModal}
            />
          )}

          {allProfiles?.map((profile: any, i: any) => {
            if (profile?.profileType === "self") {
              return (
                <UserProfileCard
                  isCreatePrfl={false}
                  profile={profile}
                  key={i}
                  handleQrModal={handleQrModal}
                />
              );
            }
          })}

          <UserProfileCard
            isCreatePrfl={true}
            onClick={() => {
              companyProfile?.isProVersion
                ? setSureModal(true)
                : allProfiles?.filter((profile: any) => profile.profileType === "self").length > 2
                ? navigate("/plans") : setSureModal(true);
            }}
          />
        </div>

        {isAdmin === "true" && (
          <>
            {" "}
            <div className="flex  mt-[30px] gap-2">
              <Text text="My Team Profile" classes="font-[700] text-[24px]" />
              <Text
                text={`(${returnProfilesLenth("team")})`}
                classes="font-[600] text-[12px] text-[#B5B5B5] mt-3"
              />
            </div>{" "}
            <div className="w-[100%] flex justify-start gap-[8%] gap-y-5 mt-3 flex-wrap">
              {allProfiles?.map((profile: any, i: any) => {
                if (profile?.profileType === "team") {
                  return (
                    <UserProfileCard
                      isCreatePrfl={false}
                      profile={profile}
                      key={i}
                      handleQrModal={handleQrModal}
                    />
                  );
                }
              })}
              <UserProfileCard
                isCreatePrfl={true}
                onClick={() => {
                  companyProfile?.isTeamsProVersion
                    ? setTeamProfileModal(true)
                    : allProfiles?.filter((profile: any) => profile.profileType === "team").length > 0
                    ? navigate("/plans")
                    : setTeamProfileModal(true);
                }}
              />
            </div>
          </>
        )}
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
        style={{ height: 250, width: 320, borderRadius: 5, p: 2 }}
      >
        <CreateTeamProfile
          onClose={() => setSureModal(false)}
          setLoading={setLoading}
          loading={loading}
        />
      </CustomModal>

      <CustomModal
        open={qrModal}
        onClose={() => setQrModal(false)}
        style={{ height: "300px", width: "300px", borderRadius: 5, p: 4 }}
      >
        <Qr userId={selectedId} />
      </CustomModal>

      {loading && <Loading bgColor="#F7F7F8" />}
    </div>
  );
};

export default MyProfilesContent;
