import { POP } from "../utils";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <section className="about_hero flex flex-col items-center justify-center text-center uppercase space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-5xl md:text-8xl tracking-wide">
            the L.O.G.I.C Church
          </h2>
          <p className="text-xs md:text-base w-11/12 lg:w-5/12 mx-auto">
            The LOGIC Church stands as a beacon of The Love Of God In Christ
            Jesus here in Lagos Nigeria and to the world at large. We are a
            place of Love, peace and joy to all who join us.
          </p>
        </div>
      </section>
      <section className="lg-section-white">
        <div className="lg-container space-y-36">
          <section className="grid lg:grid-cols-2 lg:gap-x-20 gap-y-10">
            <div className="mission_img" />
            <div className="uppercase flex flex-col justify-center items-start gap-y-6 order-first lg:order-none">
              <h3 className="text-xl bg-lg-red text-lg-white py-2 px-4 rounded">
                Our Mission
              </h3>
              <h4 className="text-4xl lg:text-5xl text-justify">
                To build a FAMILY where Grace and faith is preached and the Love
                of God in Christ is felt, a home for everyone!
              </h4>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-20 lg:gap-y-0">
            <div className="uppercase flex flex-col justify-center items-start gap-y-6">
              <h3 className="text-xl bg-lg-red text-lg-white py-2 px-4 rounded">
                Our Vision
              </h3>
              <h4 className="text-3xl lg:text-5xl text-justify">
                Preaching the GOSPEL of the Grace of God to our generation by
                the help of the Spirit, empowering and impacting people to
                flourish in every area of their lives.
              </h4>
            </div>
            <div className="vision_img" />
          </section>

          <section className="space-y-20">
            <div className="text-center uppercase space-y-1">
              <h4 className="text-4xl lg:text-6xl text-lg-red space-y-2">
                Pillars of Purpose:
                <br /> Guiding Lights of Our Community
              </h4>
              <p className="text-xs w-full lg:w-5/12 mx-auto font-semibold">
                fundamental beliefs that shape our community and define our
                shared journey. These principles are the heart of who we are and
                the path we walk together.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
              {POP.map(({ id, description, title }) => (
                <div
                  className="border rounded-lg py-20 px-16 space-y-4"
                  key={id}
                >
                  <h4 className="text-4xl text-lg-red">{title}</h4>
                  <p className="text-lg w-full lg:w-10/12 text-justify">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default About;
