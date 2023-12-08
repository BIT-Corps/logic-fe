import { Button } from "@mantine/core";
import Image from "next/image";
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
    </main>
  );
}
