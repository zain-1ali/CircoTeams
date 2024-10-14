import { useState, useEffect } from "react";
import Checkbox from "../Atoms/Checkbox";
import Text from "../Atoms/Text";
import ImageWithTextCell from "../Molecules/ImageWithTextCell";
import { TableRowProps } from "../Types";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ConnectionModal from "../Molecules/ConnectionModal";
import { timestampToDate, getSingleChildFromDb } from "../Services/Constants";

const ConnectionTableRow: React.FC<TableRowProps> = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [profileData, setProfileData] = useState<any>({});

  const getProfileData = (data: any) => {
    if (data) {
      setProfileData(Object.values(data)?.[0]);
    }
  };
  useEffect(() => {
    getSingleChildFromDb("User/", "id", data?.userid, getProfileData);
  }, [data?.userid]);

  const memberName = `${profileData?.firstName} ${profileData?.lastName}`;
  const formatedDate = timestampToDate(data?.date);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
// console.log(profileData);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleViewClick = () => {
    setModalOpen(true);
    handleMenuClose();
  };

  const handleModalSubmit = () => {
    console.log("callback");
  };
// console.log(data);
  return (
    <>
      <div className="w-[100%] h-[60px] rounded-[12px] mt-3 bg-[#f9f9f9] flex items-center justify-between pl-4 pr-4">
        <Checkbox
          checkValue={false}
          onChange={() => { }}
          classes="h-[20px] w-[20px] border border-[#B3B3BF] rounded-[2px]"
        />

        <ImageWithTextCell containerClass="flex w-[230px] items-center gap-3" isAdmin={false} data = {{
          text: data?.name,
          imageUrl: "",
        }} />
        <Text text={memberName} classes="font-[600] text-[#939393] text-[12px] w-[150px]" />
        <Text text={formatedDate} classes="font-[600] text-[#939393] text-[12px] w-[150px]" />
        <Text text={data?.message} classes="font-[600] text-[#939393] text-[12px] w-[300px]" />

        {/* Three Dots Icon */}
        <IconButton onClick={handleMenuOpen}>
          <HiOutlineDotsHorizontal className="cursor-pointer" />
        </IconButton>

        {/* Options Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "14px", // Tailwind equivalent of rounded-lg
              width: "110px",
            },
          }}
        >
          <MenuItem
            onClick={handleViewClick}
            sx={{
              fontSize: '14px',
              textAlign: 'center',
              justifyContent: 'center', // Ensures the text is fully centered
            }}
          >
            View
          </MenuItem>
          <hr className="border-t border-gray-200" />
          <MenuItem
            onClick={handleMenuClose}
            sx={{
              fontSize: '14px',
              textAlign: 'center',
              justifyContent: 'center',
            }}
          >
            Export
          </MenuItem>
          <hr className="border-t border-gray-200" />
          <MenuItem
            onClick={handleMenuClose}
            sx={{
              fontSize: '14px',
              textAlign: 'center',
              justifyContent: 'center',
            }}
          >
            Remove
          </MenuItem>


        </Menu>
      </div>

      {/* Connection Modal */}
      <ConnectionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleModalSubmit} data={{ ...data, memberName, formatedDate }} />
    </>
  );
};

export default ConnectionTableRow;
