import PrimaryLink from "../Molecules/SocialLinks/PrimaryLink";

export const SocialLinks = () => {
  return (
    <div className="w-[100%] flex justify-center mt-4">
      <div className="w-[90%] flex justify-evenly flex-wrap  items-center gap-y-2 ">
        <PrimaryLink />
        <PrimaryLink />
        <PrimaryLink />
      </div>
    </div>
  );
};
