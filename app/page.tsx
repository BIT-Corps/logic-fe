"use client";

import { TextInput } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import { IconContext } from "react-icons";
import {
  FaFacebook,
  FaInstagram,
  FaLongArrowAltRight,
  FaYoutube,
} from "react-icons/fa";
import { AudienceImg, RaisedHandsImg, WorshipImg } from "./assets";
import { Hero, RatedSermons, TopNav } from "./components";

export default function Home() {
  const [isOpen, setOpen] = useState(false);

  return (
    <main>
      <TopNav />
      <Hero />
      <RatedSermons />

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

          <section className="subscribe_box text-lg-gray-light flex flex-col items-center justify-center text-center uppercase space-y-14">
            <div>
              <h4 className="text-7xl">
                Let us show you <br /> the love of God
              </h4>
              <p className="text-sm">We are concerned about your growth!</p>
            </div>
            <div className="w-3/12 uppercase">
              <TextInput
                placeholder="Subscribe to our newsletter"
                variant="unstyled"
                rightSection={<FaLongArrowAltRight color="white" />}
              />
            </div>
          </section>
        </div>
      </section>

      <footer className="h-[600px] bg-lg-dark text-lg-white">
        <div className="lg-container h-full relative py-20">
          <div></div>
          <section className="flex items-center justify-between absolute bottom-0 w-full py-10 text-xl">
            <h4>The LOGIC Church</h4>
            <IconContext.Provider value={{ size: "28px" }}>
              <div className="flex items-center justify-center gap-x-6">
                {[
                  { id: 0, icon: <FaFacebook /> },
                  { id: 1, icon: <FaInstagram /> },
                  { id: 2, icon: <FaYoutube /> },
                ].map(({ icon, id }) => (
                  <div key={id}>{icon}</div>
                ))}
              </div>
            </IconContext.Provider>
            <h4>All Rights Reserved</h4>
          </section>
        </div>
      </footer>
    </main>
  );
}
