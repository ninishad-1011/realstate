import AgentsCard from '@/agent';
import React from 'react';

export default function page() {
  return (
    <div>
      <div className="container mx-auto mt-10 mb-10">
        {/* Header Section */}
        <div className="border-l-4 border-green-500 text-black mb-20">
          <h1 className="text-black text-6xl font-bold px-6 py-3">
            Our Amazing Agents
          </h1>
          <p className="text-gray-500 px-7 py-2">Agents List</p>
        </div>

        {/* Content Section */}
        <div>
         <AgentsCard/>
        </div>
      </div>
    </div>
  );
}
