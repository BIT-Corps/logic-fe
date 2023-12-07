import { Button } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";

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
      <header className="h-20 bg-lg-dark">
        <section className="container mx-auto h-full flex items-center justify-between">
          <MantineLogo color="blue" size={28} />
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
            <Button variant="filled" color="red.6">
              Donate
            </Button>
          </nav>
        </section>
      </header>
    </main>
  );
}
