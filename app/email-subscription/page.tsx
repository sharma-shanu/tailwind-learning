/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const EmailSubscription = () => {
  return (
    <>
      {/* Big container div */}
      <div className="flex justify-center items-center h-screen bg-zinc-700">
        <div className="p-2 bg-zinc-800 rounded-xl space-y-2 flex flex-col items-center justify-center md:flex-row">
          {/* Container for the Image */}
          <div className="">
            <img
              src="/image.jpg"
              alt=""
              className="object-cover h-80 hover:scale-105 duration-200 rounded-xl md:rounded-r-none md:h-60"
            />
          </div>
          {/* Container for the content */}
          <div className="p-8 md:p-4">
            <div className="flex flex-col space-y-4">
              <div className="font-serif text-white text-xl text-center">
                Get diet and fitness tips in your inbox
              </div>

              <div className="font-sans text-white text-sm max-w-xs text-center">
                Eat better and exercise better. Sign up for the Diet&Fitness
                newsletter.
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-x-2 ">
                <input
                  type="email"
                  className="bg-zinc-800 text-sm border border-zinc-600 px-4 py-3 text-white placeholder:text-xs placeholder:text-center focus:outline-none"
                  placeholder="Enter your email address"
                />

                <div className="bg-lime-400 py-3 px-4 rounded-lg text-sm text-zinc-700 text-center duration-200 hover:bg-lime-700 hover:text-white md:py-3 hover:cursor-pointer">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailSubscription;

// TODO: Make the container in such a way
