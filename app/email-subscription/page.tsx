/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const EmailSubscription = () => {
  return (
    <>
      {/* Overall Container for the page */}
      <div className="flex justify-center items-center bg-zinc-700 h-screen">
        {/* Container for the card */}
        <div className="flex flex-col rounded-xl bg-zinc-800 p-2 md:flex-row space-y-4 pb-10">
          <img
            src="/image.jpg"
            alt="veg-bowl"
            className="rounded-xl h-80 md:h-60 md:rounded-l-xl md:rounded-r-none hover:scale-105 duration-200 object-fit"
          />
          <div className="mt-4 p-4 md:p-12 text-white text-center font-serif text-xl ">
            Get diet and fitness tips in your inbox.
          </div>
          <div className="text-white text-center text-sm max-w-sm">
            Eat better and exercise better. Sign up for the Diet&Fitness
            newsletter.
          </div>
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-zinc-800 border border-zinc-500 p-2 m-4 font-sans placeholder:text-center placeholder:text-sm focus:outline-none"
          />
          <button className="bg-lime-500 rounded-xl p-2 m-4 text-zinc-800 text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default EmailSubscription;

// TODO: Make the container in such a way
