import React, { useEffect, useState } from "react";
import fetchFirestoreData from "./GetAllUsers";

interface User {
  username: string;
  treesPlanted: number;
}

const Leaderboard: React.FC = () => {

  const [allUsers, setAllUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchFirestoreData();
      const fetchedDataSorted: User[] = fetchedData.sort(
        (a, b) => b.treesPlanted - a.treesPlanted
      );
      setAllUsers(fetchedDataSorted);
    };

    fetchData();
  }, []);

  const usersToShow = allUsers.slice(0, 10);

  return (
    <div className="bg-white md:mt-0 mt-4 shadow-md p-6 rounded-lg font-poppins text-forest-green min-w-[260px] ">
      <h2 className="text-xl font-bold mb-4">Top 10 Planters</h2>
      <hr className="border-b my-2" />
      <table className="w-full">
        <tbody>
          {usersToShow.map((user, index) => (
            <tr key={index} className="border-b">
              <td className={`py-2  rounded-full w-6 text-center`}></td>
              <td className="py-2 pl-2">{user.username}</td>
              <td className="py-2 text-right">{user.treesPlanted}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
