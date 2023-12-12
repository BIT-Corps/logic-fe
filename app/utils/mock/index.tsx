import { AudienceImg, RaisedHandsImg, WorshipImg } from "@/app/assets";
import { TExpressions } from "@/app/types";

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
