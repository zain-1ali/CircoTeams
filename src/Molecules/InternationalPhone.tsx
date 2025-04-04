import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { phoneInputProps } from "../Types";
import { separatePhoneNumber } from "../Services/Constants";

const InternationalPhone: React.FC<phoneInputProps> = ({
  labelClasses = "font-[400] text-[15px] w-[100%] mt-5",
  flagBtnHeight = "47px",
  flagBtnWidth = "50px",
  inputClasses = "w-[80%] h-[40px] outline-none pl-2 bg-[#F7F7F8] ml-[-2px] rounded-[4px]",
  value,
  onChange,
}) => {
  const [phone, setPhone] = useState("1");
  const [phoneNum, setPhoneNum] = useState("");
  // const valueSplit = value?.split(" ");

  console.log(value, "value");

  console.log(
    separatePhoneNumber("380098765432"),
    "separatePhoneNumber(value)"
  );

  useEffect(() => {
    // alert(value)
    if (phoneNum) {
      onChange(phone + phoneNum);
    } else {
      onChange("");
    }
  }, [phoneNum, phone]);

  useEffect(() => {
    if (value) {
      const numberObject = separatePhoneNumber(value);
      numberObject?.countryCode && setPhone(numberObject?.countryCode);
      numberObject?.phoneNumber && setPhoneNum(numberObject?.phoneNumber);
    }
  }, [value]);
  // console.log(phone);
  // console.log(value);

  return (
    <div className="">
      <style>
        {`
                /* Wrapper for the flag and custom input */
                .phone-input-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content:space-between;
                    margin-top:4px;
                }

                /* Custom container for the flag and country code */
                .custom-flag-container {
                    margin-right: 10px; /* Space between flag and input */
                }

                /* Hide the default input field */
                .react-tel-input .form-control {
                    display: none;
                    background-color:white;
                    
                }

                /* Custom input for the phone number */
                .custom-phone-input {
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    padding: 10px;
                    outline: none;
                    flex-grow: 1;
                }
                   .react-tel-input{
                   height:${flagBtnHeight};
                   width:${flagBtnWidth};
                   background-color:#F7F7F8;
                 
                   border-radius:6px;
                   display:flex;
                   justify-content:center;
                 
                   }

                   .react-tel-input .selected-flag{
                 border:none !important; 
                   background-color:#F7F7F8;
                    width:50px;
                    border-radius:6px !important;
                   }
                    .react-tel-input .flag-dropdown{
                     border:none !important; 
                     border-radius:10px;
                     
                    }

                /* Additional styling for focus state */
                .custom-phone-input:focus {
                    border-color: #007bff;
                }
                `}
      </style>
      <p className={labelClasses}>Phone Number</p>
      <div className="phone-input-wrapper">
        <div className="custom-flag-container">
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            buttonClass="mybtn"
            inputClass=""
            dropdownClass="mydrop"
          />
        </div>
        <div className="flex items-center w-[85%]">
          <div className="w-[21%] h-[40px] bg-[#F7F7F8] rounded-l-md flex justify-center items-center">
            {phone}
          </div>
          <input
            type="number"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            placeholder={
              flagBtnHeight === "47px" ? "Enter your phone number" : ""
            }
            className={inputClasses}
            //   style={{ marginLeft: "10px", border: "1px solid black" }}
          />
        </div>
      </div>
    </div>
  );
};

export default InternationalPhone;
