import MyProfilesContent from "../Organisms/MyProfilesContent";
import Sidebar from "../Organisms/Sidebar";

const MyProfilesTempelate = () => {
  
  return (
    <div className="h-[100vh] w-screen flex">
      <Sidebar />
      <MyProfilesContent />
    </div>
  );
};

export default MyProfilesTempelate;
