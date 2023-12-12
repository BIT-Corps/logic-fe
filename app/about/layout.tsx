"use client";

import { WebLayout } from "../layouts";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return <WebLayout>{children}</WebLayout>;
};

export default layout;
