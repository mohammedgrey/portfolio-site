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

export const groupBy = <T = any>(array: T[], groupingField: keyof T) => {
  return array.reduce((acc, item) => {
    let key = item[groupingField] as string | number;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string, T[]>);
};
