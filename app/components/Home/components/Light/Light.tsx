import images from "@/configs/images";
import Image from "next/image";
import React from "react";

export default function Light() {
  return (
    <div className="center-content">
      <Image width={70} height={70} alt={"light"} src={images.home.light} />
      {/* <div className="light" /> */}
    </div>
  );
}
