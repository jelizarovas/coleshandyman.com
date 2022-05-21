import React from "react";

const links = [
  { label: "Top", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Faq", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const NavLink = (props) => {
  return (
    <li>
      <a
        className="block px-2  py-2 pr-4 pl-3 hover:text-white  rounded md:bg-transparent hover:md:text-blue-700 md:p-0 dark:text-white"
        aria-current="page"
        href={props.href}
        onClick={props.toggleOpen}
      >
        {props.label}
      </a>
    </li>
  );
};

export const Navbar = () => {
  const [isOpen, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((v) => !v);

  return (
    <nav className="w-full fixed z-50 top-0 bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
          <img src="/favicon.ico" className="mr-3 h-4 sm:h-4" alt="ColesHandyman.Com logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Coles Handyman</span>
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
          onClick={toggleOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`${isOpen ? "hidden" : ""}  w-6 h-6`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className={`${isOpen ? "" : "hidden"}  w-6 h-6`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`} id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {links.map((link, idx) => (
              <NavLink key={idx} {...link} toggleOpen={toggleOpen} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
