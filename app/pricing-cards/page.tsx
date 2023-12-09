const PricingCards = () => {
  return (
    <>
      <div className="bg-gray-800 p-8 flex flex-col min-h-screen justify-center items-center">
        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-4">
          {/* Card Container */}
          <div className="flex flex-col p-3 bg-gray-700 rounded-xl">
            <div className="py-4 px-8 bg-gray-800 rounded-t-xl border-b border-b-gray-500">
              <div className="p-4 text-white font-sans text-center uppercase">
                basic
              </div>
              <h2 className="p-4 text-white text-5xl font-serif text-center">
                100GB
              </h2>
              <div className="font-sans text-center text-white">
                $1.99/Month
              </div>

              <div className="px-8 mx-4 mt-4 mb-8 py-3 text-center text-white border border-violet-500 rounded-md cursor-pointer">
                Purchase
              </div>
            </div>
            <div className="py-4 px-8 bg-gray-800 rounded-b-xl text-white font-sans text-sm flex flex-col justify-center text-center">
              <div>100 GB of storage</div>
              <div>Option to add members</div>
              <div>Extra member benefits</div>
            </div>
          </div>

          {/* Card Container */}
          <div className="flex flex-col p-3 bg-violet-500 rounded-xl">
            <div className="py-4 px-8 bg-gray-800 rounded-t-xl border-b border-b-gray-500">
              <div className="p-4 text-white font-sans text-center uppercase">
                standard
              </div>
              <h2 className="p-4 text-white text-5xl font-serif text-center">
                200GB
              </h2>
              <div className="font-sans text-center text-white">
                $2.99/Month
              </div>

              <div className="px-8 mx-4 mt-4 mb-8 py-3 text-center text-white border bg-violet-500 border-violet-500 rounded-md cursor-pointer">
                Purchase
              </div>
            </div>
            <div className="py-4 px-8 bg-gray-800 rounded-b-xl text-white font-sans text-sm flex flex-col justify-center text-center">
              <div>200 GB of storage</div>
              <div>Option to add members</div>
              <div>Extra member benefits</div>
            </div>
          </div>
          {/* Card Container */}
          <div className="flex flex-col p-3 bg-gray-700 rounded-xl">
            <div className="py-4 px-8 bg-gray-800 rounded-t-xl border-b border-b-gray-500">
              <div className="p-4 text-white font-sans text-center uppercase">
                premium
              </div>
              <h2 className="p-4 text-white text-5xl font-serif text-center">
                2TB
              </h2>
              <div className="font-sans text-center text-white">
                $8.99/Month
              </div>

              <div className="px-8 mx-4 mt-4 mb-8 py-3 text-center text-white border border-violet-500 rounded-md cursor-pointer">
                Purchase
              </div>
            </div>
            <div className="py-4 px-8 bg-gray-800 rounded-b-xl text-white font-sans text-sm flex flex-col justify-center text-center">
              <div>2 TB of storage</div>
              <div>Option to add members</div>
              <div>Extra member benefits</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCards;
