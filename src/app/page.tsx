import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center justify-start px-4 py-30 gap-8">
      <Image
        src="/logo.png"
        alt="Purry Leveling Logo"
        width={150}
        height={150}
        className="mb-2"
      />

      <h1 className="font-[var(--font-pressStart)] text-xl text-center uppercase tracking-widest text-[#DCA965]">
        Setiap Kekuatan Memiliki Asal-Usul
      </h1>

      <p className="font-[var(--font-pixelify)] text-xs sm:text-sm leading-relaxed max-w-3xl text-center">
        Dalam dunia yang dipenuhi darah, sihir, dan pengkhianatan, tidak ada kekuatan yang muncul begitu saja.
        Setiap skill adalah jejak langkah, setiap pilihan adalah luka, dan setiap akhir… adalah warisan dari masa lalu.

        <br/><br/>
        Telusuri sejarah mereka – para Fighter, Mage, Assassin, Berserker, dan Necromancer – dan pahami bahwa di balik setiap kekuatan...
        Tersembunyi cerita yang belum selesai.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {/* Kartu karakter */}
        {["berserker", "mage", "fighter", "necromancer", "assassin"].map((char) => (
          <div key={char} className="flex flex-col items-center">
            <Image
              src={`/${char}.png`} // contoh: public/characters/berserker.png
              alt={char}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
    </div>
  );
}