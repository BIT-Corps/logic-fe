"use client";

import { TextInput } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { KidsImg } from "./assets";
import { Hero, RatedSermons } from "./components";
import { WebLayout } from "./layouts";
import { TExpressions } from "./types";
import { expressions } from "./utils";

export default function Home() {
  return (
    <WebLayout>
      <Hero />
      <RatedSermons />

      <section className="lg-section-red">
        <div className="lg-container space-y-14">
          <div className="uppercase">
            <h4 className="text-6xl">Weekly Activities</h4>
            <p className="text-neutral-200 font-semibold">
              Equip yourself with our top rated sermons
            </p>
          </div>

          <section className="md:space-y-4">
            <div className="activities_table bg-lg-red-dark rounded-lg space-y-4">
              <h4 className="md:pl-8 text-4xl md:text-2xl lg:text-4xl text-center order-first">
                Sunday Sermon
              </h4>
              <div className="text-center">
                <h4 className="text-xl text-lg-gray-light">1st Service</h4>
                <h5 className="text-4xl">8am - 10am</h5>
              </div>
              <div className="text-center">
                <h4 className="text-xl text-lg-gray-light">2nd Service</h4>
                <h5 className="text-4xl">10am - 12am</h5>
              </div>
            </div>
            <div className="activities_table space-y-4">
              <h4 className="md:pl-8 text-4xl md:text-2xl lg:text-4xl text-center">
                Midweek Koinonia
              </h4>
              <div className="text-center">
                <h5 className="text-xl md:text-4xl">Wednesdays</h5>
              </div>
              <div className="text-center">
                <h5 className="text-4xl">6pm - 9pm</h5>
              </div>
            </div>
            <div className="activities_table space-y-4">
              <h4 className="md:pl-8 text-4xl md:text-2xl lg:text-4xl text-center">
                Daily Koinonia
              </h4>
              <div className="text-center">
                <h5 className="text-xl md:text-4xl">Every Morning</h5>
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

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {expressions.map(({ name, id, link, image }: TExpressions) => (
              <Link
                href={link}
                className="relative h-96 text-lg-white flex items-center justify-center cursor-pointer rounded-lg"
                key={id}
              >
                <Image
                  src={image}
                  alt=""
                  className="w-full h-full absolute object-cover brightness-50 hover:brightness-90 hover:blur-sm rounded-lg"
                />
                <h4 className="text-5xl absolute text-center">{name}</h4>
              </Link>
            ))}
          </section>

          <section className="text-lg-gray-light flex flex-col items-center justify-center text-center uppercase space-y-14 relative">
            <Image
              src={KidsImg}
              alt="kids"
              className="w-full h-[800px] object-cover rounded-2xl brightness-50"
            />
            <div className="absolute w-full space-y-10">
              <div className="space-y-2">
                <h4 className="text-5xl md:text-7xl">
                  Let us show you <br /> the love of God
                </h4>
                <p className="text-sm">We are concerned about your growth!</p>
              </div>
              <div className="w-10/12 lg:w-3/12 uppercase mx-auto">
                <TextInput
                  placeholder="Subscribe to our newsletter"
                  variant="unstyled"
                  rightSection={<FaLongArrowAltRight color="white" />}
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </WebLayout>
  );
}
