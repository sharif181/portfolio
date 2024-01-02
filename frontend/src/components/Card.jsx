"use client";
import Image from "next/image";

const Card = () => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg py-2 px-3 drop-shadow-2xl bg-slate-500">
      <div className="relative">
        <Image
          className="w-full"
          src="/images/sharifkhan.jpg"
          alt="blog"
          width={120}
          height={90}
        />
        <span className="absolute top-2 left-2 bg-red-400 text-white-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded dark:bg-blue-900 dark:text-blue-300">
          Default
        </span>
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  );
};

export default Card;
