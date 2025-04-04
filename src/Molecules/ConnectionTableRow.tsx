import { useState, useEffect } from "react";
import Checkbox from "../Atoms/Checkbox";
import Text from "../Atoms/Text";
import ImageWithTextCell from "../Molecules/ImageWithTextCell";
import ConfirmModal from "../Organisms/Modal/ConfirmModal";
import { TableRowProps } from "../Types";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import DownloadCsv from "../Organisms/DownloadCsv";
import ConnectionModal from "../Molecules/ConnectionModal";
import {
  timestampToDate,
  getSingleChildFromDb,
  removeSingleChildFromDb,
} from "../Services/Constants";

const ConnectionTableRow: React.FC<TableRowProps> = ({
  data,
  handleRowSelect,
  isSelected,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const [profileData, setProfileData] = useState<any>({});

  const getProfileData = (data: any) => {
    if (data) {
      setProfileData(Object.values(data)?.[0]);
    }
  };
  useEffect(() => {
    if (data?.userid) {
      getSingleChildFromDb("User/", "id", data?.userid, getProfileData);
    }
  }, [data?.userid]);

  const memberName = `${profileData?.firstName ?? ""} ${
    profileData?.lastName ?? ""
  }`;
  const formatedDate = timestampToDate(data?.date);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    // event.stopPropagation();
    if (anchorEl) {
      // setModalOpen(false);
    }

    setAnchorEl(null);
  };

  const handleViewClick = () => {
    setModalOpen(true);
    handleMenuClose();
    console.log("working");
  };
  const handleSelectedItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModalOpen(false);
    handleRowSelect(data, e.target.checked);
  };

  // const handleModalSubmit = () => {
  //   console.log("callback");
  // };
  const deleteRowCallback = () => {
    console.log("deleteRowCallback");
  };
  const handleRemoveConnection = () => {
    removeSingleChildFromDb("Contacts/", data?.id, deleteRowCallback);
  };
  // console.log(data);
  

  return (
    <>
      <div
        className="w-[100%] h-[60px] rounded-[12px] mt-3 bg-[#f9f9f9] flex items-center justify-between pl-4 pr-4"
        // onClick={() => handleViewClick()}
      >
        <Checkbox
          checkValue={isSelected}
          onChange={handleSelectedItem}
          classes="h-[20px] w-[20px] border border-[#B3B3BF] rounded-[2px]"
        />

        <ImageWithTextCell
          containerClass="flex w-[230px] items-center  gap-3 pl-10"
          isAdmin={false}
          data={{
            text: data?.name,
            imageUrl: "",
          }}
        />
        <Text
          text={memberName}
          classes="font-[600] text-[#939393] text-[12px] w-[150px] pl-7"
        />
        <Text
          text={formatedDate}
          classes="font-[600] text-[#939393] text-[12px] w-[200px] p-6"
        />
        <Text
          text={data?.message}
          classes="font-[600] text-[#939393] text-[12px] w-[250px] h-[20px] overflow-hidden"
        />

        {/* Three Dots Icon */}
        <IconButton onClick={handleMenuOpen}>
          <HiOutlineDotsHorizontal className="cursor-pointer" />
        </IconButton>

        {/* Options Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleMenuClose()}
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "14px", // Tailwind equivalent of rounded-lg
              width: "110px",
            },
          }}
        >
          <MenuItem
            onClick={() => handleViewClick()}
            sx={{
              fontSize: "14px",
              textAlign: "center",
              justifyContent: "center", // Ensures the text is fully centered
            }}
          >
            View
          </MenuItem>
          <hr className="border-t border-gray-200" />
          <MenuItem
            onClick={() => {}}
            sx={{
              fontSize: "14px",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <DownloadCsv data={[data]} />
          </MenuItem>
          <hr className="border-t border-gray-200" />
          <MenuItem
            onClick={() => {
              setDeleteModal(true), handleMenuClose();
            }}
            sx={{
              fontSize: "14px",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            Remove
          </MenuItem>
        </Menu>
      </div>

      {/* Connection Modal */}
      {/* <ConnectionModal
        action="update"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        data={{ ...data, memberName, formatedDate }}
      /> */}
      <ConnectionModal
        action="update"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        data={{ ...data, memberName, formatedDate }}
      />
      <ConfirmModal
        open={deleteModal}
        onClose={() => setDeleteModal(false)}
        onClick={handleRemoveConnection}
        confirmText="Are you sure to remove this connection ?"
      />
    </>
  );
};

export default ConnectionTableRow;
