import { GiRoundStar } from "react-icons/gi";
import { MdPhone, MdEmail } from "react-icons/md";
import { services } from "./data";

export const Header = ({ services }) => {
  return (
    <header
      className=" h-[1000px] overflow-hidden  max-h-screen bg-black flex items-center text-yellow-600  "
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(45,45, 0, .85), rgba(0,0, 0, 1)),  url("images/Untitled-1.png"), url("images/repair.jpg")`,
        backgroundPosition: "center, center, bottom" /* Center the image */,
        backgroundRepeat: "no-repeat" /* Do not repeat the image */,
        backgroundSize: "cover",
        // backgroundBlendMode: "hard-light",
      }}
    >
      {/* <img
        src="images/Untitled-1.png"
        className="aspect-[72/96] w-[650px] absolute right-[-150px] bottom-0 lg:top-0 opacity-20"
      /> */}

      <div className="container relative w-full h-1/2 mx-auto flex flex-col justify-around items-center  ">
        {/* <div className="text-2xl   m-2 p-2 rounded flex flex-col">
          <span className="text-3xl  ">Coles Handyman</span>{" "}
          <span>Service LLC</span>
        </div> */}
        <div className="my-4 relative   ">
          <div className="text-5xl text-center leading-[110px] md:leading-[126px] md:text-[86px]   font-semibold ">
            We Do It All
          </div>
          {/* <div className="text-right py-1">Fully Insured</div> */}

          <ul className="text-sm mx-10 bg-yellow-600 px-4 md:px-10 py-4 md:py-5 text-black   md:text-2xl flex flex-row md:flex-row space-x-2 md:space-x-4 space-y-0 md:space-y-0 md:items-center items-center justify-around  ">
            <li className="flex items-center space-x-2">
              <GiRoundStar /> <span>Commercial</span>
            </li>

            <li className="flex items-center space-x-2">
              <GiRoundStar />
              <span> Industrial</span>
            </li>

            <li className="flex items-center space-x-2">
              <GiRoundStar />
              <span> Residential</span>
            </li>
          </ul>
          <ul className="text-md  mt-2 mx-10   font-semibold flex space-x-2 justify-around md:justify-center flex-wrap md:flex-nowrap  ">
            {Object.keys(services).map((service, idx) => (
              <ServiceLink label={service.split(" ")[0]} url={service} />
            ))}
          </ul>
        </div>

        <div className="w-full flex flex-col md:flex-row  items-center justify-center md:space-x-4 space-y-4 md:space-y-0 mt-10">
          <a
            href="#contact"
            className="w-48 md:w-64 border-2 border-yellow-700 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black  transition-all px-4 md:px-6 py-2 md:py-4 text-2xl md:text-3xl flex items-center justify-center space-x-4"
          >
            <MdEmail /> <span>Get Quote</span>
          </a>
          <button className="w-48 md:w-64 border-2 border-yellow-600 hover:border-yellow-400 text-black bg-yellow-600 hover:bg-yellow-400  transition-all px-4 md:px-6 py-2 md:py-4 text-2xl md:text-3xl flex items-center justify-center space-x-4">
            <MdPhone /> <span>Schedule</span>
          </button>
        </div>
      </div>
      {/*  */}
      {/* <span>email: chilldc37@icloud.com</span>
        <span>CELL: 609-417-0688</span>
        <span>PHN 856-221-3494</span>
        <span>FAX 856-221-349</span> */}
    </header>
  );
};

const ServiceLink = ({ url, label }) => {
  return (
    <li className="relative group md:w-full text-center">
      <span className=" absolute left-0  w-0 h-full bg-yellow-600   group-hover:w-full transition-all "></span>
      <a href={`#${url}`} className="test h-full w-full px-2 select-none">
        {label}
      </a>
    </li>
  );
};
