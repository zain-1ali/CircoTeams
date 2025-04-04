import { useState } from "react";
import AddSingleLink from "./LinkModalChilds/AddSingleLink";
import AllLinks from "./LinkModalChilds/AllLinks";
import AddWeblink from "./LinkModalChilds/AddWeblink";

interface LinkModalProps {
  id: any; // Replace `any` with the actual type if known (e.g., `string`)
}

const LinkModal: React.FC<LinkModalProps> = ({ id }) => {

  interface linkModeTypes {
    allLinksMode: boolean;
    addLinkMode: boolean;
    webLinkMode: boolean;
  }
  const [linkModes, setLinkMode] = useState<linkModeTypes>({
    allLinksMode: true,
    addLinkMode: false,
    webLinkMode: false,
  });

  const changeLinkMode = (type: string) => {
    if (type === "allLinks") {
      setLinkMode({
        allLinksMode: true,
        addLinkMode: false,
        webLinkMode: false,
      });
    } else if (type === "addLink") {
      setLinkMode({
        allLinksMode: false,
        addLinkMode: true,
        webLinkMode: false,
      });
    } else if (type === "webLink") {
      setLinkMode({
        allLinksMode: false,
        addLinkMode: false,
        webLinkMode: true,
      });
    }
  };

  return (
    <div className="h-[100%] w-[100%]">
      {linkModes?.allLinksMode && <AllLinks changeLinkMode={changeLinkMode} />}
      {linkModes?.addLinkMode && (
        <AddSingleLink changeLinkMode={changeLinkMode} id={id} />
      )}
      {linkModes?.webLinkMode && <AddWeblink changeLinkMode={changeLinkMode} id={id} />}
    </div>
  );
};

export default LinkModal;
