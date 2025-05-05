import Image from "next/image";
import { notFound } from "next/navigation";
import { skills, SkillId } from "../../../../data/data";

export default function SkillDetail({ params }: { params: { id: string } }) {
  const id = params.id as SkillId;
  const skill = skills[id];

  if (!skill) return notFound();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-10 text-center flex flex-col items-center">
      {/* Logo at the top */}
      <Image
        src="/logo.png"
        alt="Purry Leveling Logo"
        width={100}
        height={100}
        className="mb-4"
      />

      <div className=" flex flex-col gap-5 py-35">
        <h1 className="text-3xl text-[#C89055] uppercase text-center tracking-widest mt-4 font-press">
            {skill.name}
        </h1>

        <p className="max-w-xl font-pixelify text-sm text-[#DDDDDD] leading-relaxed">
            {skill.description}
        </p>
      </div>

    </div>
  );
}