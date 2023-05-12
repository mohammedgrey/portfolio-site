import images from "@/configs/images";
import Image from "next/image";
import React from "react";

export default function Frame() {
  return (
    <div style={{ position: "relative" }}>
      <Image
        alt="Frame Outline"
        src={images.home.frame.outline}
        width={150}
        height={200}
      />
      <Image
        alt="Frame Photo"
        src={images.home.frame.photo}
        width={112}
        height={125}
        style={{
          position: "absolute",
          top: "60px",
          left: "20px",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
