"use client";

import { CrossPositionImg, MKImg, TDIALImg } from "@/app/assets";
import { TRatedSermons } from "@/app/types";
import Image from "next/image";
import { useState } from "react";
import { GoPlay } from "react-icons/go";
import ModalVideo from "react-modal-video";

const sermons: TRatedSermons[] = [
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

const RatedSermons = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="lg-section-white">
      <div className="lg-container">
        <div className="uppercase">
          <h4 className="text-5xl md:text-6xl">Top Rated Sermons</h4>
          <p className="text-lg-gray">
            Equip yourself with our top rated sermons
          </p>
        </div>

        <section className="grid md:grid-cols-3 gap-y-10 md:gap-y-0 md:gap-x-8 pt-14">
          {sermons.map(({ id, title, subTitle, image, videoId }) => (
            <>
              <div key={id} className="relative" onClick={() => setOpen(true)}>
                <div className="img relative w-full h-72 rounded-lg cursor-pointer hover:scale-105 transition-all duration-500">
                  <Image
                    src={image}
                    alt=""
                    className="w-full h-full absolute object-cover rounded-md brightness-50"
                  />
                  <div className="absolute top-[44%] left-[44%]">
                    <GoPlay size={50} color="white" />
                  </div>
                </div>
                <div className="uppercase mt-5">
                  <h6 className="text-4xl">{title}</h6>
                  <p className="text-lg-gray">{subTitle}</p>
                </div>
              </div>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId={videoId}
                onClose={() => setOpen(false)}
              />
            </>
          ))}
        </section>
      </div>
    </section>
  );
};

export default RatedSermons;
