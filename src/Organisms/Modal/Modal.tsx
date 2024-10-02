// components/ReusableModal.tsx
import React, { ReactNode } from "react";
import { Modal, Box } from "@mui/material";

interface ReusableModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  style: object;
  childProps?: any;
}

const CustomModal: React.FC<ReusableModalProps> = ({
  open,
  onClose,
  children,
  style,
  childProps,
}) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          ...style,
        }}
      >
        {React.cloneElement(children as React.ReactElement<any>, {
          onClose,
          ...childProps,
        })}
      </Box>
    </Modal>
  );
};

export default CustomModal;
