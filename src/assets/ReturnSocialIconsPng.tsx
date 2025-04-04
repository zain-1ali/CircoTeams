// Define the type for icon data

// Import contact icons
import call from "./socialLink/phone.png";
import contact from "./socialLink/contacts.png";
import text from "./socialLink/text.png";
import text2 from "./socialLink/write.png";
import paragraph from "./socialLink/paragraph.png";
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
import openSea from "./socialLink/OpenSea.png";

// Import music icons
import spotify from "./socialLink/spotify.png";
import applemusic from "./socialLink/applemusic.png";
import soundcloud from "./socialLink/soundcloud.png";
import itunes from "./socialLink/itunes.png";
import embdvdo from "./socialLink/embdvdo.png";

// Import payment icons
import cashapp from "./socialLink/cashapp.png";
import paypal from "./socialLink/paypal.png";
import venmo from "./socialLink/venmo.png";

// Import other icons
import website from "./socialLink/link.png";
import calendly from "./socialLink/calendly.png";
import reviews from "./socialLink/review.png";
import safari from "./socialLink/web.png";
import { Icon, IconGroup } from "../Types";

// Define icon arrays with the Icon type

export const popular: Icon[] = [
  {
    name: "Text",
    img: text,
    placeholder: "Phone Number*",
    linkID: 4,
    baseUrl: "",
  },
  { name: "Email", img: email, placeholder: "Email*", linkID: 3, baseUrl: "" },
  {
    name: "Instagram",
    img: instagram,
    placeholder: "Instagram Username*",
    linkID: 11,
    baseUrl: "https://www.instagram.com/",
  },
  {
    name: "Linkedin",
    img: linkedin,
    placeholder: "Linkedin Profile Link*",
    linkID: 12,
    baseUrl: "",
  },
  {
    name: "Call",
    img: call,
    placeholder: "Phone Number*",
    linkID: 2,
    baseUrl: "",
  },
  {
    name: "Title",
    img: text2,
    placeholder: "Title*",
    linkID: 51,
    baseUrl: "",
  },
];

export const contactIcons: Icon[] = [
  {
    name: "Call",
    img: call,
    placeholder: "Phone Number*",
    linkID: 2,
    baseUrl: "tel:",
  },
  {
    name: "Text",
    img: text,
    placeholder: "Phone Number*",
    linkID: 4,
    baseUrl: "",
  },
  {
    name: "Whatsapp",
    img: whatsapp,
    placeholder: "Phone Number*",
    linkID: 5,
    baseUrl: "https://wa.me/",
  },
  {
    name: "Email",
    img: email,
    placeholder: "Email*",
    linkID: 3,
    baseUrl: "mailto:",
  },
  {
    name: "Location",
    img: location,
    placeholder: "Address link from Map App*",
    linkID: 6,
    baseUrl: "",
  },
];

export const socialIcons: Icon[] = [
  {
    name: "Instagram",
    img: instagram,
    placeholder: "Instagram Username*",
    linkID: 11,
    baseUrl: "https://www.instagram.com/",
  },
  {
    name: "Facebook",
    img: facebook,
    placeholder: "Facebook Profile Link*",
    linkID: 14,
    baseUrl: "",
  },
  {
    name: "Tiktok",
    img: tiktok,
    placeholder: "Tiktok Username*",
    linkID: 13,
    baseUrl: "https://tiktok.com/@",
  },
  {
    name: "Twitter",
    img: twitter,
    placeholder: "Twitter Username*",
    linkID: 17,
    baseUrl: "https://www.Twitter.com/",
  },
  {
    name: "Linkedin",
    img: linkedin,
    placeholder: "Linkedin Profile Link*",
    linkID: 12,
    baseUrl: "",
  },
  {
    name: "Pinterest",
    img: pinterest,
    placeholder: "Pinterest Username*",
    linkID: 18,
    baseUrl: "https://www.pinterest.com/",
  },
  {
    name: "Youtube",
    img: youtube,
    placeholder: "Youtube Channel Url*",
    linkID: 16,
    baseUrl: "",
  },
  {
    name: "Snapchat",
    img: snapchat,
    placeholder: "Snapchat Username*",
    linkID: 15,
    baseUrl: "https://www.snapchat.com/add/",
  },
  {
    name: "Discord",
    img: discord,
    placeholder: "Discord User ID*",
    linkID: 46,
    baseUrl: "",
  },
  {
    name: "Thread",
    img: thread,
    placeholder: "Thread Link Url*",
    linkID: 48,
    baseUrl: "",
  },
  {
    name: "Twitch",
    img: twitch,
    placeholder: "Twitch Link Url*",
    linkID: 47,
    baseUrl: "",
  },
  {
    name: "Onlyfans",
    img: onlyfans,
    placeholder: "Onlyfans Username*",
    linkID: 19,
    baseUrl: "https://onlyfans.com/",
  },
  {
    name: "Open Sea",
    img: openSea,
    placeholder: "Open sea Link Url*",
    linkID: 49,
    baseUrl: "",
  },
];

