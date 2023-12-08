"use client";

import { Button } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { GoPlay } from "react-icons/go";
import ModalVideo from "react-modal-video";
import { CrossPositionImg, LogicLogo, MKImg, TDIALImg } from "./assets";

const links = [
  { link: "/about", label: "Expressions" },
  { link: "/pricing", label: "Resources" },
  { link: "/learn", label: "Trainings" },
  { link: "/community", label: "Events" },
  { link: "/community", label: "About Us" },
  { link: "/community", label: "Contact" },
];

export default function Home() {
  const [isOpen, setOpen] = useState(false);

  return (
    <main>
      <header className="h-24 bg-lg-dark">
        <section className="container mx-auto h-full flex items-center justify-between">
          <div className="logo relative w-20 h-20">
            <Image src={LogicLogo} alt="" className="absolute w-full h-full" />
          </div>
          <nav className="flex items-center justify-between gap-x-8">
            <ul className="flex items-center justify-start space-x-5">
              {links.map((link) => (
                <li
                  key={link.link}
                  className="text-sm cursor-pointer text-bebas"
                >
                  {link.label}
                </li>
              ))}
            </ul>
            <Button variant="filled" color="light-red">
              Donate
            </Button>
          </nav>
        </section>
      </header>
      <section className="flex items-center justify-center h-screen hero">
        <div className="flex items-center flex-col uppercase space-y-4">
          <h3 className=" font-bold text-8xl text-center">
            The love of God in christ church
          </h3>
          <p className="w-7/12 text-justify">
            The LOGIC Church stands as a beacon of The Love Of God In Christ
            Jesus here in Lagos Nigeria and to the world at large.
          </p>
          <div>
            <Button
              rightSection={<FaYoutube size={20} />}
              variant="filled"
              color="light-red.4"
              size="lg"
              radius="md"
              className="uppercase mt-6 text-sm px-8"
            >
              See Live
            </Button>
          </div>
        </div>
      </section>
      <section className="lg-section-white">
        <div className="lg-container">
          <div className="uppercase">
            <h4 className="text-6xl">Top Rated Sermons</h4>
            <p className="text-lg-gray">
              Equip yourself with our top rated sermons
            </p>
          </div>

          <section className="grid grid-cols-3 gap-x-8 py-14">
            {[
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
            ].map(({ id, title, subTitle, image, videoId }) => (
              <>
                <div
                  key={id}
                  className="relative"
                  onClick={() => setOpen(true)}
                >
                  <div className="img relative w-full h-72 rounded-lg cursor-pointer hover:scale-105 transition-all duration-200">
                    <Image
                      src={image}
                      alt=""
                      className="w-full h-full absolute object-cover rounded-md brightness-50"
                    />
                    <div className="absolute top-[44%] left-[44%]">
                      <GoPlay size={50} color="white" />
                    </div>
                  </div>
                  <div className="uppercase my-3">
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
    </main>
  );
}
