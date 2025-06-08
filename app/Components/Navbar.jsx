import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-16 px-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 shadow-md">
      
      {/* Logo + Title */}
      <div className="flex items-center space-x-3">
        <img src="/find.png" alt="Logo" width={35} height={35} />
        <h1 className="text-white text-xl font-bold tracking-wide">Lost & Found</h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-12">
        <li>
          <Link
            href="/About"
            className="text-white font-medium hover:text-yellow-200 transition duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/login"
            className="text-white font-medium bg-white/10 px-4 py-2 rounded hover:bg-white/20 transition duration-300"
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar ;

