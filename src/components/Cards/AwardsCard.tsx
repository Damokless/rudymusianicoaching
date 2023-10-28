"use client";

import { AwardsCard } from "@/interface/AwardsCard";
import Image from "next/image";
import { ReactNode } from "react";


export default function AwardsCard(props : AwardsCard) : ReactNode {
  return (
    <div className="relative flex  items-center rounded bg-[#3A3A3A]/50 bg-clip-border shadow">
    <div className=" flex  w-auto flex-row items-center">
    <div className="p-3 ">
      <Image src={props.image} alt="company logo" width={128} height={128} className="w-full h-full rounded" />
    </div>
    </div>
    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
    <h4 className="text-xl font-bold text-navy-700 text-white">{props.year}</h4>
    <p className="font-dm text-sm font-medium text-white">{props.url ? <a href={props.url}>{props.title}</a> : props.title}</p>
    </div>
</div>
  );
}
