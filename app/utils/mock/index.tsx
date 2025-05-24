import {
  AbujaImg,
  CrossPositionImg,
  EveningChurchImg,
  HoustonImg,
  MainlandImg,
  MKImg,
  PortharcourtImg,
  TDIALImg,
  UkImg,
  WorshipImg,
} from "@/app/assets";
import { TExpressions, TRatedSermons } from "@/app/types";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const expressions: TExpressions[] = [
  {
    id: 1,
    name: "Abuja",
    image: AbujaImg,
    link: "/expressions/abuja",
  },
  {
    id: 2,
    name: "Lagos Mainland",
    image: MainlandImg,
    link: "/expressions/mainland",
  },
  {
    id: 3,
    name: "PortHarcourt",
    image: PortharcourtImg,
    link: "/expressions/uk",
  },
  {
    id: 4,
    name: "London",
    image: UkImg,
    link: "/expressions/uk",
  },
  {
    id: 5,
    name: "Houston",
    image: HoustonImg,
    link: "/expressions/houston",
  },
  {
    id: 6,
    name: "Cotonou",
    image: WorshipImg,
    link: "/expressions/cotonou",
  },
  {
    id: 7,
    name: "Ghana",
    image: WorshipImg,
    link: "/expressions/ghana",
  },
  {
    id: 8,
    name: "Ireland",
    image: WorshipImg,
    link: "/expressions/ireland",
  },
  {
    id: 9,
    name: "Evening Church",
    image: EveningChurchImg,
    link: "/expressions/evening-church",
  },
  {
    id: 10,
    name: "Evening Church",
    image: WorshipImg,
    link: "/expressions/evening-church",
  },
];

export const SMLinks = [
  { id: 0, icon: <FaFacebook /> },
  { id: 1, icon: <FaInstagram /> },
  { id: 2, icon: <FaYoutube /> },
  { id: 3, icon: <FaTwitter /> },
];

export const FAQ = [
  {
    id: 0,
    title: "How can I get involved in the church community?",
    description:
      "Share information about various ministries, groups, or volunteer opportunities within the church. Include details on how newcomers can join and participate.",
  },
  {
    id: 1,
    title: "Is there a children's or youth program?",
    description:
      "Share information about various ministries, groups, or volunteer opportunities within the church. Include details on how newcomers can join and participate.",
  },
  {
    id: 2,
    title: "How can I request pastoral care or counseling?",
    description:
      "Share information about various ministries, groups, or volunteer opportunities within the church. Include details on how newcomers can join and participate.",
  },
  {
    id: 3,
    title: "How can I request pastoral care or counseling?",
    description:
      "Share information about various ministries, groups, or volunteer opportunities within the church. Include details on how newcomers can join and participate.",
  },
  {
    id: 4,
    title: "How can I request pastoral care or counseling?",
    description:
      "Share information about various ministries, groups, or volunteer opportunities within the church. Include details on how newcomers can join and participate.",
  },
  {
    id: 5,
    title: "How can I request pastoral care or counseling?",
    description:
      "Share information about various ministries, groups, or volunteer opportunities within the church. Include details on how newcomers can join and participate.",
  },
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
  {
    id: 3,
    title: "How to register",
    description:
      "Enhanced pastoral skills Improved leadership capabilities Deeper understanding of theological concepts Networking opportunities with fellow ministers",
  },
  {
    id: 4,
    title: "More Questions?",
    description:
      "Enhanced pastoral skills Improved leadership capabilities Deeper understanding of theological concepts Networking opportunities with fellow ministers",
  },
];

export const LFC = [
  {
    id: 0,
    title: "What is LFC?",
    description:
      "The L.O.G.I.C Foundation Class is a four (4) week intensive development program aimed at driving in the foundational doctrines of our faith, and unveiling who we are and all that we have in Christ.",
  },
  {
    id: 1,
    title: "Why should you attend?",
    description:
      "The LFC gives New Testament insight to frequently asked questions that believers have, through the contextual teaching of topics such as:",
    subItems: [
      { id: 0, title: "True Repentance." },
      { id: 1, title: "Good works vs Dead Works." },
    ],
  },
  {
    id: 2,
    title: "Who should register?",
    description:
      "The LFC gives New Testament insight to frequently asked questions that believers have, through the contextual teaching of topics such as:",
  },
  {
    id: 3,
    title: "How to register",
    description:
      "Enhanced pastoral skills Improved leadership capabilities Deeper understanding of theological concepts Networking opportunities with fellow ministers",
  },
  {
    id: 4,
    title: "More Questions?",
    description:
      "Enhanced pastoral skills Improved leadership capabilities Deeper understanding of theological concepts Networking opportunities with fellow ministers",
  },
];

export const POP = [
  {
    id: 0,
    title: "Love",
    description:
      "Love is at the heart of our community. We seek to emulate Christ's love in all our interactions, fostering a culture of acceptance and compassion.",
  },
  {
    id: 1,
    title: "Grace",
    description:
      "Love is at the heart of our community. We seek to emulate Christ's love in all our interactions, fostering a culture of acceptance and compassion.",
  },
  {
    id: 2,
    title: "Faith",
    description:
      "Love is at the heart of our community. We seek to emulate Christ's love in all our interactions, fostering a culture of acceptance and compassion.",
  },
  {
    id: 3,
    title: "Service",
    description:
      "Love is at the heart of our community. We seek to emulate Christ's love in all our interactions, fostering a culture of acceptance and compassion.",
  },
];

export const footerLinks = [
  {
    id: 1,
    title: "Quick Nav",
    subLinks: [
      { subId: 0, title: "Live Stream" },
      { subId: 1, title: "Expressions" },
      { subId: 2, title: "Resources" },
      { subId: 3, title: "Training" },
      { subId: 4, title: "FAQ" },
      { subId: 5, title: "Privacy Policy" },
    ],
  },
  {
    id: 2,
    title: "Contact",
    subLinks: [
      { subId: 0, title: "info@thelogicchurch.org" },
      { subId: 1, title: "(234) 80X-XXX-XXXX" },
      {
        subId: 2,
        title:
          "Block 115 T.F. Kuboye Road, By The Podium Event Centre, Marwa Bus stop Lekki Phase 1.",
      },
    ],
  },
];

export const sermons: TRatedSermons[] = [
  {
    id: 0,
    title: "Cross Position",
    subTitle: "Dr Flourish Peters",
    image: CrossPositionImg,
    videoId: "1aTPZdtY1Pg",
  },
  {
    id: 1,
    title: "Morning Koinonia",
    subTitle: "Dr Flourish Peters",
    image: MKImg,
    videoId: "1aTPZdtY1Pg",
  },
  {
    id: 2,
    title: "The Devil Is A Liar",
    subTitle: "Dr Flourish Peters",
    image: TDIALImg,
    videoId: "1aTPZdtY1Pg",
  },
];
