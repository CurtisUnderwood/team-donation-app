import React, { useEffect, useState } from "react";
import FlipScoreboard from "./FlipScoreboard";
import Link from "next/link";
import fetchFirestoreData from "./GetAllUsers";

const Hero: React.FC = () => {
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchFirestoreData();
      const totalTrees = fetchedData.reduce((acc, curr) => {
        return acc + Number(curr.treesPlanted);
      }, 0);
      setTotalScore(Number(totalTrees.toFixed(0)));
    };
    fetchData();
  }, []);

  return (
    <div
      className="font-poppins bg-forest-green text-white py-24"
      style={{
        backgroundImage: "url('/hero-forest.png')",
        height: "600px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8">Play Games and Plant Trees.</h1>
        <h2 className="text-2xl font-semibold mb-8">
          Trees planted by players like you:
        </h2>
        <FlipScoreboard number={totalScore} />
        <Link href="/games">
          <button className="bg-white mt-6 text-forest-green font-bold py-3 px-10 rounded-3xl hover:bg-forest-green hover:text-white">
            Play Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
