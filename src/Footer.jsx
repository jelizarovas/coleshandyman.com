import React from "react";
import { MdEmail, MdFacebook, MdGroups, MdMenuBook, MdOutlineMap } from "react-icons/md";
import { FaPhone, FaRegClock, FaTwitter } from "react-icons/fa";
import { contact, social } from "./data";

export const Footer = () => {
  return (
    <footer
      className="bg-gray-600 flex  flex-col justify-around py-10  text-white"
      style={{ backgroundImage: 'url("/images/scissors-bg.jpg")', boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.9)" }}
    >
      <div className=" flex container  mx-auto flex-col lg:flex-row justify-around text-white py-3 px-10">
        <div className="pb-2 lg:w-1/4">
          <FooterHeader title="SERVICE AREA" Icon={MdOutlineMap} />
          <div className=" py-1 flex justify-between">
            <ul className="w-full">
              <li className="transition-all p-2 text-xl hover:bg-slate-500">New Jersey</li>
              <li className="transition-all p-2 text-xl hover:bg-slate-500">Pennsylvania</li>
              <li className="transition-all p-2 text-xl hover:bg-slate-500">New York</li>
              <li className="transition-all p-2 text-xl hover:bg-slate-500">Delaware</li>
            </ul>
          </div>
        </div>

        <div className="lg:w-1/4 pb-2 ">
          <FooterHeader title="social" Icon={MdGroups} />
          <div className="flex  my-3  text-xl mx-2 rounded  transition-all hover:bg-slate-500 ">
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex w-full py-3 px-4   items-center"
            >
              <MdFacebook className="mr-2" /> Facebook
            </a>
          </div>
          <div className="flex  my-3  text-xl mx-2 rounded  transition-all hover:bg-slate-500 ">
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex w-full py-3 px-4   items-center"
            >
              <FaTwitter className="mr-2" /> Twitter
            </a>
          </div>
        </div>

        <div className="mb-3">
          <FooterHeader title="operating hours" Icon={FaRegClock} />

          <div className="text-left py-4 px-4 text-xl relative">
            <ul>
              <li>9am - 5pm Regular</li>
              <li className=" py-4 text-xl relative">
                24 / 7 Emergencies <span className="text-green-500 absolute top-2 ml-2 ">●</span>
              </li>
            </ul>
          </div>
          <FooterHeader title="contact" Icon={MdMenuBook} />
          <div className=" pb-2 ">
            <ul className="list-unstyled flex flex-col space-y-4 justify-around py-6 text-xl px-6">
              <li className="flex">
                <FaPhone className="mr-2" />
                <a href={`tel:${contact.cell}`} className="text-white">
                  {contact.cell}
                </a>
              </li>
              <li className="flex">
                <MdEmail className="mr-2" />
                <a href={`mailto:${contact.email}`} className="text-white">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-5 text-muted">
        {contact.displayName} © 2022 {new Date().getFullYear() > 2022 && ` - ${new Date().getFullYear()}`} by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://jelizarovas.com"
          className="font-bold hover:underline ml-2 text-blue-200 hover:text-blue-400 transition-all"
        >
          jelizarovas.com
        </a>
      </div>
    </footer>
  );
};

const FooterHeader = ({ Icon, title, ...props }) => {
  return (
    <h5 className="uppercase px-4 pb-2 flex items-center space-x-2 text-2xl border-b border-dashed ">
      <Icon /> <span> {title} </span>
    </h5>
  );
};
