"use client";
import { useState } from "react";
import Image from "next/image";

export default function InfoButton() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button onClick={() => setShowPopup(true)}>
        <Image
          src="/info.png"
          alt="Info"
          width={60}
          height={60}
          className="hover:scale-110 transition-transform"
        />
      </button>

      {showPopup && (
        <div className="absolute bottom-20 right-0 bg-white text-black text-base px-6 py-4 rounded-xl shadow-xl max-w-[280px]">
          <p className="leading-snug">
            Skill path dibaca dari kiri ke kanan
          </p>
          <button
            className="block mt-2 text-sm text-red-600 underline"
            onClick={() => setShowPopup(false)}
          >
            Tutup
          </button>
        </div>
      )}
    </div>
  );
}