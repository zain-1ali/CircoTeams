import teamsLogo from "../assets/images/teamsLogo.png";
import themes from "../assets/images/themes3.png";
// import people from "../assets/images/people.png";
import Image from "../Atoms/Image";
const TeamsGetStarted = () => {
  return (
    <div className="w-[900px] h-[100%] flex flex-col items-center relative justify-center ">
      <Image src={teamsLogo} classes="w-[145px] h-[46px] object-cover" />

      <Image src={themes} classes="w-[95%] h-[502px]  object-cover" />
    </div>
  );
};

export default TeamsGetStarted;
