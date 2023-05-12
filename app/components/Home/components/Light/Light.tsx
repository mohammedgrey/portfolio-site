import images from "@/configs/images";
import Image from "next/image";
import React from "react";

export default function Light() {
  return (
    <div>
      <Image
        width={70}
        height={70}
        alt={"light"}
        src={images.home.light}
        style={{ rotate: "-45deg", translate: "24px -24px" }}
      />
      {/* <div className="light" /> */}
    </div>
  );
}
