import { HeroImg } from "@/app/assets";
import { Button } from "@mantine/core";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="flex items-center justify-center shadow-lg relative">
      <Image
        src={HeroImg}
        alt="hero_img"
        className="h-screen object-cover w-full brightness-50"
        sizes="100vh"
      />
      <div className="flex items-center flex-col uppercase space-y-4 absolute">
        <h3 className="font-bold text-6xl md:text-8xl text-center">
          The love of God in christ church
        </h3>
        <p className=" w-10/12 md:w-7/12 text-center">
          The LOGIC Church stands as a beacon of The Love Of God In Christ Jesus
          here in Lagos Nigeria and to the world at large.
        </p>
        <div>
          <Button
            rightSection={<FaYoutube size={20} />}
            variant="filled"
            color="light-red"
            size="lg"
            radius="md"
            className="uppercase mt-6 text-base px-6"
          >
            See Live
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
