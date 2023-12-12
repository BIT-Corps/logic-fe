import { AudienceImg, RaisedHandsImg, WorshipImg } from "@/app/assets";
import { TExpressions } from "@/app/types";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const expressions: TExpressions[] = [
  {
    id: 0,
    name: "Abuja",
    image: AudienceImg,
    link: "/expressions/abuja",
  },
  {
    id: 1,
    name: "Lagos, Mainland",
    image: RaisedHandsImg,
    link: "/expressions/mainland",
  },
  {
    id: 2,
    name: "United Kingdom",
    image: WorshipImg,
    link: "/expressions/uk",
  },
];

export const SMLinks = [
  { id: 0, icon: <FaFacebook /> },
  { id: 1, icon: <FaInstagram /> },
  { id: 2, icon: <FaYoutube /> },
  { id: 3, icon: <FaTwitter /> },
];

export const LMT = [
  {
    id: 0,
    title: "What is LMT?",
    description:
      "Enhanced pastoral skills Improved leadership capabilities Deeper understanding of theological concepts Networking opportunities with fellow ministers",
  },
  {
    id: 1,
    title: "Why should you be a part of this?",
    description:
      "Enhanced pastoral skills Improved leadership capabilities Deeper understanding of theological concepts Networking opportunities with fellow ministers",
  },
  {
    id: 2,
    title: "Who should register?",
    description:
      "Enhanced pastoral skills Improved leadership capabilities Deeper understanding of theological concepts Networking opportunities with fellow ministers",
  },
  // {
  //   id: 3,
  //   title: "Where and when does the training hold?",
  //   description:
  //     "Enhanced pastoral skills Improved leadership capabilities Deeper understanding of theological concepts Networking opportunities with fellow ministers",
  // },
  {
    id: 4,
    title: "More Questions?",
    description:
      "Enhanced pastoral skills Improved leadership capabilities Deeper understanding of theological concepts Networking opportunities with fellow ministers",
  },
];
