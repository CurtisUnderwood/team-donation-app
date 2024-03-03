import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import getScore from "@/components/GetScore";

export default function Profile() {
  const [userScore, setUserScore] = useState(0);

  const { user, error, isLoading } = useUser();
  const username: any = user?.username ?? user?.nickname;

  if (user) {
    getScore(user)
      .then((score) => {
        setUserScore(Number(score));
      })
      .catch((error) => {
        console.error("Error fetching user score:", error);
      });
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>Profile - GameTrees</title>
      </Head>

      {user ? (
        <div
          className="flex items-center justify-center w-full"
          style={{ height: "85vh" }}
        >
          <div className="w-1/2 flex flex-col items-center justify-center">
            <div className="bg-white p-6">
              <div className="text-center">
                <img
                  src={user.picture ?? ""}
                  alt="Profile"
                  className="w-48 h-48 rounded-full mx-auto border-4 border-black"
                />
                {username && (
                  <h1 className="text-4xl font-semibold mt-20">{username}</h1>
                )}
                <p className="text-gray-800 text-lg mt-6 mb-10">
                  <strong>Email:</strong> {user.email}
                </p>
              </div>
            </div>
            {/* Right Side - Image of Trees */}
          </div>
          <div className="w-1/2 flex flex-col justify-between bg-green-100 h-full border-l-4 border-green-800">
            <h1 className="text-center m-10 mt-20 h-full flex flex-col items-center justify-center text-3xl font-semibold">
              <div>{userScore} trees planted!</div>
              <div className="text-xl mt-5">(thats a lot of trees)</div>
            </h1>
            <img
              src="/profile_trees.png"
              alt="Trees"
              className="w-full object-cover"
              style={{ marginBottom: "0px" }}
            />
          </div>
        </div>
      ) : (
        <div>Please log in first!</div>
      )}
    </>
  );
}
