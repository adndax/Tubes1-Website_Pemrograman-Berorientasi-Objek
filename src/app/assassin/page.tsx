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
        {/* Top row of skills with connecting lines */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <SkillCircle label="HUH"  />
          <Image src="/cabang-lurus.png" alt="-" width={100} height={100} />
          <SkillCircle label="FUN, I GUESS?" />
          <Image src="/cabang-lurus.png" alt="-" width={100} height={100} />
          <SkillCircle label="TASTE OF KILLING" />
          <Image src="/cabang-lurus.png" alt="-" width={100} height={100} />
          <SkillCircle label="MEET YOU AT HELL" />
        </div>

        {/* Connecting vertical line */}
        <Image src="/cabang-t.png" alt="↓" width={100} height={100} />

        {/* Bottom row of skills */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <SkillCircle label="I GIVE UP"  />
          <Image src="/cabang-lurus.png" alt="-" width={100} height={100} />
          <SkillCircle label="HAD NO CHANCE"  />
        </div>
      </div>
    </div>
  );
}