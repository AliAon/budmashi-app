import { people01, people02, people03, 
//  linkedin, airbnb, binance,
  // coinbase, dropbox, 
  send, shield, star, music,
  youtube, spotify, yaad, jaam, god }
 from "../../public";
import instagram from "../../public/instagram.svg";
import facebook from "../../public/facebook.svg";
import twitter from "../../public/twitter.svg";
import youtube2 from "../../public/youtube2.png";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "releases",
    title: "Releases",
  },
  {
    id: "artists",
    title: "Artists",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Transfer money",
    content:
      "The best way to transfer money varies based on individual needs and preferences.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Request loan",
    content:
      "A request for a loan can provide you with the financial means to purchase a wide range of items and fulfill your interests.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [

  {
    title: "About Us",
    links: [
      {
        name: "Home",
        link: "",
      },
      {
        name: "About",
        link: "",
      },
      {
        name: "Release",
        link: "",
      },
      {
        name: "Artist",
        link: "",
      },
      {
        name: "Contact Us",
        link: "",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        name: "Privacy Policy",
        link: "",
      },
      {
        name: "Terms and conditions",
        link: "",
      },
      {
        name: "Accessibility",
        link: "",
      },
      {
        name: "Declaration of Use",
        link: "",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/budmashi.studios/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/profile.php?id=61568067314647&mibextid=LQQJ4d",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://x.com/budmashistudios",
  },
  {
    id: "social-media-4",
    icon: youtube2,
    link: "https://www.youtube.com/@budmashiStudios?app=desktop",
  },
];

export const songs = [
  {
    id: 1,
    name: "Tmhari Yaad",
    releaseDate: "27-12-2024",
    picture: yaad,
    availableOn: [
      { name: "Spotify", icon: spotify, link: "https://open.spotify.com/" },
      { name: "Apple Music", icon: music, link: "https://music.apple.com/" },
      { name: "YouTube", icon: youtube, link: "https://www.youtube.com/" },
    ],
  },
  {
    id: 2,
    name: "Ik Jaam",
    releaseDate: "27-12-2024",
    picture: jaam,
    availableOn: [
      { name: "Spotify", icon: spotify, link: "https://open.spotify.com/" },
      { name: "Apple Music", icon: music, link: "https://music.apple.com/" },
      { name: "YouTube", icon: youtube, link: "https://www.youtube.com/" },
    ],
  },
  {
    id: 3,
    name: "Oh My God",
    releaseDate: "27-12-2024",
    picture: god,
    availableOn: [
      { name: "Spotify", icon: spotify, link: "https://open.spotify.com/" },
      { name: "Apple Music", icon: music, link: "https://music.apple.com/" },
      { name: "YouTube", icon: youtube, link: "https://www.youtube.com/" },
    ],
  },
];
