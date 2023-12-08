/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const EmailSubscription = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-zinc-700">
        <div className="p-2 bg-zinc-800 rounded-xl space-y-2">
          {/* Container for the Image */}
          <div>
            <img
              src="/image.jpg"
              alt=""
              className="h-80 hover:scale-105 duration-200 rounded-xl"
            />
          </div>
          {/* Container for the content */}
          <div className="p-8">
            <div className="flex flex-col space-y-4">
              <div className="font-serif text-white text-xl text-center">
                Get diet and fitness tips in your inbox
              </div>

              <div className="font-sans text-white text-sm max-w-xs text-center">
                Eat better and exercise better. Sign up for the Diet&Fitness
                newsletter.
              </div>

              <input
                type="email"
                className="bg-zinc-800 text-sm border border-zinc-600 px-4 py-3 text-white placeholder:text-xs placeholder:text-center focus:outline-none"
                placeholder="Enter your email address"
              />

              <div className="bg-lime-400 py-2 px-4 rounded-lg text-zinc-700 text-center hover:bg-lime-700 hover:text-white">
                Subscribe
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
