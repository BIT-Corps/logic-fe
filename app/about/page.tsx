type Props = {};

const About = (props: Props) => {
  return (
    <>
      <section className="about_hero flex flex-col items-center justify-center text-center uppercase space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-8xl tracking-wide">the L.O.G.I.C Church</h2>
          <p className="w-5/12 mx-auto">
            The LOGIC Church stands as a beacon of The Love Of God In Christ
            Jesus here in Lagos Nigeria and to the world at large. We are a
            place of Love, peace and joy to all who join us.
          </p>
        </div>
      </section>
      <section className="lg-section-white">
        <div className="lg-container space-y-32">
          <section className="grid grid-cols-2 gap-x-20">
            <div className="mission_img" />
            <div className="uppercase flex flex-col justify-center items-start gap-y-6">
              <h3 className="text-xl bg-lg-red text-lg-white py-2 px-4 rounded">
                Our Mission
              </h3>
              <h4 className="text-5xl text-justify">
                To build a FAMILY where Grace and faith is preached and the Love
                of God in Christ is felt, a home for everyone!
              </h4>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-x-20">
            <div className="uppercase flex flex-col justify-center items-start gap-y-6">
              <h3 className="text-xl bg-lg-red text-lg-white py-2 px-4 rounded">
                Our Vision
              </h3>
              <h4 className="text-5xl text-justify">
                Preaching the GOSPEL of the Grace of God to our generation by
                the help of the Spirit, empowering and impacting people to
                flourish in every area of their lives.
              </h4>
            </div>
            <div className="vision_img" />
          </section>

          <section className="space-y-20">
            <div className="text-center uppercase space-y-1">
              <h4 className="text-6xl">
                Pillars of Purpose:
                <br /> Guiding Lights of Our Community
              </h4>
              <p className="w-5/12 mx-auto font-semibold">
                fundamental beliefs that shape our community and define our
                shared journey. These principles are the heart of who we are and
                the path we walk together.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10">
              {[
                {
                  id: 0,
                  title: "Love",
                  description:
                    "Love is at the heart of our community. We seek to emulate Christ's love in all our interactions, fostering a culture of acceptance and compassion.",
                },
                {
                  id: 1,
                  title: "Grace",
                  description:
                    "Love is at the heart of our community. We seek to emulate Christ's love in all our interactions, fostering a culture of acceptance and compassion.",
                },
                {
                  id: 2,
                  title: "Faith",
                  description:
                    "Love is at the heart of our community. We seek to emulate Christ's love in all our interactions, fostering a culture of acceptance and compassion.",
                },
                {
                  id: 3,
                  title: "Service",
                  description:
                    "Love is at the heart of our community. We seek to emulate Christ's love in all our interactions, fostering a culture of acceptance and compassion.",
                },
              ].map(({ id, description, title }) => (
                <div
                  className="border h-[300px] rounded-lg py-20 px-16 space-y-2.5 bg-lg-gray-light shadow-lg"
                  key={id}
                >
                  <h4 className="text-4xl">{title}</h4>
                  <p className="text-lg w-10/12 text-justify">{description}</p>
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
