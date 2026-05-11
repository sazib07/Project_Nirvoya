
import React from 'react'

const Banner = () => {
  return (
    <div>
      <section className="max-w-[1320px] mx-auto px-4 mt-6">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

    {/* Left Big Banner */}
    <div className="lg:col-span-2 bg-[#F2F4F5] rounded-xl p-10 flex items-center justify-between">

      {/* Text */}
      <div className="space-y-4">
        <p className="text-primary font-medium">
          BEST DEALS
        </p>

        <h1 className="text-5xl font-bold leading-tight">
          Explore Men's <br /> Winter Collection
        </h1>

        <p className="text-gray-500 max-w-[400px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <button className="bg-primary text-white px-6 py-3 rounded-lg">
          SHOP NOW
        </button>
      </div>

      {/* Image */}
      <img
        src="image.png"
        alt=""
        className="w-[350px]"
      />
    </div>

    {/* Right Side */}
    <div className="flex flex-col gap-5">

      {/* Top Card */}
      <div className="bg-[#FFE7D6] rounded-xl p-5 h-[220px] relative overflow-hidden">

        <div className="space-y-2 z-10 relative">
          <p className="text-sm font-medium text-orange-500">
            NEW COLLECTION
          </p>

          <h2 className="text-2xl font-bold">
            Summer Sale
          </h2>
        </div>

        <img
          src="next.svg"
          alt=""
          className="absolute right-0 bottom-0 w-[150px]"
        />
      </div>

      {/* Bottom Card */}
      <div className="bg-[#EAF6FF] rounded-xl p-5 h-[220px] relative overflow-hidden">

        <div className="space-y-2 z-10 relative">
          <p className="text-sm font-medium text-primary">
            35% OFF
          </p>

          <h2 className="text-2xl font-bold">
            Fashion Beauty
          </h2>
        </div>

        <img
          src="final png 1.png"
          alt=""
          className="absolute right-0 bottom-0 w-[150px]"
        />
      </div>

    </div>
  </div>
</section>
    </div>
  )
}

export default Banner
