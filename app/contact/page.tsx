"use client";

import Image from "next/image";

const Contact = () => {
  return (
    <>
      <section className="contact_hero flex flex-col items-center justify-center text-center uppercase font-semibold">
        <h2 className="text-5xl md:text-8xl">
          Reach us through the <br /> branch closest to you
        </h2>
        <p className="text-sm md:text-lg lg:w-5/12">
          grow in faith, strength, knowledge and wisdom of god
        </p>
      </section>

      <section className="lg-section-white">
        <div className="lg-container space-y-8">
          <ul className="locations mx-auto flex items-center justify-center gap-x-14">
            {[
              { id: 0, title: "HQ, Lagos Island" },
              { id: 1, title: "Abuja" },
              { id: 2, title: "Cotonou" },
              { id: 3, title: "Mainland - Lagos" },
              { id: 4, title: "London, UK" },
            ].map(({ id, title }) => (
              <li key={id} className="font-semibold cursor-pointer">
                {title}
              </li>
            ))}
          </ul>
          <section className="border flex items-center justify-center">
            <Image src="/map.png" alt="map" width={1881} height={852} />
          </section>
        </div>
      </section>
    </>
  );
};

export default Contact;
