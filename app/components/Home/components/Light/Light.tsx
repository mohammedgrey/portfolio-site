"use client";
import images from "@/configs/images";
import usePreferencesStore from "@/stores/usePreferencesStore";
import { Theme } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Light() {
  const LIGHT_SHADE = "rgba(12, 185, 238, 0.5)";
  const DARK_SHADE = "rgba(65,20,83,0.7)";
  const NEUTRAL_SHADE = "rgba(255, 255, 255, 0.5)";

  const { theme } = usePreferencesStore();
  const [color, setColor] = useState(NEUTRAL_SHADE);

  useEffect(() => {
    setColor(theme === Theme.DARK ? DARK_SHADE : LIGHT_SHADE);
  }, [theme]);

  return (
    <div className="center-content">
      <Image width={70} height={70} alt={"light"} src={images.home.light} />
      <div
        style={{
          position: "fixed",
          background: `radial-gradient(400px circle at 50% 300px, ${color}, transparent 50%)`,
          inset: 0,
          top: 0,
          zIndex: 100,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
