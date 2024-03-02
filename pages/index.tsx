import Hero from "@/components/Hero";
import Head from "next/head";
import GameBox from "@/components/GameBox";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center">
      <Head>
        <title>TeamEarth</title>
      </Head>
      <Hero />
      <div className="flex justify-center mt-6 mx-20 gap-6">
        <GameBox
          title="MEMORY MATCH MAYHEM"
          imageSrc="/logo.png"
          path="/games/memory-match"
        />
        <GameBox
          title="TOTAL TRIVIA TRIUMPH"
          imageSrc="/logo.png"
          path="/games/memory-match"
        />
        <GameBox
          title="MATH MASTERY MISSION"
          imageSrc="/logo.png"
          path="/games/math-quiz"
        />
      </div>
      <div>
        <Link href="/games">
          <button
            className={`my-4 bg-white border-2 border-forest-green hover:bg-forest-green hover:text-white text-forest-green font-bold py-2 px-4 rounded-3xl`}
          >
            View All Games
          </button>
        </Link>
      </div>
    </main>
  );
}
