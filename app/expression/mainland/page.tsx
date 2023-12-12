const weeklyActivities = [
  {
    id: 0,
    title: "Grace Culture",
    day: "1st Thursday in every month",
    time: "6pm - 9pm",
  },
  {
    id: 1,
    title: "Inferno",
    day: "Mid-Thursday in every month",
    time: "6pm - 9pm",
  },
  {
    id: 2,
    title: "Black and White",
    day: "Last Thursday in every month",
    time: "6pm - 9pm",
  },
];

type Props = {};

const Mainland = (props: Props) => {
  return (
    <div>
      <section className="expression_hero flex items-center justify-center">
        <h2 className="text-8xl">Maryland, Mainland Lagos</h2>
      </section>

      <section className="lg-section-black">
        <div className="lg-container py-24 space-y-10">
          <div className="uppercase">
            <h4 className="text-6xl">Weekly Activities</h4>
            <p>All Activities on the mainland</p>
          </div>
          <section className="space-y-5">
            <div className="grid grid-cols-4 border-2 items-center justify-center bg-lg-black rounded  py-4 border-gray-600/40">
              <h4 className="col-span-2 pl-8 text-3xl">
                Service with Pst. Clarkson
              </h4>
              <div className="text-center">
                <h5 className="text-3xl">9am - 12noon</h5>
              </div>
              <div className="text-center">
                <h5 className="text-3xl">Sunday</h5>
              </div>
            </div>
            {weeklyActivities.map(({ day, id, title, time }) => (
              <div
                className="grid grid-cols-4 items-center justify-center rounded  py-4"
                key={id}
              >
                <h4 className="col-span-2 pl-8 text-3xl">{title}</h4>
                <div className="text-center">
                  <h5 className="text-3xl">{day}</h5>
                </div>
                <div className="text-center">
                  <h5 className="text-3xl">{time}</h5>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>

      <section className="bg-lg-red h-60">
        <div className="lg-container py-20 flex items-center justify-between uppercase">
          <div className="space-y-2">
            <h4 className="text-5xl">
              Step Into a Radiant Community of Faith and Connection
            </h4>
            <p className="w-7/12 text-sm font-normal">
              Discover the joy of community, inspiration, and shared moments on
              our church&apos;s YouTube page.
            </p>
          </div>
          <a href="https://youtube.com" className="underline">
            Visit our Youtube Page
          </a>
        </div>
      </section>
    </div>
  );
};

export default Mainland;
