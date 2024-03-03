import Link from "next/link";

// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-white py-6 border-t">
        <div className="container mx-auto flex items-center font-poppins">
          <div className="flex items-center">
            <img src="/logo.png" alt="Tree Logo" className="h-12 mr-6" />
          </div>
          <nav className="text-forest-green">
            <ul className="flex space-x-4">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/games">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/leaderboard">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="#">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  