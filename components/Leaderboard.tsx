import React, { useEffect, useState } from "react";
import fetchFirestoreData from "./GetAllUsers";

interface User {
  username: string;
  treesPlanted: string;
}

const Leaderboard: React.FC = () => {
  const initialPageSize = 20; // Number of users to display initially
  const usersPerPage = 10; // Number of users per page

  const [currentPage, setCurrentPage] = useState(1);
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
                currentPage === index + 1
                  ? "bg-gray-300"
                  : "bg-gray-200 hover:bg-gray-400"
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
