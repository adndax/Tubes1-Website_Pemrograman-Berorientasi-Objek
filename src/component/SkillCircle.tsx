"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type SkillCircleProps = {
  label: string;
  id: string; // unique skill ID
};

export default function SkillCircle({ label, id }: SkillCircleProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/skill/${id}`)}
      className="relative w-[158px] h-[158px] flex items-center justify-center text-center cursor-pointer hover:scale-105 transition-transform"
    >
      <Image
        src="/lingkaran.png"
        alt="Skill Circle"
        fill
        className="object-contain pointer-events-none"
      />
      <span
        className="absolute text-[#FFD5A4] text-[10px] leading-tight font-press uppercase drop-shadow-[2px_2px_0_#000] max-w-[120px] px-1 whitespace-pre-line break-words"
        style={{ textShadow: "2px 2px 0 #000" }}
      >
        {label}
      </span>
    </div>
  );
}