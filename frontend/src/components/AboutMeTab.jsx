"use client";
import { useState } from "react";

const AboutMeTab = () => {
  const [selectedId, setSelectedId] = useState(1);

  const text = [
    { id: 1, content: "skills" },
    { id: 2, content: "certificate" },
    { id: 3, content: "problem solving" },
    { id: 4, content: "github" },
  ];

  const handleSwitch = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="flex flex-col justify-start">
      <ul className="flex gap-7 justify-start items-center">
        <li
          className={`py-2 px-4 rounded-md bg-gray-700 text-white drop-shadow-md cursor-pointer ${
            selectedId === 1 ? "border-b-4 border-rose-400" : ""
          }`}
          onClick={() => handleSwitch(1)}
        >
          Skills
        </li>
        <li
          className={`py-2 px-4 rounded-md bg-gray-700 text-white drop-shadow-md cursor-pointer ${
            selectedId === 2 ? "border-b-4 border-rose-400" : ""
          }`}
          onClick={() => handleSwitch(2)}
        >
          Certificates
        </li>
        <li
          className={`py-2 px-4 rounded-md bg-gray-700 text-white drop-shadow-md cursor-pointer ${
            selectedId === 3 ? "border-b-4 border-rose-400" : ""
          }`}
          onClick={() => handleSwitch(3)}
        >
          Problem Solving
        </li>
        <li
          className={`py-2 px-4 rounded-md bg-gray-700 text-white drop-shadow-md cursor-pointer ${
            selectedId === 4 ? "border-b-4 border-rose-400" : ""
          }`}
          onClick={() => handleSwitch(4)}
        >
          Github
        </li>
      </ul>
      {text.map((item) => (
        <div
          key={item.id}
          className={`mt-8 w-[511px] h-full py-6 px-4 rounded-md drop-shadow-2xl bg-slate-500 ${
            item.id === selectedId ? "visible" : "hidden"
          }`}
        >
          {item.id === selectedId && item.content}
        </div>
      ))}
    </div>
  );
};

export default AboutMeTab;
