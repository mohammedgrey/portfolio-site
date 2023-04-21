import { generateCircularPoints } from "@/app/components/frameworks/helpers";

export const technologies: {
  name: string;
  icon: string;
  position: readonly [number, 0, number];
}[] = generateCircularPoints(10).map((position) => ({
  name: "React",
  icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  position,
}));
