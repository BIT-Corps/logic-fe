import { LogicLogo } from "@/app/assets";
import { SMLinks, footerLinks } from "@/app/utils";
import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer className="lg-section-black">
      <div className="lg-container h-full relative px-10 md:px-16 pt-24 flex flex-col justify-between md:gap-y-28">
        <section className="grid lg:grid-cols-4 gap-x-10 gap-y-16">
          <section className="space-y-6">
            <div className="logo relative w-24 h-24">
              <Image
                src={LogicLogo}
                alt="LOGIC_logo"
                className="absolute w-24 h-24"
                width={96}
                height={96}
              />
            </div>
            <div className="">
              <p className="font-semibold text-lg-gray-light w-full md:w-10/12">
                The <span className="font-bold text-sm">LOGIC Church</span>{" "}
                stands as a beacon of The Love Of God In Christ. We welcome all
                individuals seeking God&apos;s love and our doors are open to
                every soul seeking to welcome Jesus into their heart.
              </p>
            </div>
          </section>
          {footerLinks.map(({ id, subLinks, title }) => (
            <section key={id} className="space-y-8">
              <h4 className="text-2xl">{title}</h4>
              {subLinks && (
                <ul className="space-y-4">
                  {subLinks.map(({ subId, title }) => (
                    <li key={subId} className="text-sm">
                      <Link href="/">{title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <section className="p-8 space-y-8 rounded bg-lg-black md:flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-4xl">BE A BLESSING TO OUR JOURNEY</h2>
              <p className="text-sm">HILARIOUS GENEROSITY!</p>
            </div>
            <div>
              <Button variant="filled" color="light-red" size="md">
                Donate
              </Button>
            </div>
          </section>
        </section>

        <section className="flex flex-col lg:flex-row items-center justify-between w-full py-10 text-lg space-y-5">
          <p>Copyright &copy; 2023 The LOGIC Church.</p>
          <IconContext.Provider value={{ size: "28px" }}>
            <div className="hidden md:flex items-center justify-center gap-x-8">
              {SMLinks.map(({ icon, id }) => (
                <div key={id}>{icon}</div>
              ))}
            </div>
          </IconContext.Provider>
          <p>All Rights Reserved</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
