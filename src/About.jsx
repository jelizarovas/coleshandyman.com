import React from "react";

export const About = () => {
  return (
    <section
      id="about"
      className=" py-20 bg-indigo-50 bg-gradient-to-b from-black to-slate-900 text-white"
    >
      <h2 className="text-3xl text-center py-5 font-bold text-yellow-600">
        About Cole
      </h2>
      <div className="flex justify-end">
        <div className="flex flex-col justify-around container w-1/2  text-xs space-y-5 px-10 py-10">
          <p>
            As a kid I found enjoyment from fixing things others saw as broken.
          </p>
          <p>
            I took this passion with me and I started handyman work right out of
          </p>
          high school in 1978.
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
