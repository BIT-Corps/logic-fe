import Image from "next/image";
import { WordImg } from "../assets";

const Trainings = () => {
  return (
    <div>
      <section className="training_hero flex flex-col items-center justify-center text-center uppercase space-y-4">
        <h2 className="text-8xl">
          Empowering Leaders, <br /> Nurturing Faith
        </h2>
        <p className="text-lg">
          Discover Your Path to Spiritual Growth and Leadership <br />{" "}
          Excellence through Our Tailored Training Programs
        </p>
      </section>
      <section className="lg-section-white">
        <div className="lg-container space-y-14">
          <div className="flex flex-col items-center justify-center w-6/12 mx-auto text-center space-y-2">
            <h2 className="text-6xl">Logic Minister Training</h2>
            <p>
              The Logic Minister Training is a specialized program designed to
              equip and empower church ministers with the necessary skills and
              knowledge to lead effectively. This training delves into the
              intricacies of pastoral responsibilities, effective communication,
              and spiritual leadership.
            </p>
          </div>

          <section className="border grid grid-cols-2">
            <div className="relative w-[780px] h-[680px]">
              <Image
                src={WordImg}
                alt=""
                className="absolute h-full w-full object-cover"
              />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Trainings;
