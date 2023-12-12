import type { StaticImageData } from "next/image";

export type TRatedSermons = {
  id: number;
  title: string;
  subTitle: string;
  image: StaticImageData;
  videoId: string;
};

export type TExpressions = {
  id: number;
  name: string;
  image: StaticImageData;
  link: string;
};
