"use client";

import { Accordion } from "@mantine/core";
import Image from "next/image";
import { AssessmentImg, DiscipleImg, WordImg } from "../assets";
import { LFC, LMT } from "../utils";

const Trainings = () => {
  return (
    <div>
      <section className="training_hero flex flex-col items-center justify-center text-center uppercase space-y-4">
        <h2 className="text-8xl">
          Empowering Leaders, <br /> Nurturing Faith
        </h2>
        <p className="text-lg">
          Discover Your Path to Spiritual Growth and Leadership <br />{" "}
          Excellence through Our Tailored Training Programs
        </p>
      </section>

      <section className="lg-section-white">
        <div className="lg-container space-y-32">
          <div className="space-y-14">
            <div className="flex flex-col items-center justify-center w-7/12 mx-auto text-center space-y-2">
              <h2 className="text-6xl">Logic Foundation Class</h2>
              <p className="text-lg">
                The <strong>L.O.G.I.C</strong> Foundation Class is a four (4)
                week intensive development program aimed at driving in the
                foundational doctrines of our faith, and unveiling who we are
                and all that we have in Christ.
              </p>
            </div>
            <section className="grid grid-cols-2 gap-x-24">
              <div className="relative w-[780px] h-[515px]">
                <Image
                  src={AssessmentImg}
                  alt=""
                  className="absolute h-full w-full object-cover"
                />
              </div>
              <div>
                <Accordion
                  radius="md"
                  variant="separated"
                  defaultValue="What is LFC?"
                >
                  {LFC.map(({ id, title, description, subItems }) => (
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

          <div className="space-y-14">
            <div className="flex flex-col items-center justify-center w-7/12 mx-auto text-center space-y-2">
              <h2 className="text-6xl">Logic Minister Training</h2>
              <p className="text-lg">
                The Logic Minister Training is a specialized program designed to
                equip and empower church ministers with the necessary skills and
                knowledge to lead effectively. This training delves into the
                intricacies of pastoral responsibilities, effective
                communication, and spiritual leadership.
              </p>
            </div>
            <section className="grid grid-cols-2 gap-x-20">
              <div>
                <Accordion
                  radius="md"
                  variant="separated"
                  defaultValue="What is LMT?"
                >
                  {LMT.map(({ id, title, description }) => (
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
              <div className="relative w-[780px] h-[515px]">
                <Image
                  src={WordImg}
                  alt=""
                  className="absolute h-full w-full object-cover"
                />
              </div>
            </section>
          </div>

          <div className="space-y-14">
            <div className="flex flex-col items-center justify-center w-7/12 mx-auto text-center space-y-2">
              <h2 className="text-6xl">Logic Foundation Class</h2>
              <p className="text-lg">
                The <strong>L.O.G.I.C</strong> Foundation Class is a four (4)
                week intensive development program aimed at driving in the
                foundational doctrines of our faith, and unveiling who we are
                and all that we have in Christ.
              </p>
            </div>
            <section className="grid grid-cols-2 gap-x-24">
              <div className="relative w-[780px] h-[515px]">
                <Image
                  src={DiscipleImg}
                  alt=""
                  className="absolute h-full w-full object-cover"
                />
              </div>
              <div>
                <Accordion
                  radius="md"
                  variant="separated"
                  defaultValue="What is LFC?"
                >
                  {LFC.map(({ id, title, description, subItems }) => (
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
        </div>
      </section>
    </div>
  );
};

export default Trainings;
