import React from 'react';
import Image from 'next/image'

const MeetTeam: React.FC = () => {
  return (
    <div className="flex justify-center text-forest-green font-poppins">
      <div className="flex flex-col w-1/8 mx-6">
      <Image src="/ryan.png" alt="Team Member 1" width={180} height={96} className="mb-2 rounded-xl" />
        <p className="text-left font-bold">Ryan Lachance</p>
        <p className="text-left">B.S.c Computer Science</p>
      </div>
      <div className="flex flex-col w-1/8 mx-6">
      <Image src="/curtis.png" alt="Team Member 1" width={180} height={96} className="mb-2 rounded-xl" />
        <p className="text-left font-bold">Curtis Underwood</p>
        <p className="text-left">B.S.c Computer Science</p>
      </div>
      <div className="flex flex-col w-1/8 mx-6">
      <Image src="/sat.png" alt="Team Member 1" width={180} height={96} className="mb-2 rounded-xl" />
        <p className="text-left font-bold">Satrajit Chatterjee</p>
        <p className="text-left">B.S.c Computer Science</p>
      </div>
    </div>
  );
};

export default MeetTeam;
