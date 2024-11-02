"use client";
import LinkIconButton from "@/components/LinkIconButton/LinkIconButton";
import { closeModal, openModal } from "@/helpers";
import { FC, Fragment, useRef } from "react";
import {
  AiFillGithub,
  AiOutlineLink,
  AiFillAndroid,
  AiFillApple,
} from "react-icons/ai";
import { BsFilePdf } from "react-icons/bs";
import { MdInfo } from "react-icons/md";
import { BiExtension } from "react-icons/bi";
import { ProjectType } from "../../types/common";
import ProjectDetails from "./components/ProjectDetails";
import styles from "./styles.module.scss";

type Props = {
  project: ProjectType;
};

const Project: FC<Props> = ({ project }) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const { title, type } = project;

  return (
    <Fragment>
      <div className={styles.card}>
        <div className={styles.details}>
          <div>
            <h2>{title}</h2>
            <p>{type}</p>
            <br />
            <div className={styles.iconButtons}>
              <LinkIconButton
                link={project.link}
                Icon={AiOutlineLink}
                title={"Website"}
              />
              <LinkIconButton
                link={project.details.android}
                Icon={AiFillAndroid}
                title={"Android"}
              />
              <LinkIconButton
                link={project.details.ios}
                Icon={AiFillApple}
                title={"IOS"}
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
              <LinkIconButton
                link={project.details.extension}
                Icon={BiExtension}
                title={"Extension"}
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
