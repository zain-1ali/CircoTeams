import AuthRightBar from "../Organisms/AuthRightBar";
import AuthSidebar from "../Organisms/AuthSidebar";

const ResetPasswordTempelate = () => {
  return (
    <div className="w-screen h-screen flex bg-[#F7F7F8]">
      <AuthSidebar isSignin={false} isReset={true} />
      <AuthRightBar />
    </div>
  );
};

export default ResetPasswordTempelate;
