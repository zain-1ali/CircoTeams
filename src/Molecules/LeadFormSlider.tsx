import { Box, Slide } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "../Hooks/reduxHooks";
import { toggleLeadMode } from "../Redux/ProfileSlice";

const LeadFormSlider = () => {
  const style = {
    position: "absolute",
    // top: "57%",
    // left: "70%",
    right: "0%",
    // transform: "translate(-50%, -50%)",
    bottom: 1,
    // maxWidth: ,
    width: "95%%",
    height: 420,
    display: "flex",
    justifyContent: "center",
    zIndex: 30,

    // marginRight: screenWidth >= 900 ? "20px" : "0px",

    // boxShadow: 24,

    outline: "none",
    // borderRadiusTop: "18px",
    // p: "32px",
  };

  const profileData = useAppSelector((state) => state.profileHandler);

  const dispatch = useAppDispatch();

  return (
    <Slide
      in={profileData?.leadMode}
      direction="up"
      timeout={{ appear: 500, enter: 500, exit: 500 }}
    >
      <Box sx={style}>
        <div
          className={`h-[100%] w-[100%] overflow-y-scroll scrollbar-hide flex flex-col rounded-t-[30px] items-center  bg-white shadow-2xl`}
          //   style={{ marginRight: screenWidth >= 900 ? "15px" : "0px" }}
        >
          <div className="w-[92%] flex justify-end mt-[15px]">
            <RxCross1
              className="text-xl cursor-pointer"
              onClick={() => {
                dispatch(toggleLeadMode());
              }}
            />
          </div>
          <>
            <div
              className="w-[100%]  flex justify-center"
              style={{
                // fontFamily: "Inter",
                fontSize: "26px",
                fontWeight: "600",
              }}
            >
              <p className={`w-[85%] text-center text-[16px]`}>
                Share your contact details with
                <span className="ml-[5px] text-[#3B57EE]">
                  {/* {userdata?.firstName ? userdata?.firstName : userdata?.name} */}
                  {profileData?.firstName}
                </span>
              </p>
            </div>

            <div className="w-[90%]  mt-[0px] ">
              <div className="mt-4">
                {/* <p
            className="ml-2 text-[#3F3939]"
            style={{
              fontFamily: "Inter",
              fontWeight: "300",
              fontSize: "16px",
            }}
          >
            Full Name<span className="text-[red]">*</span>
          </p> */}
                <input
                  type="text"
                  placeholder="*Your Name"
                  className="outline-none p-2 w-[100%]  border rounded-[16px] h-[52px] mt-[2px]"
                  // onChange={(e) => setData({ ...data, name: e.target.value })}
                  // value={data.name}
                />
              </div>

              <div className="mt-4">
                {/* <p
            className="ml-2 text-[#3F3939]"
            style={{
              fontFamily: "Inter",
              fontWeight: "300",
              fontSize: "16px",
            }}
          >
            Phone Number<span className="text-[red]">*</span>
          </p> */}
                <input
                  type="text"
                  placeholder="*Phone"
                  className="outline-none p-2 w-[100%]  border rounded-[16px] h-[52px] mt-[2px]"
                />
              </div>

              <div className="mt-4">
                {/* <p
            className="ml-2 text-[#3F3939]"
            style={{
              fontFamily: "Inter",
              fontWeight: "300",
              fontSize: "16px",
            }}
          >
            Email<span className="text-[red]">*</span>
          </p> */}

                <input
                  type="text"
                  placeholder="*Email"
                  className="outline-none p-2 w-[100%]  border rounded-[16px] h-[52px] mt-[2px]"
                />
              </div>

              <div>
                <div className="mt-4 w-[100%] flex justify-between">
                  <div className="w-[47%] ">
                    {/* <p
                className="ml-2 text-[#3F3939]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                Company
              </p> */}
                    <input
                      type="text"
                      placeholder="Company"
                      className="outline-none p-2 w-[100%]  border rounded-[16px] h-[52px] mt-[2px]"
                    />
                  </div>
                  <div className="w-[47%] ">
                    {/* <p
                className="ml-2 text-[#3F3939]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >g
                Title
              </p> */}
                    <input
                      type="text"
                      placeholder="Job title"
                      className="outline-none p-2 w-[100%]  border rounded-[16px] h-[52px] mt-[2px]"
                    />
                  </div>
                </div>

                {/* <div className="mt-2">
            <p className="ml-2">Company</p>
            <input
              type="text"
              placeholder="Enter Company"
              className="outline-none p-2 w-[100%]  border rounded-lg h-[57px] mt-[2px]"
              onChange={(e) =>
                setData({ ...data, company: e.target.value })
              }
              value={data.company}
            />
          </div> */}
              </div>

              <div className="w-[100%] flex justify-center mt-[20px]">
                <div
                  className={`w-[100%] border rounded-[18px]  h-[60px] bg-[#2B6EF6] flex justify-center items-center text-white cursor-pointer `}
                  // onClick={() => addData()}
                  style={{
                    // fontFamily: "Inter",
                    fontSize: "20px",
                    fontWeight: "400",
                  }}
                >
                  Share
                </div>
              </div>
            </div>
          </>
        </div>
      </Box>
    </Slide>
  );
};

export default LeadFormSlider;
