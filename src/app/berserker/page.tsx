

'use client';

import Image from "next/image";
import SkillCircle from "../../component/SkillCircle";

export default function BerserkerSkillTree() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6 sm:p-12 flex flex-col items-center gap-8 font-press">
      {/* Header */}
      <div className="w-full flex justify-between items-start">
        <div className="flex items-center gap-2">
          <Image src="/icon_berserker.png" alt="Berserker" width={100} height={100} />
          <span className="text-lg text-[#FFD5A4] font-press">Berserker</span>
        </div>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>

      {/* Title */}
      <h1 className="text-3xl text-[#C89055] uppercase text-center tracking-widest mt-4">
        Skill Path
      </h1>

      {/* Skill Tree Layout */}
      <div className="relative flex flex-col items-center gap-8 mt-6">
        {/* Top Row */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <SkillCircle label="HUH" id="huh" />
          <Image src="/cabang-t.png" alt="-" width={100} height={100} />
          <SkillCircle label="FUN, I GUESS?" id="fun-i-guess" />
          <Image src="/cabang-t.png" alt="-" width={100} height={100} />
          <SkillCircle label="TASTE OF KILLING" id="taste-of-killing" />
          <Image src="/cabang-lurus.png" alt="-" width={100} height={100} />
          <SkillCircle label="MEET YOU AT HELL" id="meet-you-at-hell" />
        </div>
        
        {/* T-connections from top to bottom row */}
        <div className="grid grid-cols-2 gap-40">
          {/* Left T-connection */}
          <div className="flex flex-col mr-24 " >
          {/* <Image src="/cabang-t.png" alt="-" width={100} height={100} /> */}
            <SkillCircle label="I GIVE UP" id="i-give-up" />
          </div>
          
          {/* Right T-connection */}
          <div className="flex flex-col mr-32">
            {/* <Image src="/cabang-t.png" alt="↓" width={100} height={100} /> */}
            <SkillCircle label="HAD NO CHANCE" id="had-no-chance" />
          </div>
        </div>
      </div>
    </div>
  );
}