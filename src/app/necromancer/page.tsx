'use client';

import Image from "next/image";
import SkillCircle from "../../component/SkillCircle";

export default function NecromancerSkillTree() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6 sm:p-12 flex flex-col items-center gap-8 font-press">
      {/* Header */}
      <div className="w-full flex justify-between items-start">
        <div className="flex items-center gap-2">
          <Image src="/icon_necromancer.png" alt="Necromancer" width={100} height={100} />
          <span className="text-lg text-[#FFD5A4] font-press">Necromancer</span>
        </div>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>

      {/* Title */}
      <h1 className="text-3xl text-[#C89055] uppercase text-center tracking-widest mt-4">
        Skill Path
      </h1>

      {/* Skill Tree Layout */}
      <div className="relative flex flex-col items-center gap-8 mt-6">
        {/* Top row */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <SkillCircle label="GO OUT SON!" id="go-out-son" />
          <Image src="/cabang-lurus.png" alt="-" width={100} height={100} />
          <SkillCircle label="SURVIVE, PLEASE!" id="survive-please" />
          <Image src="/cabang-t.png" alt="-" width={100} height={100} />
          <SkillCircle label="TO EASY" id="to-easy" />
          <Image src="/cabang-t.png" alt="-" width={100} height={100} />
          <SkillCircle label="FINAL FATALITY" id="final-fatality" />
        </div>
        
        {/* T-connections to middle with horizontal connection */}
        {/* <div className="flex flex-col items-center">
          <Image src="/cabang-t.png" alt="↓" width={100} height={100} />
        </div>
         */}
        {/* Bottom row */}
        <div className="flex ">
        <div className=" items-center justify-center gap-2 sm:gap-4 ml-72 ">
          <SkillCircle label="FINE I'LL STOP" id="fine-ill-stop" />
          {/* <SkillCircle label="PUNISH THEM" id="punish-them" /> */}
        </div>
        <div className=" items-center justify-center gap-2 sm:gap-4 ml-24">
          {/* <SkillCircle label="FINE I'LL STOP" id="fine-ill-stop" /> */}
          <SkillCircle label="PUNISH THEM" id="punish-them" />
        </div>
        </div>
      </div>
    </div>
  );
}