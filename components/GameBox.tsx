import Link from "next/link";
import Image from "next/image"

interface GameBoxProps {
    title: string;
    imageSrc: string;
    path: string;
    color: string;
  }
  
  const GameBox: React.FC<GameBoxProps> = ({ title, imageSrc, path, color }) => {
    return (
      <div className={`relative rounded-3xl p-6 flex flex-col items-start mt-6 min-w-[200px]`} style={{ backgroundColor: `${color}` }}>
        <div className="text-left my-6 mx-6 font-paytone z-10">
          <h2 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] sm:text-center md:text-left text-xl md:text-3xl lg:text-5xl text-white font-bold mb-10">{title}</h2>
          <Link href={path}>
            <button style={{ color: `${color}`}}
            className={`md:absolute border-2 border-white bottom-5 bg-white text-light-green font-bold py-2 px-4 rounded-3xl`}>
              Play Now
            </button>
          </Link>
        </div>
        <Image src={imageSrc} alt="Tree" width={260} height={96} className="mb-2 rounded-xl absolute -top-8 right-0" />
      </div>
    );
  };
  
  export default GameBox;
  