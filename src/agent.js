'use client'
import React from "react";
import agentsData from "../data/bestagent.json"; 

// React Icons for social links
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function AgentsCard({ limit = 8 }) {
  const agents = agentsData.agents.slice(0, limit); // limit অনুযায়ী দেখাবে

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 sm:p-6">
      {agents.map((agent) => (
        <div
          key={agent.id}
          className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300"
        >
          <img
            src={agent.image}
            alt={agent.name}
            className="w-full h-64 sm:h-72 md:h-80 object-cover"
          />

          <div className="p-4">
            <h2 className="text-lg sm:text-xl md:text-xl font-semibold">{agent.name}</h2>
            <p className="text-gray-600 text-sm sm:text-base">{agent.designation}</p>
            <p className="text-gray-700 text-sm sm:text-base mt-1">📞 {agent.phone}</p>
            <p className="text-gray-700 text-sm sm:text-base">✉️ {agent.email}</p>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 mt-3 text-lg sm:text-xl text-gray-600">
              <a href={agent.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaFacebook />
              </a>
              <a href={agent.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaLinkedin />
              </a>
              <a href={agent.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <FaInstagram />
              </a>
              <a href={agent.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
