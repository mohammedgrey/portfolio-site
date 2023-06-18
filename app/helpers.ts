import { MutableRefObject } from "react";

export const classNames = (...classes: string[]) => {
  return classes.join(" ");
};

export const capitalize = (str?: string) => {
  if (!str || typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const openModal = (
  modalRef: MutableRefObject<HTMLDialogElement | null>
) => {
  modalRef.current?.showModal();
};

export const closeModal = (
  modalRef: MutableRefObject<HTMLDialogElement | null>
) => {
  const dialog = modalRef.current;
  dialog?.close();
};
