import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Button from "../../Atoms/Button";
// import Radio from "../../Atoms/Radio";
import Text from "../../Atoms/Text";
import { useState } from "react";
// import {
//   reassignMembersTotemplate,
//   reassignMembersTotemplateV2,
// } from "../../Services/templatesServices";
import useToastNotifications from "../../Hooks/useToastNotification";
import { reassignMembersToTemplateV2 } from "../../Services/TemplatesServices";

const ReasignTemplate: React.FC<{
  templates: any[];
  selectedMemberRows: any[] | undefined;
  crntTemplate: any;
  onClose: () => void;
}> = ({ templates, selectedMemberRows, crntTemplate, onClose }) => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>("");
  const [selectedTemplate, setSelectedTemplate] = useState<object>({});
  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplateId(templateId);
    const selectedtemplate = templates?.find((elm) => {
      return elm?.id === templateId;
    });
    setSelectedTemplate(selectedtemplate);
  };

//   const membersUid = selectedMemberRows?.map((member) => member?.id);
//     console.log(selectedTeamId);

  const [loading, setLoading] = useState<boolean>(false);

  console.log(loading);

  const { showError, showSuccess } = useToastNotifications();

  return (
    <>
      <div className="h-[270px] w-[270px] p-3 rounded-[18px] overflow-hidden">
        <Text classes="text-[14px] font-[700]" text="Reassign to:" />
        <div className="w-[100%] h-[160px] overflow-y-scroll">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={(e) => handleSelectTemplate(e.target.value)}
            value={selectedTemplateId}
          >
            {templates?.map((template, i) => {
              return (
                <FormControlLabel
                  key={i}
                  value={template?.id}
                  control={<Radio />}
                  label={template?.profileName}
                  style={{
                    display:
                      template?.id === crntTemplate?.id ? "none" : undefined,
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
              crntTemplate
                ? () => {}
                : //   reassignMembersTotemplate(
                  //       membersUid,
                  //       selectedTeam,
                  //       crnttemplate,
                  //       showError,
                  //       showSuccess,
                  //       setLoading
                  //     )
                  reassignMembersToTemplateV2(
                    selectedMemberRows,
                    selectedTemplate,
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

export default ReasignTemplate;
