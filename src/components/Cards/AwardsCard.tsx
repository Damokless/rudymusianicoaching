"use client";

import { AwardsCard } from "@/interface/AwardsCard";
import Image from "next/image";
import { ReactNode } from "react";
import awards from "@/data/awards.json"

export default function AwardsCard(): ReactNode {
  return (
    awards.map((award : AwardsCard) => (
      <div key={award.title} className="relative flex  items-center rounded bg-[#3A3A3A]/50 bg-clip-border shadow">
      <div className=" flex  w-auto flex-row items-center">
        <div className="p-3 ">
          <Image src={award.image} alt="company logo" width={128} height={128} className="w-full h-full rounded"
          />
        </div>
      </div>
      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <h4 className="text-xl font-bold text-navy-700 text-white">
          {award.year}
        </h4>
        <p className="font-dm text-sm font-medium text-white">
          {award.url ? <a href={award.url}>{award.title}</a> : award.title}
        </p>
      </div>
    </div>
    ))
  );
}
