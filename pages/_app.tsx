import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}
