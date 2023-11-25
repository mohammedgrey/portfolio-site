"use client";

import { FC, useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";
import styles from "./styles.module.scss";

type Props = Readonly<{
  copyText?: string;
}>;

const CopyButton: FC<Props> = ({ copyText }) => {
  const [copied, setCopied] = useState(false);
  if (!copyText) return null;
  const Icon = copied ? FaCheck : FaCopy;

  return (
    <button
      className={styles.copyButton}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(copyText);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 500);
        } catch (err) {}
      }}
    >
      <Icon size={18} />
    </button>
  );
};

export default CopyButton;
