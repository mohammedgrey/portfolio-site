"use client";
import { FC, Fragment, useRef } from "react";
import { ProjectType } from "../../types/common";
import Image from "next/image";
import styles from "./styles.module.scss";
import { classNames, closeModal, openModal } from "@/helpers";
import ProjectDetails from "./components/ProjectDetails";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  project: ProjectType;
};

const Project: FC<Props> = ({ project }) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const { image, title, type } = project;
  return (
    <Fragment>
      <div className={styles.card} onClick={() => openModal(modalRef)}>
        <div className={styles.imgBx}>
          <Image
            src={image}
            fill
            alt={title}
            className={styles.image}
            quality={100}
          />
        </div>
        <div className={styles.details}>
          <h2>
            {title}
            <br />
            <span>{type}</span>
          </h2>
        </div>
      </div>

      <dialog
        ref={modalRef}
        className={classNames(styles.dialog, "common-modal")}
      >
        <ProjectDetails
          project={project}
          onClose={() => closeModal(modalRef)}
        />
      </dialog>
    </Fragment>
  );
};

export default Project;
