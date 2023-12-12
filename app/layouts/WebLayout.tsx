"use client";

import { useDisclosure } from "@mantine/hooks";
import { Footer, TopNav } from "../components";

type Props = { children: React.ReactNode };

const WebLayout = ({ children }: Props) => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      {opened && (
        <nav className="absolute top-28 w-full left-0 h-screen overflow-hidden bg-lg-dark z-30 p-8 border">
          Hello
        </nav>
      )}
      <TopNav opened={opened} toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default WebLayout;
