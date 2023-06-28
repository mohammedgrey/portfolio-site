"use client";
import rives from "@/configs/rives";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import useUpdateEffect from "@/hooks/useUpdateEffect";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useRef, useState } from "react";
import { useRive, useStateMachineInput } from "rive-react";

type Props = {
  links: { href: string; text: string }[];
};

const MobileMenu: FC<Props> = ({ links }) => {
  const pathname = usePathname();
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

  return (
    <div ref={menuRef}>
      <MenuButton
        style={{ height: "40px", width: "40px", cursor: "pointer" }}
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
              backgroundColor: "var(--card-color)",
              padding: "var(--common-padding)",
              borderRadius: "32px",
              overflow: "hidden",
            }}
          >
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              {links.map(({ href, text }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    paddingBlock: "8px",
                    paddingInline: "16px",
                    borderRadius: "16px",
                    display: "block",
                    boxShadow:
                      pathname === href ? "var(--common-shadow)" : "none",
                  }}
                >
                  <li>{text}</li>
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
