import { LogicLogo } from "@/app/assets";
import { Burger, Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import Slide from "react-reveal/Slide";

const links = [
  { link: "/about", label: "About Us" },
  { link: "/expressions", label: "Expressions" },
  { link: "/resources", label: "Resources" },
  { link: "/trainings", label: "Trainings" },
  { link: "/community", label: "Events" },
  { link: "/contact", label: "Contact" },
];

type Props = {
  opened: boolean;
  toggle(): void;
};

const TopNav = ({ opened, toggle }: Props) => {
  // const [menuIsOpened, setMenuIsOpened] = useState<boolean>(false);
  // const [opened, { toggle }] = useDisclosure();

  return (
    <header className="h-20 bg-lg-dark fixed w-full z-50">
      <section className="container mx-auto h-full flex items-center justify-between px-4 xl:px-0">
        <Link href="/" className="logo relative w-16 h-16">
          <Image
            src={LogicLogo}
            alt="LOGIC_LOGO"
            className="absolute w-16 h-16"
            width={64}
            height={64}
          />
        </Link>
        <section className="md:hidden block">
          <Burger
            opened={opened}
            color="white"
            onClick={toggle}
            aria-label="Toggle Navigation"
          />
        </section>
        {opened && (
          <Slide left>
            <nav className="absolute top-20 w-full left-0 h-96 bg-lg-dark z-30 p-8">
              Hello
            </nav>
          </Slide>
        )}
        <nav className="md:flex items-center justify-between gap-x-8 hidden ">
          <div className="flex items-center justify-start space-x-5">
            {links.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                className="text-sm cursor-pointer text-bebas"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button variant="filled" color="light-red" size="sm">
            Give
          </Button>
        </nav>
      </section>
    </header>
  );
};

export default TopNav;
