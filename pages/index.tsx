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
      <div className="flex justify-center mt-6 gap-6">
        <GameBox
          title="MEMORY MATCH MAYHEM"
          imageSrc="/logo.png"
          color="forest-green"
        />
        <GameBox
          title="TOTAL TRIVIA TRIUMPH"
          imageSrc="/logo.png"
          color="light-blue"
        />
        <GameBox
          title="MATH MASTERY MISSION"
          imageSrc="/logo.png"
          color="light-purple"
        />
      </div>
      <div>
        <Link href="/games">
          <button
            className={`mt-4 bg-white border-2 border-forest-green hover:bg-forest-green hover:text-white text-forest-green font-bold py-2 px-4 rounded-3xl`}
          >
            View All Games
          </button>
        </Link>
      </div>
    </main>
  );
}
