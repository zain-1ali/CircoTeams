import React, { useState, useRef } from "react";
import { Modal, Box } from "@mui/material";
import Text from "../Atoms/Text";
import Button from "../Atoms/Button";
import InputWithLabel from "../Molecules/InputWithLabel";
import TextareaWithLabel from "../Molecules/TextareaWithLabel";
import SelectWithLabel from "../Molecules/SelectWithLabel";
import { BsCopy } from "react-icons/bs";
import useToastNotifications from "../Hooks/useToastNotification";
import DownloadCsv from "../Organisms/DownloadCsv";
import { TbFileExport } from "react-icons/tb";
import {
  addConnection,
  updateConnection,
} from "../Services/ConnectionServices";

interface ConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  action: string;
}

const { showSuccess, showError } = useToastNotifications();

const ConnectionModal: React.FC<ConnectionModalProps> = ({
  action,
  isOpen,
  onClose,
  data,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const [connectionData, setConnectionData] = useState({
    name: data?.name || "",
    email: data?.email || "",
    job: data?.job || "",
    company: data?.company || "",
    phone: data?.phone || "",
    message: data?.message || "",
    status: data?.status || "active",
  });

  const [errors, setErrors] = useState<any>({});

  const validateForm = () => {
    let formErrors: any = {};
    if (!connectionData.name.trim()) formErrors.name = "Name is required";
    if (!connectionData.email.trim()) formErrors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(connectionData.email))
      formErrors.email = "Invalid email format";
    if (!connectionData.phone.trim()) {
      formErrors.phone = "Phone number is required";
    } else if (!/^(\+?\d{1,4}[-\s]?)?\d{10}$/.test(connectionData.phone)) {
      formErrors.phone = "Invalid phone number format";
    }
    if (!connectionData.company.trim())
      formErrors.company = "Company is required";
    if (!connectionData.job.trim()) formErrors.job = "Job title is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleUpdate = () => {
    if (validateForm()) {
      updateConnection(connectionData, data?.id, showSuccess, showError);
      onClose();
    } else {
      // showError("Please fix the validation errors");
    }
  };

  const addCallback = () => {
    setConnectionData({
      name: "",
      email: "",
      job: "",
      company: "",
      phone: "",
      message: "",
      status: "active",
    });
    onClose();
  };

  const handleAdd = () => {
    if (validateForm()) {
      addConnection(connectionData, addCallback, showSuccess, showError);
    } else {
      // showError("Please fix the validation errors");
    }
  };

  const modalStyles = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    borderRadius: "30px",
    boxShadow: 24,
    outline: "none",
    p: 4,
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={modalStyles} ref={modalRef}>
        <div className="w-full flex justify-between items-center mb-4">
          <Text
            text={action == "add" ? "Add Connection" : "Connection Info"}
            classes="font-[600] text-[18px]"
          />
          <div className="flex">
            {action === "update" && (
              <Button
                text=""
                btnClasses="w-[88px] h-[32px] rounded-[22px] text-[#808080] font-[600] text-[12px] border border-[#E1E1E1] bg-white flex justify-center items-center relative pl-4"
                onClick={() => {}}
                icon={
                  <div className="flex">
                    <TbFileExport className="absolute left-3 text-[16px]" />
                    <DownloadCsv data={[data]} />
                  </div>
                }
              />
            )}
            {action === "update" ? (
              <Button
                text="Save"
                btnClasses="w-[80px] h-[34px] rounded-[22px] ml-3 text-white font-[600] text-[12px] bg-[#2B6EF6] flex justify-center items-center relative"
                onClick={handleUpdate}
              />
            ) : (
              <Button
                text="Add"
                btnClasses="w-[80px] h-[34px] rounded-[22px] ml-3 text-white font-[600] text-[12px] bg-[#2B6EF6] flex justify-center items-center relative"
                onClick={handleAdd}
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <div className="flex justify-between w-[100%]">
            <div className="w-[48%]">
              <InputWithLabel
                type="text"
                label="Name"
                onChange={(e) =>
                  setConnectionData({ ...connectionData, name: e.target.value })
                }
                value={connectionData.name}
                inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
                labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
              />
              {errors.name && !connectionData.name && (
                <span className="text-red-500 text-xs">{errors.name}</span>
              )}
            </div>
            <div className="w-[48%]">
              <SelectWithLabel
                label="Status"
                onChange={(e) =>
                  setConnectionData({
                    ...connectionData,
                    status: e.target.value,
                  })
                }
                value={connectionData.status}
                options={[
                  { value: "active", label: "Active" },
                  { value: "inactive", label: "Inactive" },
                  // Add more options as needed
                ]}
                inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
                labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
              />

              {errors.status && (
                <span className="text-red-500 text-xs">{errors.status}</span>
              )}
            </div>
          </div>
        </div>
        {action == "update" && (
          <div className="flex justify-between w-[100%]">
            <div className="w-[48%]">
              <InputWithLabel
                type="text"
                label="Connected with"
                onChange={(e) => console.log(e)}
                value={data?.memberName}
                inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
                labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
              />
            </div>

            <div className="w-[48%]">
              <InputWithLabel
                type="text"
                label="Date"
                onChange={(e) => console.log(e)}
                value={data?.formatedDate}
                inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
                labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
              />
            </div>
          </div>
        )}

        {/* Repeat similarly for other fields like Email, Phone, etc. */}
        <div className="flex justify-between w-[100%]">
          <div className="w-[48%] relative">
            <InputWithLabel
              type="text"
              label="Email"
              onChange={(e) =>
                setConnectionData({ ...connectionData, email: e.target.value })
              }
              value={connectionData.email}
              inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
              labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
            />
            {errors.email && !connectionData.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
            {connectionData.email !== "" && (
              <BsCopy
                onClick={() => {
                  navigator.clipboard.writeText(connectionData.email);
                  showSuccess("Email copied to clipboard");
                }}
                className="ml-1 absolute top-[43px] right-[5px] cursor-pointer"
              />
            )}
          </div>
          <div className="w-[48%] relative">
            <InputWithLabel
              type="text"
              label="Phone"
              onChange={(e) =>
                setConnectionData({ ...connectionData, phone: e.target.value })
              }
              value={connectionData.phone}
              inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
              labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
            />
            {errors.phone && !connectionData.phone && (
              <span className="text-red-500 text-xs">{errors.phone}</span>
            )}
            {connectionData.phone && (
              <BsCopy
                onClick={() => {
                  navigator.clipboard.writeText(connectionData.phone);
                  showSuccess("Phone copied to clipboard");
                }}
                className="ml-1 absolute top-[43px] right-[5px] cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* Add remaining fields with validation (Company, Job Title, Message) */}
        <div className="flex justify-between w-[100%]">
          <div className="w-[48%]">
            <InputWithLabel
              type="text"
              label="Company"
              onChange={(e) =>
                setConnectionData({
                  ...connectionData,
                  company: e.target.value,
                })
              }
              value={connectionData.company}
              inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
              labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
            />
            {errors.company && !connectionData.company && (
              <span className="text-red-500 text-xs">{errors.company}</span>
            )}
          </div>
          <div className="w-[48%]">
            <InputWithLabel
              type="text"
              label="Job Title"
              onChange={(e) =>
                setConnectionData({ ...connectionData, job: e.target.value })
              }
              value={connectionData.job}
              inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
              labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
            />
            {errors.job && !connectionData.job && (
              <span className="text-red-500 text-xs">{errors.job}</span>
            )}
          </div>
        </div>

        <div>
          <TextareaWithLabel
            type="text"
            label="Note"
            onTextChange={(e) =>
              setConnectionData({ ...connectionData, message: e.target.value })
            }
            value={connectionData?.message}
            inputClasses="min-h-[70px] max-h-[90px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
            labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
          />
        </div>
      </Box>
    </Modal>
  );
};

export default ConnectionModal;
