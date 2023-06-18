"use client";
import rives from "@/configs/rives";
import useUpdateEffect from "@/hooks/useUpdateEffect";
import { FC, Fragment, useState } from "react";
import { useRive, useStateMachineInput } from "rive-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type Props = {
  links: { href: string; text: string }[];
};

const MobileMenu: FC<Props> = ({ links }) => {
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

  return (
    <Fragment>
      <MenuButton
        style={{ height: "40px", width: "40px", cursor: "pointer" }}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      />
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{
              ease: "easeInOut",
            }}
            style={{
              position: "fixed",
              bottom: "0px",
              right: "0px",
              left: "0px",
              zIndex: 100,
              backgroundColor: "var(--card-color)",
              padding: "var(--common-padding)",
              borderRadius: "32px 32px 0px 0px",
            }}
          >
            <ul>
              {links.map(({ href, text }) => (
                <Link
                  key={href}
                  href={href}
                  style={{ paddingBlock: "8px", display: "block" }}
                >
                  <li>{text}</li>
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default MobileMenu;
