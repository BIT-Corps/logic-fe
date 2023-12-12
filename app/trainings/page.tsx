"use client";

import { Accordion } from "@mantine/core";
import Image from "next/image";
import { WordImg } from "../assets";
import { LMT } from "../utils";

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
        <div className="lg-container space-y-14">
          <div className="flex flex-col items-center justify-center w-6/12 mx-auto text-center space-y-2">
            <h2 className="text-6xl">Logic Minister Training</h2>
            <p>
              The Logic Minister Training is a specialized program designed to
              equip and empower church ministers with the necessary skills and
              knowledge to lead effectively. This training delves into the
              intricacies of pastoral responsibilities, effective communication,
              and spiritual leadership.
            </p>
          </div>

          <section className="grid grid-cols-2 gap-x-20">
            <div className="relative w-[780px] h-[515px]">
              <Image
                src={WordImg}
                alt=""
                className="absolute h-full w-full object-cover"
              />
            </div>
            <div>
              <Accordion
                radius="md"
                variant="separated"
                defaultValue="What is LMT?"
              >
                {LMT.map(({ id, title, description }) => (
                  <Accordion.Item value={title} key={id}>
                    <Accordion.Control>
                      <h4 className="text-4xl">{title}</h4>
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
    </div>
  );
};

export default Trainings;