export const business: Icon[] = [
  {
    name: "Calendly",
    img: calendly,
    placeholder: "Calendly link*",
    linkID: 41,
    baseUrl: "",
  },
  {
    name: "Etsy",
    img: Etsy,
    placeholder: "Etsy link*",
    linkID: 42,
    baseUrl: "",
  },
  {
    name: "Yelp",
    img: yelp,
    placeholder: "yelp link*",
    linkID: 43,
    baseUrl: "",
  },
  {
    name: "App link",
    img: applink,
    placeholder: "App link*",
    linkID: 44,
    baseUrl: "",
  },
  {
    name: "Reviews",
    img: reviews,
    placeholder: "Reviews link*",
    linkID: 45,
    baseUrl: "",
  },
];

export const media: Icon[] = [
  {
    name: "Spotify",
    img: spotify,
    placeholder: "Spotify link*",
    linkID: 22,
    baseUrl: "",
  },
  {
    name: "Sound Cloud",
    img: soundcloud,
    placeholder: "Sound Cloud link*",
    linkID: 23,
    baseUrl: "",
  },
  {
    name: "Apple Music",
    img: soundcloud,
    placeholder: "Apple Music link*",
    linkID: 24,
    baseUrl: "",
  },
  {
    name: "Embedded Video",
    img: embdvdo,
    placeholder: "Embedded Video link*",
    linkID: 25,
    baseUrl: "",
  },
  {
    name: "Embedded Songs",
    img: itunes,
    placeholder: "Embedded Songs Link*",
    linkID: 27,
    baseUrl: "",
  },
  {
    name: "Pdf",
    img: pdf,
    placeholder: "Pdf File Link*",
    linkID: 28,
    baseUrl: "",
  },
  {
    name: "Gallery",
    img: gallery,
    placeholder: "Gallery Link*",
    linkID: 29,
    baseUrl: "",
  },
  {
    name: "Title",
    img: text2,
    placeholder: "Title*",
    linkID: 51,
    baseUrl: "",
  },
  {
    name: "Paragraph",
    img: text2,
    placeholder: "Text*",
    linkID: 26,
    baseUrl: "",
  },
];

export const payment: Icon[] = [
  {
    name: "Cash App",
    img: cashapp,
    placeholder: "Cash App username*",
    linkID: 31,
    baseUrl: "https://cash.app/",
  },

  {
    name: "PayPal",
    img: paypal,
    placeholder: "paypal.me link*",
    linkID: 32,
    baseUrl: "",
  },
  {
    name: "Venmo",
    img: venmo,
    placeholder: "venmo link*",
    linkID: 33,
    baseUrl: "",
  },
  {
    name: "Zelle",
    img: zelle,
    placeholder: "Zelle link*",
    linkID: 50,
    baseUrl: "",
  },
];

export const more: Icon[] = [
  {
    name: "Website",
    img: website,
    placeholder: "Website link*",
    linkID: 21,
    baseUrl: "",
  },
  {
    name: "Calendly",
    img: calendly,
    placeholder: "Calendly link*",
    linkID: 41,
    baseUrl: "",
  },
];

export const allLinks: IconGroup[] = [
  {
    name: "Popular",
    links: [...popular],
  },
  {
    name: "Contact Info",
    links: [...contactIcons],
  },
  { name: "Social", links: [...socialIcons] },
  { name: "Business", links: [...business] },
  { name: "Content", links: [...media] },
  { name: "Payment", links: [...payment] },
];

export const placeholders: any[] = [
  ...contactIcons.map((icon) => ({
    placeholder: icon.placeholder,
    linkID: icon.linkID,
  })),
  ...socialIcons.map((icon) => ({
    placeholder: icon.placeholder,
    linkID: icon.linkID,
  })),
  ...business.map((icon) => ({
    placeholder: icon.placeholder,
    linkID: icon.linkID,
  })),
  ...media.map((icon) => ({
    placeholder: icon.placeholder,
    linkID: icon.linkID,
  })),
  ...payment.map((icon) => ({
    placeholder: icon.placeholder,
    linkID: icon.linkID,
  })),
  ...more.map((icon) => ({
    placeholder: icon.placeholder,
    linkID: icon.linkID,
  })),
];

export const returnPlaceholder = (linkID: any) => {
  const placeholder = placeholders.find(
    (placeholder) => placeholder.linkID === Number(linkID)
  );
  if (placeholder) {
    return placeholder.placeholder;
  }
};

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
    case 25:
      return embdvdo;
    case 26:
      return paragraph;
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
    case 51:
      return text2;
    case 999:
      return safari;
    default:
      return undefined; // Return undefined if no match is found
  }
};

// Define the validation rule type
type ValidationRule = {
  linkID: number;
  validate: (value: string) => boolean;
};

