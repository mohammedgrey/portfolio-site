"use client";
import rives from "@/configs/rives";
import useTheme from "@/hooks/useTheme";
import useUpdateEffect from "@/hooks/useUpdateEffect";
import { Theme } from "@/types";
import { useRive } from "rive-react";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  const { rive, RiveComponent } = useRive({
    src: rives.darkLight,
    animations: theme === Theme.LIGHT ? "idllOff" : "idllOn",
    autoplay: false,
  });

  useUpdateEffect(() => {
    rive?.play(theme === Theme.LIGHT ? ["Off", "idllOff"] : ["On", "idllOn"]);
  }, [theme, rive]);

  return (
    <div
      className="center-content"
      style={{ overflow: "hidden", height: "50px" }}
    >
      <RiveComponent
        style={{
          height: "80px",
          width: "80px",
          cursor: "pointer",
        }}
        onClick={() => {
          toggleTheme();
        }}
      />
    </div>
  );
}
