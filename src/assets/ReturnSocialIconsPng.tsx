// Define the type for icon data
interface Icon {
  name: string;
  img: string; // Assuming the image imports are string paths
  placeholder: string;
}

// Import contact icons
import call from "./socialLink/phone.png";
import contact from "./socialLink/contacts.png";
import text from "./socialLink/text.png";
import whatsapp from "./socialLink/whatsapp.png";
import email from "./socialLink/email.png";

// Import social icons
import instagram from "./socialLink/instagram.png";
import facebook from "./socialLink/facebook.png";
import tiktok from "./socialLink/tiktok.png";
import twitter from "./socialLink/x.png";
import Etsy from "./socialLink/etsy.png";
import linkedin from "./socialLink/linkedin.png";
import yelp from "./socialLink/yelp.png";
import pinterest from "./socialLink/pinterest.png";
import youtube from "./socialLink/youtube.png";
import link from "./socialLink/link.png";
import snapchat from "./socialLink/snapchat.png";
import gallery from "./socialLink/gallery.png";
import applink from "./socialLink/applink.png";
import pdf from "./socialLink/pdf.png";
import onlyfans from "./socialLink/onlyfans.png";

import location from "./socialLink/location.png";
import twitch from "./socialLink/twitch.png";
import thread from "./socialLink/thread.png";
import discord from "./socialLink/discord.png";
import zelle from "./socialLink/zelle.png";
import openSea from "./socialLink/openSea.png";

// Import music icons
import spotify from "./socialLink/spotify.png";
import applemusic from "./socialLink/applemusic.png";
import soundcloud from "./socialLink/soundcloud.png";
import itunes from "./socialLink/itunes.png";

// Import payment icons
import cashapp from "./socialLink/cashapp.png";
import paypal from "./socialLink/paypal.png";
import venmo from "./socialLink/venmo.png";

// Import other icons
import website from "./socialLink/link.png";
import calendly from "./socialLink/calendly.png";
import reviews from "./socialLink/review.png";

// Define icon arrays with the Icon type
export const contactIcons: Icon[] = [
  { name: "Call", img: call, placeholder: "Phone Number*" },
  { name: "Text", img: text, placeholder: "Phone Number*" },
  { name: "Whatsapp", img: whatsapp, placeholder: "Phone Number*" },
  { name: "Email", img: email, placeholder: "Email*" },
];

export const socialIcons: Icon[] = [
  { name: "Instagram", img: instagram, placeholder: "Instagram Username*" },
  { name: "Facebook", img: facebook, placeholder: "Facebook Profile Link*" },
  { name: "Tiktok", img: tiktok, placeholder: "Tiktok Username*" },
  { name: "Twitter", img: twitter, placeholder: "Twitter Username*" },
  { name: "Linkedin", img: linkedin, placeholder: "Linkedin Profile Link*" },
  { name: "Pinterest", img: pinterest, placeholder: "Pinterest Username*" },
  { name: "Youtube", img: youtube, placeholder: "Youtube Chanel Url*" },
  { name: "Snapchat", img: snapchat, placeholder: "Snapchat Username*" },
];

export const media: Icon[] = [
  { name: "Spotify", img: spotify, placeholder: "Spotify link*" },
];

export const payment: Icon[] = [
  { name: "Cash App", img: cashapp, placeholder: "Cash App username*" },
  { name: "PayPal", img: paypal, placeholder: "paypal.me link*" },
];

export const more: Icon[] = [
  { name: "Website", img: website, placeholder: "Website link*" },
  { name: "Calendly", img: calendly, placeholder: "Calendly link*" },
];

// Type for the id parameter in returnPngIcons function
export const returnPngIcons = (id: number): string | undefined => {
  switch (id) {
    case 1:
      return contact;
    case 2:
      return call;
    case 3:
      return email;
    case 4:
      return text;
    case 5:
      return whatsapp;
    case 6:
      return location;
    case 15:
      return snapchat;
    case 14:
      return facebook;
    case 11:
      return instagram;
    case 17:
      return twitter;
    case 16:
      return youtube;
    case 18:
      return pinterest;
    case 13:
      return tiktok;
    case 12:
      return linkedin;
    case 19:
      return onlyfans;
    case 20:
      return link;
    case 22:
      return spotify;
    case 24:
      return applemusic;
    case 29:
      return gallery;
    case 27:
      return itunes;
    case 28:
      return pdf;
    case 31:
      return cashapp;
    case 32:
      return paypal;
    case 41:
      return calendly;
    case 21:
      return website;
    case 23:
      return soundcloud;
    case 33:
      return venmo;
    case 42:
      return Etsy;
    case 43:
      return yelp;
    case 44:
      return applink;
    case 45:
      return reviews;
    case 46:
      return discord;
    case 47:
      return twitch;
    case 48:
      return thread;
    case 49:
      return openSea;
    case 50:
      return zelle;
    default:
      return undefined; // Return undefined if no match is found
  }
};
