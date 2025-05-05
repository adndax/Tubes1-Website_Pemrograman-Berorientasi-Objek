'use client';

import Image from "next/image";
import SkillCircle from "../../component/SkillCircle";
import InfoButton from "@/component/Info";

export default function MageSkillTree() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6 sm:p-12 flex flex-col items-center gap-8 font-press">
      {/* Header */}
      <div className="w-full flex justify-between items-start">
        <div className="flex items-center gap-2">
          <Image src="/icon_mage.png" alt="Mage" width={100} height={100} />
          <span className="text-lg text-[#FFD5A4] font-press">Mage</span>
        </div>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>

      {/* Title */}
      <h1 className="text-3xl text-[#C89055] uppercase text-center tracking-widest mt-4">
        Skill Path
      </h1>

      {/* Skill Tree Layout */}
      <div className="relative flex flex-col items-center gap-8 mt-6">
        {/* Top node */}
        <SkillCircle label="POKER FACE"  id="poker-face" />

        {/* Horizontal skill path */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <SkillCircle label="CURSE OF CROW" id="curse-of-crow" />
          <Image src="/cabang-lurus.png" alt="-" width={100} height={100} />
          <SkillCircle label="BLACK SHOES" id="black-shoes" />
          <Image src="/cabang-tiga.png" alt="-" width={100} height={100} />
          <SkillCircle label="EVER PLAY THIS GAME BEFORE?"  id="ever-play-this-game-before" />
          <Image src="/cabang-lurus.png" alt="-" width={100} height={100} />
          <SkillCircle label="AVADA KEDAVRA"  id="avada-kedavra" />
        </div>

        {/* Bottom node */}
        <SkillCircle label="ONE DAY OR DAY ONE" id="one-day-or-day-one" />
      </div>
      <InfoButton/>
    </div>
  );
}