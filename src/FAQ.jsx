import { Disclosure, Transition } from "@headlessui/react";
import { MdArrowForward } from "react-icons/md";

export const FAQ = ({ questions }) => {
  return (
    <section id="faq" className="w-full container mx-auto px-4 py-16 transition-all">
      <h2 className="text-3xl text-center py-5 font-bold">Frequently Asked Questions</h2>

      <div className="p-2">
        {questions.map(({ question, answer }, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <>
                <Question question={question} open={open} />
                <Answer answer={answer} />
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
};

const Question = ({ question, open }) => {
  return (
    <Disclosure.Button className="my-4 flex border justify-between w-full px-4 py-2 text-2xl font-medium text-left text-indigo-900  rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
      <span>{question}</span>
      <MdArrowForward className={`${open ? "transform rotate-90" : ""} w-10 h-10 text-indigo-500 transition-all`} />
    </Disclosure.Button>
  );
};

const Answer = ({ answer }) => {
  return (
    <Transition
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Disclosure.Panel className="px-4 py-6  text-xl text-gray-500">{answer}</Disclosure.Panel>
    </Transition>
  );
};
