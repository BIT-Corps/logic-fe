"use client";

import { Footer, TopNav } from "../components";

type Props = { children: React.ReactNode };

const WebLayout = ({ children }: Props) => {
  return (
    <>
      <TopNav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default WebLayout;
