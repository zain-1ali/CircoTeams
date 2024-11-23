import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Button from "../../Atoms/Button";
// import Radio from "../../Atoms/Radio";
import Text from "../../Atoms/Text";
import { useState } from "react";
import { reassignMembersToSubTeam } from "../../Services/SubTeamsServices";
import useToastNotifications from "../../Hooks/useToastNotification";

const ReasignTeam: React.FC<{
  subteams: any[];
  selectedMemberRows: any[];
  crntSubteam: any;
  onClose: () => void;
}> = ({ subteams, selectedMemberRows, crntSubteam, onClose }) => {
  const [selectedTeamId, setSelectedTeamId] = useState<string>("");
  const [selectedTeam, setSelectedTeam] = useState<object>({});

  const handleSelectTeam = (subteamId: string) => {
    setSelectedTeamId(subteamId);
    const selectedSubTeam = subteams?.find((elm) => {
      return elm?.id === subteamId;
    });
    setSelectedTeam(selectedSubTeam);
  };

  const membersUid = selectedMemberRows?.map((member) => member?.id);
  //   console.log(selectedTeamId);

  const [loading, setLoading] = useState<boolean>(false);

  console.log(loading);

  const { showError, showSuccess } = useToastNotifications();

  return (
    <>
      <div className="h-[270px] w-[270px] p-3 rounded-[18px] overflow-hidden">
        <Text classes="text-[14px] font-[700]" text="Reassign to:" />
        <div className="w-[100%] h-[160px] overflow-y-scroll">
          {/* <div className="w-[100%] flex mt-4 gap-2">
            <Radio classes="h-[20px] w-[20px]" />
            <Text
              text="Marketing"
              classes="text-[15px] font-[500] text-[#636363]"
            />
          </div>
          <div className="w-[100%] flex mt-4 gap-2">
            <Radio classes="h-[20px] w-[20px]" />
            <Text
              text="Marketing"
              classes="text-[15px] font-[500] text-[#636363]"
            />
          </div>
          <div className="w-[100%] flex mt-4 gap-2">
            <Radio classes="h-[20px] w-[20px]" />
            <Text
              text="Marketing"
              classes="text-[15px] font-[500] text-[#636363]"
            />
          </div>
          <div className="w-[100%] flex mt-4 gap-2">
            <Radio classes="h-[20px] w-[20px]" />
            <Text
              text="Marketing"
              classes="text-[15px] font-[500] text-[#636363]"
            />
          </div>

          <div className="w-[100%] flex mt-4 gap-2">
            <Radio classes="h-[20px] w-[20px]" />
            <Text
              text="Marketing"
              classes="text-[15px] font-[500] text-[#636363]"
            />
          </div>

          <div className="w-[100%] flex mt-4 gap-2">
            <Radio classes="h-[20px] w-[20px]" />
            <Text
              text="Marketing"
              classes="text-[15px] font-[500] text-[#636363]"
            />
          </div>

          <div className="w-[100%] flex mt-4 gap-2">
            <Radio classes="h-[20px] w-[20px]" />
            <Text
              text="Marketing"
              classes="text-[15px] font-[500] text-[#636363]"
            />
          </div> */}

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
          </RadioGroup>
        </div>

        <div className="w-[100%] flex flex-col justify-center items-center mt-3">
          <Button
            text="Reassign"
            btnClasses="bg-primary rounded-full w-[95%] h-[35px] text-white font-[700] text-[13px]"
            onClick={() =>
              reassignMembersToSubTeam(
                membersUid,
                selectedTeam,
                crntSubteam,
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
        </div>
      </div>
    </>
  );
};

export default ReasignTeam;
