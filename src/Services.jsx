export const Services = ({ services }) => {
  return (
    <section id="services" className=" py-10 bg-indigo-50">
      <h2 className="text-3xl text-center py-5 font-bold">Services</h2>
      <div className="flex flex-wrap justify-around container mx-auto">
        {Object.keys(services).map((service, idx) => (
          <div key={idx} className="border-2 border-gray-600 m-2 my-10 bg-2 bg-white w-full md:w-96 rounded">
            <h4 className="bg-gray-600 text-white px-4 py-4 text-xl">{service}</h4>
            <ul className="px-4 mx-2 py-2 text-xl ">
              {services[service].map((item, jdx) => (
                <li
                  key={jdx}
                  className="px-4 py-2 text-xl hover:bg-gray-200 hover:font-bold transition-all cursor-pointer"
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
