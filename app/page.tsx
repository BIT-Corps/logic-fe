import { Button } from "@mantine/core";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { LogicLogo } from "./assets";

const links = [
  { link: "/about", label: "Expressions" },
  { link: "/pricing", label: "Resources" },
  { link: "/learn", label: "Trainings" },
  { link: "/community", label: "Events" },
  { link: "/community", label: "About Us" },
  { link: "/community", label: "Contact" },
];

export default function Home() {
  return (
    <main>
      <header className="h-24 bg-lg-dark">
        <section className="container mx-auto h-full flex items-center justify-between">
          <div className="logo relative w-20 h-20">
            <Image src={LogicLogo} alt="" className="absolute w-full h-full" />
          </div>
          <nav className="flex items-center justify-between gap-x-8">
            <ul className="flex items-center justify-start space-x-5">
              {links.map((link) => (
                <li
                  key={link.link}
                  className="text-sm cursor-pointer text-bebas"
                >
                  {link.label}
                </li>
              ))}
            </ul>
            <Button variant="filled" color="light-red">
              Donate
            </Button>
          </nav>
        </section>
      </header>
      <section className="flex items-center justify-center h-screen hero">
        <div className="flex items-center flex-col uppercase space-y-4">
          <h3 className=" font-bold text-8xl text-center">
            The love of God in christ church
          </h3>
          <p className="w-7/12 text-justify">
            The LOGIC Church stands as a beacon of The Love Of God In Christ
            Jesus here in Lagos Nigeria and to the world at large.
          </p>
          <div>
            <Button
              rightSection={<FaYoutube size={20} />}
              variant="filled"
              color="light-red.4"
              size="lg"
              radius="md"
              className="uppercase mt-6 text-sm px-8"
            >
              See Live
            </Button>
          </div>
        </div>
      </section>
      <section className="border-red-400 border-4 p-20">
        <div className="border container mx-auto">
          <div className="uppercase">
            <h4 className="text-6xl">Top Rated Sermons</h4>
            <p>Equip yourself with our top rated sermons</p>
          </div>
        </div>
      </section>
    </main>
  );
}
