import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <main className="text-center">
      <Head>
        <title>TeamEarth</title>
      </Head>
      <Hero />
    </main>
  );
}
