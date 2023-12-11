import { LogicLogo } from "@/app/assets";
import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const links = [
  { link: "/expressions", label: "Expressions" },
  { link: "/resources", label: "Resources" },
  { link: "/trainings", label: "Trainings" },
  { link: "/community", label: "Events" },
  { link: "/about", label: "About Us" },
  { link: "/contact", label: "Contact" },
];

type Props = {};

const TopNav = (props: Props) => {
  return (
    <header className="h-28 bg-lg-dark">
      <section className="container mx-auto h-full flex items-center justify-between">
        <div className="logo relative w-20 h-20">
          <Image src={LogicLogo} alt="" className="absolute w-full h-full" />
        </div>
        <nav className="flex items-center justify-between gap-x-8">
          <ul className="flex items-center justify-start space-x-5">
            {links.map((link) => (
              <Link key={link.link} href={link.link}>
                <li className="text-sm cursor-pointer text-bebas">
                  {link.label}
                </li>
              </Link>
            ))}
          </ul>
          <Button variant="filled" color="light-red" size="sm">
            Donate
          </Button>
        </nav>
      </section>
    </header>
  );
};

export default TopNav;
