"use client";

import { sermons } from "@/app/utils";
import Image from "next/image";
import { useState } from "react";
import { GoPlay } from "react-icons/go";
import ModalVideo from "react-modal-video";

const RatedSermons = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="lg-section-white">
      <div className="lg-container">
        <div className="uppercase">
          <h4 className="text-5xl md:text-6xl">Top Rated Sermons</h4>
          <p className="text-gray-700">
            Equip yourself with our top rated sermons
          </p>
        </div>

        <section className="grid lg:grid-cols-3 gap-y-10 lg:gap-y-0 md:gap-x-8 pt-14">
          {sermons.map(({ id, title, subTitle, image, videoId }) => (
            <div key={id}>
              <div className="relative" onClick={() => setOpen(true)}>
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
                  <h4 className="text-4xl">{title}</h4>
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
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default RatedSermons;
