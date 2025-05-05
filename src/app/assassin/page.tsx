'use client';

import Image from "next/image";
import SkillCircle from "../../component/SkillCircle";
import InfoButton from "@/component/Info";

export default function AssassinSkillTree() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6 sm:p-12 flex flex-col items-center gap-8 font-press">
      {/* Header */}
      <div className="w-full flex justify-between items-start">
        <div className="flex items-center gap-2">
          <Image src="/icon_assassin.png" alt="Assassin" width={100} height={100} />
          <span className="text-lg text-[#FFD5A4] font-press">Assassin</span>
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
          <SkillCircle label="BLADE STORM" id="blade-storm" />
          <Image src="/cabang-t.png" alt="-" width={100} height={100} />
          <SkillCircle label="SHADOW KILL" id="shadow-kill" />
          <Image src="/cabang-lurus.png" alt="-" width={100} height={100} />
          <SkillCircle label="PLAY TILL DEAD" id="play-till-dead" />
        </div>
        
        {/* T-connection to middle */}
        {/* <div className="flex flex-col items-center -mb- mr-64  ">
          <Image src="/cabang-t.png" alt="↓" width={100} height={100} />
        </div> */}
        
        {/* Middle row with T-connections */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 ml-72">
          <SkillCircle label="BAD DREAMS" id="bad-dreams" />
          <Image src="/cabang-t.png" alt="-" width={100} height={100} />
          <SkillCircle label="ASSASSIN'S PRIDE" id="assassins-pride" />
          <Image src="/cabang-lurus.png" alt="-" width={100} height={100} />
          <SkillCircle label="CLUTCH IN THE GENE" id="clutch-in-the-gene" />
        </div>
        
        {/* T-connection to bottom */}
        {/* <div className="flex flex-col items-center -mb-4">
          <Image src="/cabang-lurus.png" alt="↓" width={100} height={100} />
        </div> */}
        
        {/* Bottom row */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 ml-72">
          <SkillCircle label="TASTE OF BLOOD" id="taste-of-blood" />
          <Image src="/cabang-lurus.png" alt="-" width={100} height={100} />
          <SkillCircle label="YOUR TIME HAS COME" id="your-time-has-come" />
        </div>
      </div>
      <InfoButton/>
    </div>
  );
}