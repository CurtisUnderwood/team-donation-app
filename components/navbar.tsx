import Link from "next/link";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { user } = useUser();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user]);

  return (
    <>
    <nav className="text-forest-green font-semibold py-4 shadow-md">
      <div className="flex items-center ml-10">
        <div className="flex items-center">
          {!isOpen && ( // Display the links when the menu is closed
            <ul className="hidden md:flex space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/games">Games</Link>
              </li>
              <li>
                <Link href="/leaderboard">Leaderboard</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
            </ul>
          )}
        </div>
        <button onClick={toggleMenu} className="md:hidden">
          {/* Hamburger menu icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div className="mx-auto">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-12 pr-12" />
          </Link>
        </div>
        <div className="flex font-poppins items-center border-2 border-gray-200 rounded-full p-2 w-28 mr-6">
          <img src="/tree-icon.png" alt="Tree Icon" className="w-6 h-6" />
          <p className="text-forest-green font-bold text-right flex-grow mr-2">
            0
          </p>
        </div>
        <div className="flex items-center space-x-4">
          {!isAuthenticated ? (
            <>
              <Link href="/api/auth/login">
                <button className="bg-white text-forest-green border-2 border-forest-green rounded-3xl px-4 py-2 mr-10 hover:bg-forest-green hover:text-white">
                  Log In
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile">Profile</Link>
              <Link href="/api/auth/logout">
                <button className="bg-white text-forest-green border-2 border-forest-green rounded-3xl px-4 py-2 mr-10 hover:bg-forest-green hover:text-white">
                  Logout
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      {/* Mobile view menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/game">Games</Link>
            </li>
            <li>
              <Link href="/leaderboard">Leaderboard</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
    <div className="w-full bg-forest-green text-white font-poppins p-2 text-center">
        <p>Remember to disable ad-block in order to contribute to our tree planting mission!</p>
      </div>
    </>
  );
};

export default Navbar;
