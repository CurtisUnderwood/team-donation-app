import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center mx-5">
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/game">
            <p>Game</p>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <p>Profile</p>
          </Link>
        </li>
        <li>
          <Link href="/leaderboard">
            <p>Leaderboard</p>
          </Link>
        </li>  
        <li>
          <Link href="/login">
            <p>Login</p>
          </Link>
        </li>   
      </ul>
    </nav>
  );
};

export default Navbar;
