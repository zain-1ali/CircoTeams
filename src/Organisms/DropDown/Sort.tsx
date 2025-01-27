import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Button from "../../Atoms/Button";
// import Radio from "../../Atoms/Radio";
import Text from "../../Atoms/Text";
import { useState } from "react";
import { sortArrayByKey } from "../../Services/Constants";

const Sort: React.FC<{
  onClose: () => void;
  array: any[];
  keyName: string;
  setData: any;
}> = ({ onClose, array, keyName, setData }) => {
  const sortData = [
    { name: "Alphabetical (A - Z)", value: "a to z" },
    { name: "Alphabetical (Z - A)", value: "z to a" },
    { name: "Date Added (Latest)", value: "newest" },
    { name: "Date Added (Oldest)", value: "oldest" },
  ];

  const [selectedSortType, setSelectedSortType] = useState<string>("");

  //   const membersUid = selectedMemberRows?.map((member) => member?.id);
  //     console.log(selectedTeamId);

  return (
    <>
      <div className="h-[270px] w-[270px] p-3 rounded-[18px] overflow-hidden">
        <Text classes="text-[14px] font-[700]" text="Sort by:" />
        <div className="w-[100%] h-[160px] overflow-y-scroll">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={(e) => setSelectedSortType(e.target.value)}
            value={selectedSortType}
          >
            {sortData?.map((sort, i) => {
              return (
                <FormControlLabel
                  key={i}
                  value={sort.value}
                  control={<Radio />}
                  label={sort.name}
                />
              );
            })}
          </RadioGroup>
        </div>

        <div className="w-[100%] flex flex-col justify-center items-center mt-3">
          <Button
            text="Apply"
            btnClasses="bg-primary rounded-full w-[95%] h-[35px] text-white font-[700] text-[13px]"
            onClick={() =>
              sortArrayByKey(array, keyName, selectedSortType, setData)
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

export default Sort;
