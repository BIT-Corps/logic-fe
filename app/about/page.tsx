import Image from "next/image";
import { pastors, POP } from "../utils";

const About = () => {
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

      <section className="lg-section-white mt-10">
        <div className="lg-container">
          <section className="grid grid-cols-2 gap-x-20">
            <div className="flex flex-col justify-center items-start gap-y-6 order-first lg:order-none">
              <div className="space-y-2">
                <h3 className="text-xl bg-lg-red text-lg-white py-2 px-4 rounded w-fit">
                  Our Lead Pastor
                </h3>
                <h4 className="text-4xl lg:text-5xl text-justify">
                  Dr. Flourish Peters
                </h4>
              </div>

              <div className="space-y-5">
                <p className="text-justify text-base">
                  <span className="font-bold">Dr. Flourish Peters</span> serves
                  as the Lead Pastor and Apostolic Head of The Love of God In
                  Christ (L.O.G.I.C) Church Global, headquartered in Lekki,
                  Lagos, with branches in Lagos, Abuja, Port Harcourt, London,
                  and Houston, Texas. He has an undeniable Apostolic call on his
                  life — a blend of graces, gifts, and skills; a captivating
                  speaker, a spiritual leader, a counsellor, a musician, an
                  crudite teacher of the Gospel and an author, with two best-
                  selling books in the Christian space.
                </p>
                <p className="text-justify text-base">
                  His transformative ministry has facilitated the liberation of
                  countless individuals from the clutches of addictions,
                  depression, oppression, suicidal contemplations, and the
                  burden of distorted sexual orientation. Through his
                  counselling ministry, he has mended and resurrected marriages
                  teetering on the brink of dissolution, offering liberty and
                  healing to those ensnared in physically and psychologically
                  abusive relationships.
                </p>
                <p className="text-justify text-base">
                  The far-reaching impact of his ministry extends to the
                  community, as he provides vital support through business
                  sponsorship, sponsors the education of young Nigerians at both
                  secondary and tertiary levels, and consistently orchestrates
                  charitable initiatives related to food and medical services.
                </p>
              </div>
            </div>
            <div className="pflo_img" />
          </section>
        </div>
      </section>

      <section className="lg-section-black">
        <div className="lg-container space-y-36">
          <section className="grid lg:grid-cols-2 lg:gap-x-20 gap-y-10">
            <div className="mission_img" />
            <div className="uppercase flex flex-col justify-center items-start gap-y-6 order-first lg:order-none">
              <h3 className="text-xl bg-lg-red text-lg-white py-2 px-4 rounded">
                Our Mission
              </h3>
              <h4 className="text-4xl lg:text-5xl text-justify">
                To build a FAMILY where Grace and faith is preached and the Love
                of God in Christ is felt, a home for everyone.
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
        </div>
      </section>

      <section className="space-y-20 lg-section-white">
        <div className="text-center uppercase space-y-1.5">
          <h4 className="text-4xl lg:text-6xl text-lg-red space-y-2">
            Pillars of Purpose:
            <br /> Guiding Lights of Our Community
          </h4>
          <p className="text-sm w-full lg:w-5/12 mx-auto font-semibold">
            fundamental beliefs that shape our community and define our shared
            journey. These principles are the heart of who we are and the path
            we walk together.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          {POP.map(({ id, description, title }) => (
            <div
              className="border rounded-lg py-10 md:py-20 px-6 md:px-16 space-y-4"
              key={id}
            >
              <h4 className="text-4xl text-lg-red">{title}</h4>
              <p className="md:text-lg w-full lg:w-10/12 text-justify">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="lg-section-black">
        <div className="lg-container space-y-10">
          <div className="section_heading flex justify-center items-center">
            <h4 className="text-4xl lg:text-6xl text-lg-red space-y-2">
              Meet our Pastors
            </h4>
          </div>

          <section className="mt-20">
            <div className="grid grid-cols-3 gap-10">
              {pastors.map(({ id, name, image, role }) => (
                <div key={id} className="space-y-4">
                  <div>
                    <Image
                      src={image ?? ""}
                      alt=""
                      className="h-[500px] w-full object-top object-cover rounded"
                    />
                  </div>
                  <div className="space-y-0">
                    <h4 className="text-4xl">{name}</h4>
                    <p>{role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="lg-section-white">
        <div className="lg-container space-y-36">Hello World</div>
      </section>
    </>
  );
};

export default About;
