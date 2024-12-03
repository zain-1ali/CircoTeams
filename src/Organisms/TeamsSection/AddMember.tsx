import { useCallback, useEffect, useState } from "react";
import Button from "../../Atoms/Button";
import Input from "../../Atoms/Input";
import Text from "../../Atoms/Text";
import { RxCross2 } from "react-icons/rx";
import useToastNotifications from "../../Hooks/useToastNotification";
import { createMultipleProfiles } from "../../Services/ProfileServices";

const AddMember = () => {
  const [email, setEmail] = useState<string>("");
  const [allEmails, setAllEmails] = useState<string[]>([]);
  const { showSuccess, showError } = useToastNotifications();
  const companyId: string | null = localStorage.getItem("circoCompanyUid");

  const pushEmail = useCallback((mail: string): void => {
    // if (!allEmails?.includes(mail)) {
    if (mail.trim()) {
      setAllEmails((prev) => [...prev, mail]);
      setEmail(""); // Clear the input after adding the email
    }
  }, []);

  const [loading, setLoading] = useState<boolean>(false);

  console.log(loading);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      if (event.code === "Space" || event.key === " ") {
        event.preventDefault();
        console.log("Spacebar pressed!");
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) return showError("Enter a valid email");
        if (!allEmails?.includes(email)) {
          pushEmail(email);
        } else {
          showError("Duplicate emails are not allowd");
        }
      }
    },
    [email, pushEmail] // Ensure the callback depends on the latest `email`
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleRemoveMailFromList = (email: string) => {
    const remainingMails = allEmails?.filter((elm) => {
      return elm != email;
    });

    setAllEmails(remainingMails);
  };

  console.log(email);

  return (
    <div className="h-[100%] w-[100%] overflow-y-scroll pb-3">
      <Text
        text="Add Members Via Emails"
        classes="font-[600] text-[18px] text-[#464646] mt-3"
      />
      <Text
        text="Add members to your team via emails. Their accounts will be automatically generated, and they can change password after logging in. If a member's email is already registered with Circo, a new team profile will be generated."
        classes="font-[500] text-[14px] text-[#A4A4A4] w-[72%]"
      />
      <div className="h-[112px] w-[72%] bg-[#F6F6F6] rounded-[18px] mt-6 pt-3 pl-3 pr-3 flex justify-start gap-x-4 flex-wrap">
        {allEmails?.map((elm) => {
          return (
            <div className="h-[32px] pt-[7.5px] pb-[10px] pr-[5px] pl-[10px] border border-[#E8E8E8] bg-white rounded-[50px] flex items-center gap-1">
              <Text
                text={elm}
                classes="font-[400] text-[10px] text-[#565656]"
              />
              <RxCross2
                className="text-sm text-[#565656] cursor-pointer"
                onClick={() => handleRemoveMailFromList(elm)}
              />
            </div>
          );
        })}

        {/* <div className="h-[32px] pt-[7.5px] pb-[10px] pr-[10px] pl-[10px] border border-[#E8E8E8] bg-white rounded-[50px] ">
          <Text
            text="michael.cohen@company.com"
            classes="font-[400] text-[10px] text-[#565656]"
          />
        </div>

        <div className="h-[32px] pt-[7.5px] pb-[10px]  pr-[10px] pl-[10px] border border-[#E8E8E8] bg-white rounded-[50px] ">
          <Text
            text="jenna.root@company.com"
            classes="font-[400] text-[10px] text-[#565656]"
          />
        </div> */}
        {/* <div style={{ width: `${50 + email?.length}px` }} className="border"> */}
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          classes="outline-none h-[30px] bg-transparent"
          style={{ width: `${40 + email?.length * 8}px` }}
        />
        {/* </div> */}
      </div>

      <div className="w-[72%] flex justify-end mt-3">
        <Button
          btnClasses="w-[163px] h-[43px] bg-[#2B6EF6] rounded-[50px] font-[700] text-[16px] text-white"
          text="Add Members"
          onClick={() =>
            createMultipleProfiles(
              allEmails,
              showError,
              showSuccess,
              setLoading,
              companyId
            )
          }
        />
      </div>

      <div className="flex justify-between w-[72%] items-center mt-5">
        <div className="w-[45%] h-[1px] bg-[#BEBEBE]"></div>
        <Text classes="font-[600] text-[16px] text-[#BEBEBE]" text="or" />
        <div className="w-[45%] h-[1px] bg-[#BEBEBE]"></div>
      </div>

      <Text
        text="Add Members Via CSV"
        classes="font-[600] text-[18px] text-[#464646] mt-3"
      />
      <Text
        text="CSV file needs to have columns with: Email (required), Name (required), Profile Image link."
        classes="font-[500] text-[14px] text-[#A4A4A4] w-[72%] mt-[2px]"
      />

      <Text
        text="Download CSV template"
        classes="font-[500] text-[12px] text-[#2B6EF6] underline cursor-pointer mt-[2px]"
      />

      <div className="h-[158px] w-[72%]  rounded-[18px] border border-[#E4E4E4] border-dashed  flex flex-col justify-center items-center mt-5">
        <span className="flex gap-[6px]">
          <Text
            classes="font-[500] text-[17px] text-[#2B6EF6]"
            text="Select CSV or Excel  file"
          />
          <Text classes="font-[500] text-[17px]" text=" to upload" />
        </span>
        <Text
          classes="font-[500] text-[17px] text-[#9B9B9B] mt-1"
          text="Must be .csv, .xls, or .xlsx file"
        />
      </div>
      <div className="w-[72%] flex justify-end mt-3">
        <Button
          btnClasses="w-[163px] h-[43px] bg-[#2B6EF6] rounded-[50px] font-[700] text-[16px] text-white"
          text="Add Members"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default AddMember;
