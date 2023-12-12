import { Footer, TopNav } from "../components";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <>
      <TopNav />
      {children}
      <Footer />
    </>
  );
};

export default layout;
