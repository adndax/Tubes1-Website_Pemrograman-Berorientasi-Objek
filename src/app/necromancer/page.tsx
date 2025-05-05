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
        {/* Top row with horizontal connections */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <SkillCircle label="GO OUT SON!"  />
          <Image src="/cabang-lurus.png" alt="-" width={100} height={100} />
          <SkillCircle label="SURVIVE, PLEASE!"  />
          <Image src="/cabang-lurus.png" alt="-" width={100} height={100} />
          <SkillCircle label="TO EASY"  />
          <Image src="/cabang-lurus.png" alt="-" width={100} height={100} />
          <SkillCircle label="FINAL FATALITY" />
        </div>

        {/* Connect top row to middle */}
        <div className="flex justify-center">
          <Image src="/cabang-t.png" alt="↓" width={100} height={100} />
        </div>

        {/* Bottom row with horizontal connection */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <SkillCircle label="FINE I'LL STOP"  />
          <Image src="/cabang-lurus.png" alt="-" width={100} height={100} />
          <SkillCircle label="PUNISH THEM"  />
        </div>
      </div>
    </div>
  );
}