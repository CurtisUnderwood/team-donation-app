import React from 'react';

interface User {
  username: string;
  treesPlanted: number;
}

const Leaderboard: React.FC = () => {
  // Predefined list of users
  const users: User[] = [
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
  ];

  return (
    <div className="bg-white shadow-md p-6 rounded-lg font-poppins text-forest-green">
      <h2 className="text-xl font-bold mb-4">Top 10 Planters</h2>
      <hr className="border-b my-2" />
      <table className="w-full">
        <tbody>
          {users.map((user, index) => (
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
