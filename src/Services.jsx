export const Services = ({ services }) => {
  return (
    <section id="services" className="py:2 md:py-10 bg-slate-800">
      <h2 className="text-3xl text-center py-5 font-bold text-slate-50">
        Services
      </h2>
      <div className="flex flex-wrap justify-around container mx-auto">
        {Object.keys(services).map((service, idx) => (
          <div
            key={idx}
            id={service}
            className=" border-gray-600 m-2 my-2 md:my-10 bg-2  w-full sm:w-64 md:w-80 lg:w-96 rounded overflow-hidden"
          >
            <h4 className="bg-gray-600 text-white px-2 md:px-4 py-1 md:py-4 text-xl ">
              {service}
            </h4>
            <ul className="  py-0.5 md:py-2 text-xl bg-white">
              {services[service].map((item, jdx) => (
                <li
                  key={jdx}
                  className=" px-2 md:px-6 md:py-2 md:text-xl hover:bg-gray-200 hover:font-bold transition-all cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
