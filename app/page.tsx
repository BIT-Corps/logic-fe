import { MantineLogo } from "@mantinex/mantine-logo";

const links = [
  { link: "/about", label: "Expressions" },
  { link: "/pricing", label: "Resources" },
  { link: "/learn", label: "Trainings" },
  { link: "/community", label: "Donations" },
];

export default function Home() {
  return (
    <main>
      <header className="h-20 bg-lg-dark">
        <section className="container mx-auto h-full flex items-center justify-between">
          <MantineLogo color="blue" size={28} />
          <nav>
            <ul className="flex items-center justify-start space-x-5">
              {links.map((link) => (
                <li key={link.link} className="text-sm cursor-pointer">
                  {link.label}
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </header>
    </main>
  );
}
