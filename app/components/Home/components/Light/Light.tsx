import images from "@/configs/images";
import Image from "next/image";

export default function Light() {
  return (
    <div className="center-content">
      <Image width={70} height={70} alt={"light"} src={images.home.light} />
      <div
        style={{
          position: "fixed",
          background: `radial-gradient(700px circle at 50% 200px, var(--glow-color), transparent 50%)`,
          inset: 0,
          top: 0,
          zIndex: 100,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
