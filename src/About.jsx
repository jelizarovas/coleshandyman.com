import React from "react";

export const About = () => {
  return (
    <section
      id="about"
      className=" py-20 bg-indigo-50 bg-gradient-to-b from-black to-slate-900 text-white flex flex-col items-center "
    >
      <h2 className="text-3xl text-center py-5 font-bold text-yellow-600">
        About Cole
      </h2>
      <div className="flex justify-around flex-col md:flex-row mx-auto ">
        <div className="md:mx-10 mx-auto my-4 md:my-0">
          <img
            src="/images/f3e3643b-5b2e-4eea-813c-9bc9386916d1.png"
            alt=""
            className="rounded shadow-xl max-h-48 md:max-h-96 aspect-auto"
          />
        </div>

        <div className="flex flex-col justify-around container  text-xs md:text-base space-y-2 px-4 py-0">
          <p>
            As a kid I found enjoyment from fixing things others saw as broken.
          </p>
          <p>
            I took this passion with me and I started handyman work right out of
            high school in 1978.
          </p>

          <p>
            I’ve been a licensed contractor since then and plan to keep going
            for years to come.
          </p>
          <p>My mission is to help people in need.</p>
          <p>
            I’m community focused and driven to do the best quality work for
            everyone.
          </p>
          <p>
            My work is lifetime guaranteed and there is no job to big or too
            small.
          </p>
          {/* <p>
            We do work for local judges, attorneys, professional athletes and
            more.
          </p> */}
        </div>
      </div>
    </section>
  );
};
