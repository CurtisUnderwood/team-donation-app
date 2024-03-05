import Link from "next/link";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import getScore from "./GetScore";
import { db } from "@/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

async function checkEntryAndAddIfNotExists(uniqueId: string): Promise<void> {
  const docRef = doc(db, "yourCollectionName", uniqueId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    await setDoc(docRef, { score: 0 });
    // console.log(`New entry created for ${uniqueId} with score 0.`);
  } else {
    // console.log(`Entry for ${uniqueId} already exists.`);
  }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userScore, setUserScore] = useState(0);

  const { user } = useUser();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsAuthenticated(!!user);
    if (user) {
      const firebaseName = user.username ?? user.nickname;
      if (firebaseName) {
        checkEntryAndAddIfNotExists(firebaseName.toString()).catch(
          console.error
        );
      }
    }
  }, [user]);

  if (user) {
    getScore(user)
      .then((score) => {
        setUserScore(Number(score));
      })
      .catch((error) => {
        console.error("Error fetching user score:", error);
      });
  }

  return (
    <>
      <nav className="text-forest-green py-4 shadow-md font-varela">
        <div className="grid grid-cols-3 ml-10">
          <div className="col-span-1 items-center">
            {!isOpen && ( // Display the links when the menu is closed
              <ul className="hidden md:flex space-x-4 mt-3">
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
          </div>
          <div className="mx-auto col-span-1">
            <Link href="/">
              <img src="/logo.png" alt="Logo" className="h-12" />
            </Link>
          </div>
          <div className="col-span-1 space-x-4 text-right">
            <div className="inline border rounded-full p-2 px-6">
              <img src="/tree-icon.png" alt="Tree Icon" className="w-6 h-6 inline" />
              <p className="text-forest-green inline font-bold text-right ml-2">
                {userScore.toFixed(2)}
              </p>
            </div>
            <div className="hidden md:inline space-x-4">
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
        </div>
        {/* Mobile view menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4 text-center font-bold">
              <li className="hover:bg-forest-green hover:text-white cursor-pointer p-2">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:bg-forest-green hover:text-white cursor-pointer p-2">
                <Link href="/games" >Games</Link>
              </li>
              <li className="hover:bg-forest-green hover:text-white cursor-pointer p-2">
                <Link href="/leaderboard">Leaderboard</Link>
              </li>
              <li className="hover:bg-forest-green hover:text-white cursor-pointer p-2">
                <Link href="/">Blog</Link>
              </li>
              <li className="hover:bg-forest-green hover:text-white cursor-pointer p-2">
                <Link href="/profile">Profile</Link>
              </li>
              <li className="hover:bg-forest-green hover:text-white cursor-pointer p-2">
                <Link href="/api/auth/logout">Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <div className="w-full bg-forest-green text-white font-varela p-2 text-center">
        <p>
          Remember to disable ad-block in order to support our tree
          planting mission!
        </p>
      </div>
    </>
  );
};

export default Navbar;
