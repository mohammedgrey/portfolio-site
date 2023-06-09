"use client";
import rives from "@/configs/rives";
import { useRive } from "rive-react";

export default function LoadingPage() {
  const { RiveComponent } = useRive({
    src: rives.loading,
    animations: "load",
    autoplay: true,
  });

  return (
    <div className="center-content">
      <RiveComponent
        style={{ width: "700px", maxWidth: "100%", height: "400px" }}
      />
    </div>
  );
}
