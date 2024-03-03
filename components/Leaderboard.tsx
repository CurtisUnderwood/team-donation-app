import React, { useState } from 'react';

interface User {
  username: string;
  treesPlanted: number;
}

const Leaderboard: React.FC = () => {
  const initialPageSize = 20; // Number of users to display initially
  const usersPerPage = 10; // Number of users per page

  const [currentPage, setCurrentPage] = useState(1);

  // Predefined list of users
  const allUsers: User[] = [
    { username: 'plantlover123', treesPlanted: 50 },
    { username: 'greenThumb87', treesPlanted: 40 },
    { username: 'ecowarrior22', treesPlanted: 30 },
    { username: 'treehugger99', treesPlanted: 25 },
    { username: 'forestkeeper55', treesPlanted: 20 },
    { username: 'arbordayfanatic', treesPlanted: 18 },
    { username: 'savethetrees101', treesPlanted: 15 },
    { username: 'naturelover365', treesPlanted: 12 },
    { username: 'gogreen2022', treesPlanted: 10 },
    { username: 'planterextraordinaire', treesPlanted: 8 },
    { username: 'sustainableSally', treesPlanted: 45 },
    { username: 'greenGuru76', treesPlanted: 42 },
    { username: 'ecoEnthusiast99', treesPlanted: 39 },
    { username: 'forestFairy22', treesPlanted: 37 },
    { username: 'treeChampion47', treesPlanted: 35 },
    { username: 'plantProtector88', treesPlanted: 33 },
    { username: 'earthDefender55', treesPlanted: 31 },
    { username: 'natureNurturer42', treesPlanted: 28 },
    { username: 'greenGuardian79', treesPlanted: 26 },
    { username: 'ecoHero123', treesPlanted: 24 },
    { username: 'treeLover96', treesPlanted: 21 },
    { username: 'forestFriend22', treesPlanted: 19 },
    { username: 'sustainableSteve', treesPlanted: 17 },
    { username: 'greenGenius55', treesPlanted: 15 },
    { username: 'ecoActivist101', treesPlanted: 13 },
    { username: 'earthSaver33', treesPlanted: 11 },
    { username: 'natureNinja77', treesPlanted: 9 },
    { username: 'greenQueen88', treesPlanted: 7 },
    { username: 'ecoChampion22', treesPlanted: 5 },
    { username: 'treeSaver99', treesPlanted: 3 },
    { username: 'plantProtector44', treesPlanted: 1 }
  ];

  // Calculate the index range of users to display based on the current page
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;

  // Slice the users array to get the users for the current page
  const usersToShow = allUsers.slice(startIndex, endIndex);

  const totalPages = Math.ceil(allUsers.length / usersPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg font-poppins text-forest-green">
      <h2 className="text-xl font-bold mb-4">Top 10 Planters</h2>
      <hr className="border-b my-2" />
      <table className="w-full">
        <tbody>
          {usersToShow.map((user, index) => (
            <tr key={index} className="border-b">
              <td className={`py-2 rounded-full w-6 text-center`}></td>
              <td className="py-2 pl-2">{user.username}</td>
              <td className="py-2 text-right">{user.treesPlanted}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-3 py-1 mx-1 rounded-full focus:outline-none ${
                currentPage === index + 1 ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-400'
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
