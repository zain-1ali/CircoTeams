import AuthRightBar from "../Organisms/AuthRightBar";
import AuthSidebar from "../Organisms/AuthSidebar";

const SigninTempelate = () => {
  return (
    <div className="w-screen h-screen flex bg-[#F7F7F8]">
      <AuthSidebar isSignin={true} />
      <AuthRightBar />
    </div>
  );
};

export default SigninTempelate;
