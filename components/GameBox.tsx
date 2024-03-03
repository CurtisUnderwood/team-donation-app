import Link from "next/link";

interface GameBoxProps {
    title: string;
    imageSrc: string;
    path: string;
    color: string;
  }
  
  const GameBox: React.FC<GameBoxProps> = ({ title, imageSrc, path, color }) => {
    return (
      <div className={`relative rounded-3xl p-6 flex flex-col items-start`} style={{ backgroundColor: `${color}` }}>
        <div className="text-left my-6 mx-6 font-poppins z-10">
          <h2 className="sm:text-center md:text-left md:text-3xl lg:text-5xl text-white font-bold mb-10">{title}</h2>
          <Link href={path}>
            <button style={{ color: `${color}`}}
            className={`mt-4 md:absolute border-2 border-white bottom-5 bg-white text-light-green font-bold py-2 px-4 rounded-3xl`}>
              Play Now
            </button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default GameBox;
  