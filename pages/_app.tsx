import "@/styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { GoogleAnalytics } from '@next/third-parties/google'

// import { auth, db } from "@/firebaseConfig";
// import { onAuthStateChanged } from "firebase/auth";
// import { doc, getDoc, setDoc } from "firebase/firestore";

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       // User is signed in, see if we need to create a Firestore record
  //       const userRef = doc(db, "users", user.uid);

  //       const docSnap = await getDoc(userRef);
  //       if (!docSnap.exists()) {
  //         // User record doesn't exist, create one
  //         await setDoc(userRef, {
  //           email: user.email,
  //           trees_planted: 0, // Initial score
  //         });
  //       }
  //     }
  //   });

  //   // Cleanup subscription on unmount
  //   return () => unsubscribe();
  // }, []);

  return (
    <>
      <UserProvider>
        <Navbar />
        <Component {...pageProps} />
        <GoogleAnalytics gaId="G-28QGSENJ0L" />
        <Footer />
      </UserProvider>
    </>
  );
}
