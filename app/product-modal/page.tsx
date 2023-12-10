/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProductModal = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col bg-white p-12 rounded-xl shadow-lg md:flex-row space-y-4 md:space-y-0">
        {/* container for image */}
        <div className="flex justify-center">
          <img
            src="/headphone.png"
            alt="razer-kraken-headphone"
            className="h-48 object-contain hover:scale-105 duration-200"
          />
        </div>
        {/* container for content */}
        {/* 
          TODO: Weird behaviour when the parent is made md:text-left, why does the inline pill moves to the left when the content within it
          i.e. free shipping text should move to left, which is by default left, but in reality the actual div moves ?
        */}
        <div className="p-4 space-y-4 text-gray-800 text-center flex flex-col md:text-left">
          {/* pill */}
          <div>
            <div className="inline bg-black text-white text-md rounded-full py-2 px-4 mx-2">
              Free Shipping
            </div>
          </div>
          <div className="text-2xl">
            Razer Kraken Kitty Edt Gaming Headset Quartz
          </div>

          <div className="line-through text-lg text-gray-700"> $799</div>
          <div className="text-6xl font-bold"> $599</div>
          <div className="text-gray-400">
            This offer is valid until April 3rd or as long as stock lasts!
          </div>
          <div className="py-4 px-8 bg-blue-600 text-white rounded-xl text-center">
            Buy Now
          </div>

          <div className="flex flex-row items-center space-x-2">
            <div className="duration-200 hover:animate-ping rounded-full bg-green-500 w-3 h-3" />
            <div className="text-gray-800">50+ pcs. in stock</div>
          </div>
          <div className="space-y-4 flex flex-col md:flex-row md:space-y-0 md:space-x-4">
            <div className="border-2 border-gray-300 px-8 py-4 rounded-xl">
              Add to cart
            </div>
            <div className="border-2 border-gray-300 px-8 py-4 rounded-xl">
              Add to wishlist
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
