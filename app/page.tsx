"use client";

import { Button, TextInput } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconContext } from "react-icons";
import {
  FaFacebook,
  FaInstagram,
  FaLongArrowAltRight,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AudienceImg, LogicLogo, RaisedHandsImg, WorshipImg } from "./assets";
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
        <div className="lg-container h-full relative py-24">
          <div className="grid grid-cols-4 gap-x-10">
            <section className="space-y-6">
              <div className="logo relative w-24 h-24">
                <Image
                  src={LogicLogo}
                  alt="LOGIC_logo"
                  className="absolute w-full h-full"
                />
              </div>
              <div className="">
                <p className="font-semibold text-lg-gray-light w-9/12 text-justify text-base">
                  The <span className="font-bold">LOGIC Church</span> stands as
                  a beacon of The Love Of God In Christ. We welcome all
                  individuals seeking God&apos;s love and our doors are open to
                  every soul seeking to welcome Jesus into their heart.
                </p>
              </div>
            </section>
            {[
              {
                id: 1,
                title: "Quick Links",
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
                      "4, Oriwu Street, Beside Petrocam Fueling Station, Lekki phase 1, Lagos.",
                  },
                ],
              },
            ].map(({ id, subLinks, title }) => (
              <section key={id} className="space-y-8">
                <h4 className="text-3xl">{title}</h4>
                {subLinks && (
                  <ul className="space-y-4">
                    {subLinks.map(({ subId, title }) => (
                      <li key={subId}>
                        <Link href="/">{title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <section className="p-8 space-y-8 rounded bg-lg-black flex flex-col justify-between">
              <div className="space-y-2">
                <h2 className="text-5xl">BE A BLESSING TO OUR JOURNEY</h2>
                <p>HILARIOUS GENEROSITY!</p>
              </div>
              <Button
                variant="filled"
                color="light-red"
                size="lg"
                className="w-6/12"
              >
                Donate
              </Button>
            </section>
          </div>
          <section className="flex items-center justify-between absolute bottom-0 w-full py-10 text-lg">
            <h4>Copyright &copy; 2023 The LOGIC Church.</h4>
            <IconContext.Provider value={{ size: "28px" }}>
              <div className="flex items-center justify-center gap-x-8">
                {[
                  { id: 0, icon: <FaFacebook /> },
                  { id: 1, icon: <FaInstagram /> },
                  { id: 2, icon: <FaYoutube /> },
                  { id: 3, icon: <FaTwitter /> },
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
