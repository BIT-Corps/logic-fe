"use client";

import { useDisclosure } from "@mantine/hooks";
import { Footer, TopNav } from "../components";

type Props = { children: React.ReactNode };

const WebLayout = ({ children }: Props) => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <TopNav opened={opened} toggle={toggle} />
      <main className="py-14">{children}</main>
      <Footer />
    </>
  );
};

export default WebLayout;
