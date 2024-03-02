import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>TeamEarth</title>
      </Head>
      <div className="flex items-center ml-10 mt-10">
        {user ? (
          <div>Welcome {user.name}</div>
        ) : (
          <div>Please log in first!</div>
        )}
        !{/* Display user details */}
      </div>
    </>
  );
}
