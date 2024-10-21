import { useAppSelector } from "../Hooks/reduxHooks";
import Highlighted from "../Molecules/SocialLinks/Highlighted";
import PrimaryLink from "../Molecules/SocialLinks/PrimaryLink";
import { motion } from "framer-motion";
import Weblink from "../Molecules/SocialLinks/Weblink";


export const SocialLinks = () => {
  const starterLinks = useAppSelector((state) => state.authLinkHandler.links);
  const socialLink = useAppSelector((state) => state?.socialLinkHandler.link);
  console.log(socialLink?.name);

  return (
    <div className="w-[100%] flex justify-center mt-4">
      <div className="w-[90%] flex justify-evenly flex-wrap  items-center gap-y-2">
        {starterLinks?.map((link) => {
          return (
            link.value && (
              <motion.div
                initial={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <PrimaryLink {...link} />;
              </motion.div>
            )
          );
        })}

        {socialLink?.linkID === 999 ? (
          <Weblink {...socialLink} />
        ) : socialLink?.isLinkHighlighted ? (
          <div className="w-[100%]">
            <motion.div
              initial={{ opacity: 0, translateY: 10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {socialLink?.name && <Highlighted {...socialLink} />}
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {socialLink?.name && <PrimaryLink {...socialLink} />}
          </motion.div>
        )}
      </div>
    </div>
  );
};
