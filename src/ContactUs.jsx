import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = ({ contact }) => {
  const [isSent, setSent] = React.useState(false);
  const [error, setError] = React.useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_bea44be", "template_au7qqoo", form.current, "s39AgGgv6MEx1QD8R").then(
      (result) => {
        console.log(result.text);
        setSent(true);
      },
      (error) => {
        console.log(error.text);
        setError(error.text);
      }
    );
  };


  return (
    <section id="contact" className="bg-gray-600 py-10">
      <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
            <div className="text-gray-700 mt-8">
              Hate forms? Send us an{" "}
              <a href={`mailto:${contact.email}`} className="underline">
                email
              </a>{" "}
              instead.
            </div>
          </div>
          <div className="mt-8 text-center"></div>
        </div>
        {error && <div>Email not sent: {error}</div>}
        {isSent && <div>Thank you, your email was sent!</div>}
        {!isSent && !error && 
        <form className="" ref={form} onSubmit={sendEmail}>
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
            <input
              name="user_name"
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
              />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input
              name="user_email"
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
              name="message"
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
          </div>
          <div className="mt-8">
            <input
              type="submit"
              value="Send Message"
              className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              />
          </div>
        </form>
            }
      </div>
    </section>
  );
};
