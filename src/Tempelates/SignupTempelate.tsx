import AuthSidebar from "../Organisms/AuthSidebar";
import AuthRightBar from "../Organisms/AuthRightBar";

const SignupTempelate = () => {
  return (
    <div className="w-screen h-screen flex bg-[#F7F7F8]">
      <AuthSidebar isSignin={false} />
      <AuthRightBar />
    </div>
  );
};

export default SignupTempelate;
