
"use client";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white text-gray-700">
      {/* Top Bar */}
      <div className="border-b bg-gray-50 text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
   

          <div className="flex items-center gap-4">
            <button className="hover:text-blue-500">Track Order</button>
            <button className="hover:text-blue-500">Wishlist</button>
            <button className="hover:text-blue-500">Login</button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
            N
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">Nirvoya</h1>
            <p className="text-xs text-gray-500">Fashion Ecommerce</p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden flex-1 items-center md:flex">
          <div className="flex w-full overflow-hidden rounded-lg border">
            <select className="border-r bg-gray-50 px-4 text-sm outline-none">
              <option>All Categories</option>
              <option>Men</option>
              <option>Women</option>
              <option>Accessories</option>
            </select>

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
          <button className="relative rounded-full border p-3 hover:bg-gray-100">
            ❤
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
              2
            </span>
          </button>

          <button className="relative rounded-full border p-3 hover:bg-gray-100">
            🛒
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
              3
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Menu */}
      <nav className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <ul className="flex items-center gap-8 py-4 text-sm font-medium">
            <li className="cursor-pointer text-blue-500">Home</li>
            <li className="cursor-pointer hover:text-blue-500">Shop</li>
            <li className="cursor-pointer hover:text-blue-500">Categories</li>
            <li className="cursor-pointer hover:text-blue-500">Products</li>
            <li className="cursor-pointer hover:text-blue-500">Pages</li>
            <li className="cursor-pointer hover:text-blue-500">Blog</li>
            <li className="cursor-pointer hover:text-blue-500">Contact</li>
          </ul>

          <div className="hidden items-center gap-2 text-sm lg:flex">
            <span className="font-semibold text-blue-500">🔥</span>
            <p>Special Offer: Free Shipping Over $100</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
