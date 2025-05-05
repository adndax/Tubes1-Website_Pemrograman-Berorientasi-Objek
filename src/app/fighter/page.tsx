'use client';

import Image from "next/image";
import SkillCircle from "../../component/SkillCircle";

export default function FighterSkillTree() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6 sm:p-12 flex flex-col items-center gap-8 font-press">
      {/* Header */}
      <div className="w-full flex justify-between items-start">
        <div className="flex items-center gap-2">
          <Image src="/icon_fighter.png" alt="Fighter" width={100} height={100} />
          <span className="text-lg text-[#FFD5A4] font-press">Fighter</span>
        </div>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>

      {/* Title */}
      <h1 className="text-3xl text-[#C89055] uppercase text-center tracking-widest mt-4">
        Skill Path
      </h1>

      {/* Skill Tree Layout - Top half */}
      <div className="relative flex flex-col items-center gap-8 mt-6">
        {/* Top row with horizontal connections */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <SkillCircle label="DONT RUN"  id="dont-run" />
          <Image src="/cabang-t.png" alt="-" width={100} height={100} />
          <SkillCircle label="HEAVY LEFT PUNCH"  id="heavy-left-punch" />
          <Image src="/cabang-lurus.png" alt="-" width={100} height={100} />
          <SkillCircle label="BLACK DRAGON FORM" id="black-dragon-form" />
        </div>

        {/* Connect top row to middle row */}
        {/* <div className="flex justify-center">
          <Image src="/cabang-t.png" alt="↓" width={100} height={100} />
        </div> */}

        {/* Middle row with horizontal connection */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <SkillCircle label="DIVINE JUDGMENT" id="divine-judgment" />
          <Image src="/cabang-t.png" alt="-" width={100} height={100} />
          <SkillCircle label="NEVER COMING BACK"  id="never-coming-back" />
        </div>
        
        {/* Connect middle row to bottom */}
        {/* <div className="flex justify-center">
          <Image src="/cabang-t.png" alt="↓" width={100} height={100} />
        </div>
         */}
        {/* Bottom node */}
        <div className="flex justify-center">
          <SkillCircle label="THE DAY HAS COME" id="the-day-has-come" />
        </div>
      </div>
    </div>
  );
}