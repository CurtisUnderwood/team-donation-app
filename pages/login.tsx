import Head from "next/head";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import LogoutButton from "@/components/LogoutButton";
import LoginButton from "@/components/LoginButton";

const LoginPage: React.FC = () => {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>Log In - TeamEarth</title>
      </Head>
      {user ? <LogoutButton /> : <LoginButton />}
    </>
  );
};

export default LoginPage;