// Validation rules based on linkID
const linkValidationRules: ValidationRule[] = [
  {
    linkID: 2, // Call
    validate: (value: string) => /^\+?[0-9]{10,15}$/.test(value), // Validate phone numbers (E.164 format)
  },
  {
    linkID: 3, // Email
    validate: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), // Validate email format
  },
  {
    linkID: 4, // Text (Phone Number)
    validate: (value: string) => /^\+?[0-9]{10,15}$/.test(value),
  },
  {
    linkID: 5, // WhatsApp
    validate: (value: string) => /^\+?[0-9]{10,15}$/.test(value),
  },
  {
    linkID: 11, // Instagram
    validate: (value: string) => /^[a-zA-Z0-9._]{1,30}$/.test(value), // Validate Instagram username
  },
  {
    linkID: 12, // LinkedIn
    validate: (value: string) =>
      /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/.test(value), // Validate LinkedIn URL
  },
  {
    linkID: 13, // TikTok
    validate: (value: string) => /^[a-zA-Z0-9._]{1,30}$/.test(value), // Validate TikTok username
  },
  {
    linkID: 14, // Facebook
    validate: (value: string) =>
      /^(https?:\/\/)?(www\.)?facebook\.com\/.*$/.test(value), // Validate Facebook profile link
  },
  {
    linkID: 17, // Twitter
    validate: (value: string) => /^[a-zA-Z0-9_]{1,15}$/.test(value), // Validate Twitter username
  },
  {
    linkID: 18, // Pinterest
    validate: (value: string) => /^[a-zA-Z0-9._]{1,30}$/.test(value), // Validate Pinterest username
  },
  {
    linkID: 15, // Snapchat
    validate: (value: string) => /^[a-zA-Z0-9._]{1,30}$/.test(value), // Validate Snapchat username
  },
  {
    linkID: 16, // YouTube
    validate: (value: string) =>
      /^(https?:\/\/)?(www\.)?youtube\.com\/.*$/.test(value), // Validate YouTube URL
  },
  {
    linkID: 21, // Website
    validate: (value: string) =>
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}.*$/.test(value), // Validate general URLs
  },
  {
    linkID: 999, // Website
    validate: (value: string) =>
    /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}.*$/.test(value), // Validate general URLs
  },
  {
    linkID: 25, // Embedded Video
    validate: (value: string) =>
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}.*$/.test(value), // Validate general URLs
  },
  {
    linkID: 27, // Embedded songs
    validate: (value: string) =>
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}.*$/.test(value), // Validate general URLs
  },
  {
    linkID: 31, // Cash App
    validate: (value: string) => /^\$[a-zA-Z0-9]{1,20}$/.test(value), // Validate Cash App username
  },
  {
    linkID: 32, // PayPal
    validate: (value: string) =>
      /^(https?:\/\/)?(www\.)?paypal\.me\/.*$/.test(value), // Validate PayPal.me link
  },
  {
    linkID: 33, // Venmo
    validate: (value: string) => /^@[a-zA-Z0-9_]{1,15}$/.test(value), // Validate Venmo username
  },
  {
    linkID: 46, // Discord
    validate: (value: string) =>
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}.*$/.test(value), // Validate general URLs
  },
  {
    linkID: 47, // Twitch
    validate: (value: string) =>
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}.*$/.test(value), // Validate general URLs
  },
  {
    linkID: 48, // Thread
    validate: (value: string) =>
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}.*$/.test(value), // Validate general URLs
  },
  {
    linkID: 49, // OpenSea
    validate: (value: string) =>
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}.*$/.test(value), // Validate general URLs
  },
  {
    linkID: 19, // OnlyFans
    validate: (value: string) => /^[a-zA-Z0-9._]{1,30}$/.test(value), // Validate OnlyFans link
  },
  {
    linkID: 6, // Location
    validate: (value: string) =>
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}.*$/.test(value), // Validate general URLs
  },
  {
    linkID: 6, // Location
    validate: (value: string) =>
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}.*$/.test(value), // Validate general URLs
  },
  {
    linkID: 50, // Zelle
    validate: (value: string) =>
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}.*$/.test(value), // Validate general URLs
  },
  {
    linkID: 28, // Pdf
    validate: (value: string) =>
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}.*$/.test(value), // Validate general URLs
  },
  {
    linkID: 29, // Gallery
    validate: (value: string) =>
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}.*$/.test(value), // Validate general URLs
  },
  {
    linkID: 26, // paragraph
    validate: (value: string) => value.trim() !== "",
  },
  {
    linkID: 51, // title
    validate: (value: string) => value.trim() !== "",
  },
];

// Function to validate a link or value based on linkID
export const validateLink = (linkID: number, value: any): boolean => {
  const rule = linkValidationRules.find((r) => r.linkID === linkID);
  if (!rule) {
    console.warn(`No validation rule found for linkID: ${linkID}`);
    return false;
  }
  return rule.validate(value);
};
