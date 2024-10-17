import React from "react";
import { Link } from "../../Types";
import { motion } from "framer-motion";
import Highlighted from "./Highlighted";
import PrimaryLink from "./PrimaryLink";
import ButtonLink from "./weblinks/Button";
import Graphical from "./weblinks/Graphical";

const Weblink: React.FC<Link> = (socialLink) => {
  return (
    <div
      className={`${
        socialLink.style != "style1" || socialLink.isLinkHighlighted
          ? "w-[100%]"
          : null
      }`}
    >
      {socialLink?.isLinkHighlighted ? (
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
          {socialLink?.style === "style1" && <PrimaryLink {...socialLink} />}
          {socialLink?.style === "style2" && <ButtonLink />}
          {socialLink?.style === "style3" && <Graphical />}
        </motion.div>
      )}
    </div>
  );
};

export default Weblink;
