"use client";

import { TextInput } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoPlay } from "react-icons/go";
import ModalVideo from "react-modal-video";
import {
  AudienceImg,
  CrossPositionImg,
  MKImg,
  RaisedHandsImg,
  TDIALImg,
  WorshipImg,
} from "./assets";
import { Hero, TopNav } from "./components";

export default function Home() {
  const [isOpen, setOpen] = useState(false);

  return (
    <main>
      <TopNav />
      <Hero />

      <section className="lg-section-white">
        <div className="lg-container">
          <div className="uppercase">
            <h4 className="text-6xl">Top Rated Sermons</h4>
            <p className="text-lg-gray">
              Equip yourself with our top rated sermons
            </p>
          </div>

          <section className="grid grid-cols-3 gap-x-8 pt-14">
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

      <section className="lg-section-red">
        <div className="lg-container space-y-14">
          <div className="uppercase">
            <h4 className="text-6xl">Weekly Activities</h4>
            <p>Equip yourself with our top rated sermons</p>
          </div>

          <section className="space-y-4">
            <div className="activities_table bg-lg-red-dark rounded-lg">
              <h4 className="col-span-2 pl-8 text-4xl">Sunday Sermon</h4>
              <div className="text-center">
                <h6 className="text-xl text-lg-gray-light">1st Service</h6>
                <h5 className="text-4xl">8am - 10am</h5>
              </div>
              <div className="text-center">
                <h6 className="text-xl text-lg-gray-light">2nd Service</h6>
                <h5 className="text-4xl">10am - 12am</h5>
              </div>
            </div>
            <div className="activities_table">
              <h4 className="col-span-2 pl-8 text-4xl">Midweek Koinonia</h4>
              <div className="text-center">
                <h5 className="text-4xl">Wednesdays</h5>
              </div>
              <div className="text-center">
                <h5 className="text-4xl">6pm - 9pm</h5>
              </div>
            </div>
            <div className="activities_table">
              <h4 className="col-span-2 pl-8 text-4xl">Daily Koinonia</h4>
              <div className="text-center">
                <h5 className="text-4xl">Every Morning</h5>
              </div>
              <div className="text-center">
                <h5 className="text-4xl">6am - 7pm</h5>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="lg-section-white">
        <div className="lg-container space-y-20">
          <div className="uppercase">
            <h4 className="text-6xl">Expressions</h4>
            <p className="text-lg-gray">
              Equip yourself with our top rated sermons
            </p>
          </div>

          <section className="grid grid-cols-2 gap-10">
            {[
              { id: 0, name: "Abuja", image: AudienceImg },
              { id: 1, name: "Cotonou", image: AudienceImg },
              { id: 2, name: "Lagos, Mainland", image: RaisedHandsImg },
              { id: 3, name: "United Kingdom", image: WorshipImg },
            ].map((expression) => (
              <div
                className="relative h-96 text-lg-white flex items-center justify-center cursor-pointer rounded-lg"
                key={expression.id}
              >
                <Image
                  src={expression.image}
                  alt=""
                  className="w-full h-full absolute object-cover brightness-50 hover:brightness-90 hover:blur-sm rounded-lg"
                />
                <h4 className="text-5xl absolute">{expression.name}</h4>
              </div>
            ))}
          </section>

          <section className="border subscribe_box text-white flex flex-col items-center justify-center text-center uppercase space-y-14">
            <div>
              <h4 className="text-7xl">
                Let us show you <br /> the love of God
              </h4>
              <p className="text-sm">We are concerned about your growth!</p>
            </div>
            <div className="w-3/12">
              <TextInput
                placeholder="Text input"
                variant="unstyled"
                rightSection={<FaLongArrowAltRight color="red" />}
              />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
