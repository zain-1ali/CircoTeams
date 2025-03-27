// Import contact icons
import call from "./whiteIcons/phone.svg";
import contact from "./whiteIcons/phone.svg";
import text from "./whiteIcons/text.svg";
import whatsapp from "./whiteIcons/whatsapp.svg";
import email from "./whiteIcons/email.svg";

// Import social icons
import instagram from "./whiteIcons/instagram.svg";
import facebook from "./whiteIcons/facebook.svg";
import tiktok from "./whiteIcons/tiktok.svg";
import twitter from "./whiteIcons/x.svg";
import Etsy from "./whiteIcons/etsy.svg";
import linkedin from "./whiteIcons/linkedin.svg";
import yelp from "./whiteIcons/yelp.svg";
import pinterest from "./whiteIcons/pinterest.svg";
import youtube from "./whiteIcons/youtube.svg";
import snapchat from "./whiteIcons/snapchat.svg";
import applink from "./whiteIcons/applink.svg";
import pdf from "./whiteIcons/pdf.svg";
import onlyfans from "./whiteIcons/onlyfans.svg";
import location from "./whiteIcons/location.svg";
import twitch from "./whiteIcons/twitch.svg";
import thread from "./whiteIcons/thread.svg";
import discord from "./whiteIcons/discord.svg";
import zelle from "./whiteIcons/zelle.svg";
import openSea from "./whiteIcons/openSea.svg";
import safari from "./whiteIcons/web.png";

// Import music icons
import spotify from "./whiteIcons/spotify.svg";
import applemusic from "./whiteIcons/applemusic.svg";
import embdvdo from "./whiteIcons/embdvdo.svg";

// Import payment icons
import cashapp from "./whiteIcons/cashapp.svg";
import paypal from "./whiteIcons/paypal.svg";
import venmo from "./whiteIcons/venmo.svg";
import calendly from "./whiteIcons/calendly.svg";
import reviews from "./whiteIcons/review.svg";
import text2 from "./whiteIcons/write.svg";
import paragraph from "./whiteIcons/paragraph.svg";
import gallery from "./whiteIcons/gallery.svg";
import soundcloud from "./whiteIcons/soundcloud.svg";

// Define types and interfaces
interface IconConfig {
  name: string;
  img: string;
  placeholder: string;
}

interface ReturnWhiteIconsProps {
  id: number;
  appcolor: string;
  size?: number;
}

// Define arrays for icons
export const contactIcons: IconConfig[] = [
  { name: "Call", img: call, placeholder: "Phone Number*" },
  { name: "Text", img: text, placeholder: "Phone Number*" },
  { name: "Whatsapp", img: whatsapp, placeholder: "Phone Number*" },
  { name: "Email", img: email, placeholder: "Email*" },
  { name: "Location", img: location, placeholder: "Address link from Map App*" },
];

export const socialIcons: IconConfig[] = [
  { name: "Instagram", img: instagram, placeholder: "Instagram Username*" },
  { name: "Facebook", img: facebook, placeholder: "Facebook Profile Link*" },
  { name: "Tiktok", img: tiktok, placeholder: "Tiktok Username*" },
  { name: "Twitter", img: twitter, placeholder: "Twitter Username*" },
  { name: "Linkedin", img: linkedin, placeholder: "Linkedin Profile Link*" },
  { name: "Pinterest", img: pinterest, placeholder: "Pinterest Username*" },
  { name: "Youtube", img: youtube, placeholder: "Youtube Channel Url*" },
  { name: "Snapchat", img: snapchat, placeholder: "Snapchat Username*" },
  { name: "Discord", img: discord, placeholder: "Discord Link Url*" },
  { name: "Thread", img: thread, placeholder: "Thread Link Url*" },
  { name: "Twitch", img: twitch, placeholder: "Twitch Link Url*" },
  { name: "Onlyfans", img: onlyfans, placeholder: "Onlyfans Username*" },
  { name: "Open Sea", img: openSea, placeholder: "Open Sea Link Url*" },
];

export const media: IconConfig[] = [];

export const popular: IconConfig[] = [

];

export const payment: IconConfig[] = [];

export const more: IconConfig[] = [];

export const content: IconConfig[] = [
  { name: "Spotify", img: spotify, placeholder: "Spotify Username*" },
  { name: "Apple Music", img: applemusic, placeholder: "Apple Music Profile Link*" },
  { name: "Title", img: text2, placeholder: "Title*" },
  { name: "Paragraph", img: paragraph, placeholder: "Text*" },
  { name: "Embedded Songs", img: applemusic, placeholder: "Embedded Songs Link*" },
  { name: "Embedded Video", img: embdvdo, placeholder: "Embedded Video Link*" },
  { name: "Gallery", img: gallery, placeholder: "Gallery Link*" },
  { name: "Sound Cloud", img: soundcloud, placeholder: "Sound Cloud Link*" },
  // { name: "Tiktok", img: tiktok, placeholder: "Tiktok Username*" },
  // { name: "Twitter", img: twitter, placeholder: "Twitter Username*" },
  // { name: "Linkedin", img: linkedin, placeholder: "Linkedin Profile Link*" },
  // { name: "Pinterest", img: pinterest, placeholder: "Pinterest Username*" },
  // { name: "Youtube", img: youtube, placeholder: "Youtube Channel Url*" },
  // { name: "Snapchat", img: snapchat, placeholder: "Snapchat Username*" },
  // { name: "Discord", img: discord, placeholder: "Discord Link Url*" },
];

// Function to return icons
export const returnWhiteIcons = ({
  id,
  appcolor,
  size = 20,
}: ReturnWhiteIconsProps): JSX.Element | null => {
  const iconsMap: Record<number, string> = {
    1: contact,
    2: call,
    3: email,
    4: text,
    5: whatsapp,
    6: location,
    15: snapchat,
    14: facebook,
    11: instagram,
    17: twitter,
    16: youtube,
    18: pinterest,
    13: tiktok,
    12: linkedin,
    19: onlyfans,
    22: spotify,
    24: applemusic,
    27: applemusic,
    25: embdvdo,
    29: gallery,
    28: pdf,
    31: cashapp,
    32: paypal,
    41: calendly,
    33: venmo,
    42: Etsy,
    43: yelp,
    44: applink,
    45: reviews,
    46: discord,
    47: twitch,
    48: thread,
    49: openSea,
    50: zelle,
    51: text2,
    26: paragraph,
    23: soundcloud,
    999: safari
  };

  const iconSrc = iconsMap[id];
  if (!iconSrc) return null; // Return null if the id doesn't match any key

  return (
    <img
      style={{
        height: `${size}px`,
        width: `${size}px`,
        filter:
          appcolor === "#FFFFFF" || appcolor === "#ffffff" ? `invert(1)` : undefined,
        objectFit: "contain",
      }}
      src={iconSrc}
      alt={`icon-${id}`} // Optional: add an alt attribute for accessibility
    />
  );
};
