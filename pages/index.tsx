import Hero from "@/components/Hero";
import Head from "next/head";
import GameBox from "@/components/GameBox";
import Link from "next/link";
import MeetTeam from "@/components/MeetTeam";
import Image from 'next/image'
import About from "@/components/About"

export default function Home() {
  return (
    <main className="text-center">
      <Head>
        <title>GameTrees</title>
      </Head>
      <Hero />
      <div className="flex justify-center mt-6 mx-20 gap-6">
        <GameBox
          title="MEMORY MATCH MAYHEM"
          imageSrc="/tree_memory.png"
          path="/games/memory-match"
          color="#8096CF"
        />
        <GameBox
          title="TOTAL TRIVIA TRIUMPH"
          imageSrc="/tree_trivia.png"
          path="/games/trivia"
          color="#C480CF"
        />
        <GameBox
          title="FRENCH FLASHCARD FRENZY"
          imageSrc="/tree_honhon.png"
          path="/games/french-quiz"
          color="#B1CF80"
        />
      </div>
      <div>
        <Link href="/games">
          <button
            className={`my-8 bg-white border-2 border-forest-green hover:bg-forest-green hover:text-white text-forest-green font-bold py-2 px-4 rounded-3xl`}
          >
            View All Games
          </button>
        </Link>
      </div>
      <div className="border-t py-8">
        <h1 className="text-3xl text-forest-green font-bold font-poppins mb-6">How it Works</h1>
        <About />
      </div>
      <div className="border-t py-8">
        <Image src="/logo.png" alt="Logo" width={40} height={40} className="mb-2 rounded-xl mx-auto" />
        <h1 className="text-3xl text-forest-green font-bold font-poppins mb-6">Meet the Team</h1>
        <MeetTeam />
      </div>     
    </main>
  );
}
