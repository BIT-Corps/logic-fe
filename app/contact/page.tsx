"use client";

import Image from "next/image";

const Contact = () => {
  return (
    <>
      <section className="contact_hero flex flex-col items-center justify-center text-center uppercase font-semibold">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">
          Reach us through the <br /> branch closest to you
        </h2>
        <p className="w-10/12 text-sm md:text-lg lg:w-5/12">
          grow in faith, strength, knowledge and wisdom of god
        </p>
      </section>

      <section className="lg-section-white">
        <div className="lg-container space-y-14">
          <ul className="locations mx-auto flex flex-col md:flex-row items-center justify-center gap-y-5 md:gap-y-0 gap-x-10 lg:gap-x-14">
            {[
              { id: 0, title: "HQ, Lekki Phase 1" },
              { id: 1, title: "Abuja" },
              { id: 2, title: "Cotonou" },
              { id: 3, title: "Mainland, Lagos" },
              { id: 4, title: "London, UK" },
            ].map(({ id, title }) => (
              <li key={id} className="font-semibold cursor-pointer lg:text-lg">
                {title}
              </li>
            ))}
          </ul>
          <section className="flex flex-col justify-center gap-y-10">
            <Image src="/map.png" alt="map" width={1881} height={852} />
            <div className="grid grid-cols-3 cleargap-x-10">
              <div className="space-y-2 col-span-2">
                <h4 className="md:text-lg lg:text-2xl">
                  Visit the Logic Center
                </h4>
                <h5 className="text-sm md:text-xl lg:text-4xl">
                  4, Oriwu Street, Beside Petrocam <br /> Fueling Station, Lekki
                  phase 1 Lagos
                </h5>
              </div>
              <div className="space-y-2">
                <h4 className="md:text-lg lg:text-2xl">Contact</h4>
                <div className="text-sm md:text-xl lg:text-4xl">
                  <h6>info@thelogicchurch.org</h6>
                  <h6>+(234) 809 668 2229</h6>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Contact;
