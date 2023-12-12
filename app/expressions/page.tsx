import { TextInput } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AudienceImg, RaisedHandsImg, WorshipImg } from "../assets";

const Expressions = () => {
  return (
    <div>
      <section className="lg-section-white">
        <div className="lg-container space-y-20">
          <div className="uppercase">
            <h4 className="text-6xl">Expressions</h4>
            <p className="text-lg-gray">
              Equip yourself with our top rated sermons
            </p>
          </div>

          <section className="grid grid-cols-3 gap-10">
            {[
              {
                id: 0,
                name: "Abuja",
                image: AudienceImg,
                link: "/expressions/abuja",
              },
              {
                id: 1,
                name: "Lagos, Mainland",
                image: RaisedHandsImg,
                link: "/expressions/mainland",
              },
              {
                id: 2,
                name: "United Kingdom",
                image: WorshipImg,
                link: "/expressions/uk",
              },
            ].map((expression) => (
              <Link
                href={expression.link}
                className="relative h-96 text-lg-white flex items-center justify-center cursor-pointer rounded-lg"
                key={expression.id}
              >
                <Image
                  src={expression.image}
                  alt=""
                  className="w-full h-full absolute object-cover brightness-50 hover:brightness-90 hover:blur-sm rounded-lg"
                />
                <h4 className="text-5xl absolute">{expression.name}</h4>
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
    </div>
  );
};

export default Expressions;
