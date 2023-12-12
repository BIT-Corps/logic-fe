import { LogicLogo } from "@/app/assets";
import { SMLinks } from "@/app/utils";
import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer className="lg-section-black">
      <div className="lg-container h-full relative py-24 flex flex-col justify-between md:gap-y-28">
        <section className="grid md:grid-cols-4 gap-x-10">
          <section className="space-y-6">
            <div className="logo relative w-24 h-24">
              <Image
                src={LogicLogo}
                alt="LOGIC_logo"
                className="absolute w-full h-full"
              />
            </div>
            <div className="">
              <p className="font-semibold text-lg-gray-light w-9/12 text-justify">
                The <span className="font-bold">LOGIC Church</span> stands as a
                beacon of The Love Of God In Christ. We welcome all individuals
                seeking God&apos;s love and our doors are open to every soul
                seeking to welcome Jesus into their heart.
              </p>
            </div>
          </section>
          {[
            {
              id: 1,
              title: "Quick Nav",
              subLinks: [
                { subId: 0, title: "Live Stream" },
                { subId: 1, title: "Expressions" },
                { subId: 2, title: "Resources" },
                { subId: 3, title: "Training" },
                { subId: 4, title: "FAQ" },
                { subId: 5, title: "Privacy Policy" },
              ],
            },
            {
              id: 2,
              title: "Contact",
              subLinks: [
                { subId: 0, title: "info@thelogicchurch.org" },
                { subId: 1, title: "(234) 80X-XXX-XXXX" },
                {
                  subId: 2,
                  title:
                    "4, Oriwu Street, Beside Petrocam Fueling Station, Lekki phase 1, Lagos.",
                },
              ],
            },
          ].map(({ id, subLinks, title }) => (
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
          <section className="hidden p-8 space-y-8 rounded bg-lg-black md:flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-5xl">BE A BLESSING TO OUR JOURNEY</h2>
              <p>HILARIOUS GENEROSITY!</p>
            </div>
            <Button
              variant="filled"
              color="light-red"
              size="lg"
              className="w-6/12"
            >
              Donate
            </Button>
          </section>
        </section>

        <section className="flex items-center justify-between w-full pt-10 text-lg">
          <h4>Copyright &copy; 2023 The LOGIC Church.</h4>
          <IconContext.Provider value={{ size: "28px" }}>
            <div className="hidden md:flex items-center justify-center gap-x-8">
              {SMLinks.map(({ icon, id }) => (
                <div key={id}>{icon}</div>
              ))}
            </div>
          </IconContext.Provider>
          <h4>All Rights Reserved</h4>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
