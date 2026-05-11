
"use client";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white text-gray-700">
  
      {/* Main Navbar */}
      <div className="mx-auto flex max-w-full items-center justify-between gap-6 px-4 py-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div>
            <img src="final png 1.png" alt="" />
          </div>
        </div>

        {/* Search */}
        <div className="hidden flex-1 items-center md:flex">
          <div className="flex w-full overflow-hidden rounded-lg border">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-3 outline-none"
            />

            <button className="bg-blue-500 px-6 text-white transition hover:bg-blue-600">
              Search
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
        <button className="relative flex items-center gap-2 p-3 hover:bg-gray-100 rounded-lg">
  
  {/* User Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.8}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
    />
  </svg>

  <h1>Login</h1>
</button>
          <button className="relative p-3 hover:bg-gray-100">
            ❤Wishlist
          </button>

          <button className="relative  p-3 hover:bg-gray-100">
            🛒mycart
          </button>

          
        </div>

      </div>

        {/* Bottom Menu */}
        
      <nav className=" bg-white">
        <div className="mx-auto max-w-7xl items-center justify-between px-4">
          <ul className="flex items-center pl-4.25 gap-10 py-4 font-poppins uppercase text-4 font-medium">
            <li className="cursor-pointer text-blue-500">Women's Fashion</li>
            <li className="cursor-pointer hover:text-blue-500">Men's Fashion</li>
            <li className="cursor-pointer hover:text-blue-500">Kid's Fashion</li>
            <li className="cursor-pointer hover:text-blue-500">Home & Lifestyle</li>
            <li className="cursor-pointer hover:text-blue-500">Arts & Crafts</li>
            <li className="cursor-pointer hover:text-blue-500">Computer & Electronics</li>
            <li className="cursor-pointer hover:text-blue-500">Food & Grocery</li>
          </ul>
        </div>
      </nav>

     
      
    </header>
  );
}
