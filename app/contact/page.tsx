"use client";

import { Accordion } from "@mantine/core";
import Image from "next/image";
import { FAQ } from "../utils";

const Contact = () => {
  return (
    <>
      <section className="contact_hero flex flex-col items-center justify-center text-center uppercase font-semibold">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">
          Reach us through the <br /> branch closest to you
        </h2>
        <p className="w-10/12 text-sm md:text-lg lg:w-5/12">
          grow in faith, strength, knowledge and wisdom of god
        </p>
      </section>

      <section className="lg-section-white">
        <div className="lg-container space-y-32">
          <div className="space-y-10">
            <ul className="locations mx-auto flex flex-col md:flex-row items-center justify-center gap-y-5 md:gap-y-0 gap-x-10 lg:gap-x-14">
              {[
                { id: 0, title: "HQ, Lekki Phase 1" },
                { id: 1, title: "Abuja" },
                { id: 2, title: "Cotonou" },
                { id: 3, title: "Mainland, Lagos" },
                { id: 4, title: "London, UK" },
              ].map(({ id, title }) => (
                <li
                  key={id}
                  className="font-semibold cursor-pointer lg:text-lg"
                >
                  {title}
                </li>
              ))}
            </ul>

            <section className="flex flex-col justify-center gap-y-14">
              <Image src="/map.png" alt="map" width={1881} height={852} />
              <div className="grid grid-cols-3 justify-end gap-x-10">
                <div className="space-y-2 col-span-2">
                  <h4 className="md:text-lg lg:text-2xl text-lg-gray">
                    Visit the Logic Center
                  </h4>
                  <h5 className="text-sm md:text-xl lg:text-4xl">
                    4, Oriwu Street, Beside Petrocam <br /> Fueling Station,
                    Lekki phase 1 Lagos
                  </h5>
                </div>
                <div className="space-y-2 ml-auto">
                  <h4 className="md:text-lg lg:text-2xl text-lg-gray">
                    Contact
                  </h4>
                  <div className="text-sm md:text-xl lg:text-3xl">
                    <h6>info@thelogicchurch.org</h6>
                    <h6>+(234) 809 668 2229</h6>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="space-y-16">
            <div className="text-center uppercase space-y-1">
              <h2 className="text-5xl">Frequently asked questions</h2>
              <p className="">special curated series for you</p>
            </div>
            <div className="w-7/12 lg:w-10/12 mx-auto">
              <Accordion defaultValue="How can I get involved in the church community?">
                {FAQ.map(({ id, title, description }) => (
                  <Accordion.Item value={title} key={id}>
                    <Accordion.Control>
                      <h4 className="text-3xl">{title}</h4>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <p className="w-11/12 text-lg">{description}</p>
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Contact;
