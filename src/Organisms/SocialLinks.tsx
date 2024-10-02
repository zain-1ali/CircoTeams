import { useAppSelector } from "../Hooks/reduxHooks";
import PrimaryLink from "../Molecules/SocialLinks/PrimaryLink";

export const SocialLinks = () => {
  const starterLinks = useAppSelector((state) => state.authLinkHandler.links);
  return (
    <div className="w-[100%] flex justify-center mt-4">
      <div className="w-[90%] flex justify-evenly flex-wrap  items-center gap-y-2 ">
        {starterLinks?.map((link) => {
          return link.value && <PrimaryLink {...link} />;
        })}
      </div>
    </div>
  );
};
