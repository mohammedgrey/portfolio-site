"use client";
import LinkIconButton from "@/components/LinkIconButton/LinkIconButton";
import { closeModal, openModal } from "@/helpers";
import Image from "next/image";
import { FC, Fragment, useRef } from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { BsFilePdf } from "react-icons/bs";
import { MdInfo } from "react-icons/md";
import { ProjectType } from "../../types/common";
import ProjectDetails from "./components/ProjectDetails";
import styles from "./styles.module.scss";

type Props = {
  project: ProjectType;
};

const Project: FC<Props> = ({ project }) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const { image, title, type } = project;

  return (
    <Fragment>
      <div className={styles.card}>
        <Image
          src={image}
          alt={title}
          className={styles.image}
          quality={50}
          width={150}
          height={150}
        />

        <div className={styles.details}>
          <div>
            <h2>
              {title}
              <br />
              <span>{type}</span>
            </h2>
            <div className={styles.iconButtons}>
              <LinkIconButton
                link={project.link}
                Icon={AiOutlineLink}
                title={"Website"}
              />
              <LinkIconButton
                link={
                  project.details.git?.both ??
                  project.details.git?.client ??
                  project.details.git?.server
                }
                Icon={AiFillGithub}
                title="Github Repository"
              />
              <LinkIconButton
                link={project.details.PDF}
                Icon={BsFilePdf}
                title={"PDF Document"}
              />
            </div>
          </div>
          <button
            onClick={() => openModal(modalRef)}
            className={styles.detailsButton}
          >
            <MdInfo size={18} /> Learn More
          </button>
        </div>
      </div>

      <dialog ref={modalRef} className="common-modal">
        <ProjectDetails
          project={project}
          onClose={() => closeModal(modalRef)}
        />
      </dialog>
    </Fragment>
  );
};

export default Project;
