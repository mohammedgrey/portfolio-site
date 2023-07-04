"use client";
import rives from "@/configs/rives";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import useUpdateEffect from "@/hooks/useUpdateEffect";
import usePreferencesStore from "@/stores/usePreferencesStore";
import { Theme } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useRef, useState } from "react";
import { useRive, useStateMachineInput } from "rive-react";

type Props = {
  links: { href: string; text: string }[];
};

const MobileMenu: FC<Props> = ({ links }) => {
  const pathname = usePathname();
  const { theme } = usePreferencesStore();
  const { rive, RiveComponent: MenuButton } = useRive({
    src: rives.menu,
    stateMachines: "switch",
    autoplay: true,
  });

  const switchInput = useStateMachineInput(rive, "switch", "toggleX");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useUpdateEffect(() => {
    switchInput!.value = !switchInput!.value;
  }, [isMenuOpen]);

  useUpdateEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const menuRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  const [buttonFilter, setButtonFilter] = useState<string>();
  useEffect(() => {
    setButtonFilter(theme === Theme.DARK ? undefined : "brightness(20%)");
  }, [theme]);

  return (
    <div ref={menuRef}>
      <MenuButton
        style={{
          height: "40px",
          width: "40px",
          cursor: "pointer",
          filter: buttonFilter,
        }}
        onClick={() => {
          setIsMenuOpen((prev) => !prev);
        }}
      />
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            style={{
              position: "fixed",
              top: "86px",
              left: "16px",
              right: "16px",
              zIndex: 100,
              padding: "var(--common-padding)",
              borderRadius: "24px",
              overflow: "hidden",
            }}
          >
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {links.map(({ href, text }) => (
                <Link
                  className="prevent-select"
                  key={href}
                  href={href}
                  style={{
                    paddingBlock: "12px",
                    paddingInline: "16px",
                    borderRadius: "24px",
                    display: "block",
                    backgroundColor: "var(--background-color)",
                    boxShadow:
                      pathname === href
                        ? "var(--common-shadow)"
                        : "var(--card-shadow-hover)",
                  }}
                >
                  <li className="prevent-select">{text}</li>
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
