import { LogicLogo } from "@/app/assets";
import { Burger, Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { link: "/expressions", label: "Expressions" },
  { link: "/resources", label: "Resources" },
  { link: "/trainings", label: "Trainings" },
  { link: "/community", label: "Events" },
  { link: "/about", label: "About Us" },
  { link: "/contact", label: "Contact" },
];

type Props = {
  opened: boolean;
  toggle(): void;
};

const TopNav = ({ opened, toggle }: Props) => {
  const [menuIsOpened, setMenuIsOpened] = useState<boolean>(false);
  // const [opened, { toggle }] = useDisclosure();

  return (
    <header className="h-28 bg-lg-dark">
      <section className="container mx-auto h-full flex items-center justify-between px-4 xl:px-0">
        <Link href="/" className="logo relative w-20 h-20">
          <Image src={LogicLogo} alt="" className="absolute w-full h-full" />
        </Link>
        <section className="md:hidden block">
          <Burger
            opened={opened}
            color="white"
            onClick={toggle}
            aria-label="Toggle Navigation"
          />
        </section>
       
        <nav className="md:flex items-center justify-between gap-x-8 hidden ">
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
