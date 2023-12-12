import { TextInput } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TExpressions } from "../types";
import { expressions } from "../utils";

const Expressions = () => {
  return (
    <>
      <section className="lg-section-white">
        <div className="lg-container space-y-20">
          <div className="uppercase">
            <h4 className="text-6xl">Expressions</h4>
            <p className="text-lg-gray">
              Equip yourself with our top rated sermons
            </p>
          </div>

          <section className="grid grid-cols-3 gap-10">
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
                <h4 className="text-5xl absolute">{name}</h4>
              </Link>
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
    </>
  );
};

export default Expressions;
