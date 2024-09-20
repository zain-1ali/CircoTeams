import teamsLogo from "../assets/images/teamsLogo.png";
import themes from "../assets/images/themes3.png";
import Button from "../Atoms/Button";
// import people from "../assets/images/people.png";
import Image from "../Atoms/Image";

const TeamsGetStarted = () => {
  return (
    <div className="w-[900px] h-[100%] flex flex-col items-center relative justify-center pt-3 pb-3">
      <Image src={teamsLogo} classes="w-[145px] h-[46px] object-cover" />

      <Image src={themes} classes="w-[660px] h-[488px]  object-contain" />
      <Button
        btnClasses="w-[266px] h-[55px] bg-[#2B6EF6] rounded-full font-[700] text-[15px] text-white"
        onClick={() => {}}
        text="Get Started With Circo Team"
      />
    </div>
  );
};

export default TeamsGetStarted;
