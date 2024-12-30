// import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
// import Button from "../../Atoms/Button";
import { useNavigate } from "react-router-dom";
import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";
import plchldr from "../../assets/images/profilePlchldr.png";
// import { useState } from "react";

const Profiles: React.FC<{
  teamProfiles: any[];
  selfProfiles: any[] | undefined;
}> = ({ teamProfiles, selfProfiles }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-[270px] w-[270px] p-3 rounded-[18px] overflow-hidden">
        <div className="w-[100%] h-[260px] overflow-y-scroll">
          <Text classes="text-[14px] font-[700]" text="My Profiles" />
          {selfProfiles?.map((profile: any, i: any) => {
            return (
              <div
                className="w-[100%] flex mt-4 gap-2 cursor-pointer"
                key={i}
                onClick={() => navigate(`/edit/${profile?.id}`)}
              >
                <Image
                  classes="h-[40px] w-[40px] rounded-[100%]"
                  src={profile?.profileUrl || plchldr}
                />
                <Text
                  text={profile?.firstName + " " + profile?.lastName}
                  classes="text-[15px] font-[500] text-[#636363]"
                />
              </div>
            );
          })}

          <Text classes="text-[14px] font-[700] mt-3" text="Team Profiles" />
          {teamProfiles?.map((profile: any, i: any) => {
            return (
              <div
                className="w-[100%] flex mt-4 gap-2 cursor-pointer"
                key={i}
                onClick={() => navigate(`/edit/${profile?.id}`)}
              >
                <Image
                  classes="h-[40px] w-[40px]"
                  src={profile?.profileUrl || plchldr}
                />
                <Text
                  text={profile?.firstName + " " + profile?.lastName}
                  classes="text-[15px] font-[500] text-[#636363]"
                />
              </div>
            );
          })}

          {/* 
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            // defaultValue="female"
            name="radio-buttons-group"
            onChange={(e) => handleSelectTeam(e.target.value)}
            value={selectedTeamId}
          >
            {subteams?.map((subteam, i) => {
              return (
                <FormControlLabel
                  key={i}
                  value={subteam?.id}
                  control={<Radio />}
                  label={subteam?.name}
                  style={{
                    display:
                      subteam?.id === crntSubteam?.id ? "none" : undefined,
                  }}
                />
              );
            })}
          </RadioGroup> */}
        </div>

        {/* <div className="w-[100%] flex flex-col justify-center items-center mt-3">
          <Button
            text="Reassign"
            btnClasses="bg-primary rounded-full w-[95%] h-[35px] text-white font-[700] text-[13px]"
            onClick={() =>
              crntSubteam
                ? reassignMembersToSubTeam(
                    membersUid,
                    selectedTeam,
                    crntSubteam,
                    showError,
                    showSuccess,
                    setLoading
                  )
                : reassignMembersToSubTeamV2(
                    selectedMemberRows,
                    selectedTeam,
                    showError,
                    showSuccess,
                    setLoading
                  )
            }
          />
          <Button
            text="Cancel"
            btnClasses="w-[95%] h-[30px] text-[#808080] font-[500] text-[12px]"
            onClick={() => onClose()}
          />
        </div> */}
      </div>
    </>
  );
};

export default Profiles;
