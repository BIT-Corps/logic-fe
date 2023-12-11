import { Button } from "@mantine/core";
import { FaYoutube } from "react-icons/fa";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="flex items-center justify-center h-screen hero">
      <div className="flex items-center flex-col uppercase space-y-4">
        <h3 className=" font-bold text-8xl text-center">
          The love of God in christ church
        </h3>
        <p className="w-7/12 text-center">
          The LOGIC Church stands as a beacon of The Love Of God In Christ Jesus
          here in Lagos Nigeria and to the world at large.
        </p>
        <div>
          <Button
            rightSection={<FaYoutube size={20} />}
            variant="filled"
            color="light-red.4"
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
