import { ProjectType } from "@/(app)/projects/types/common";
import { FC, Fragment } from "react";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { MdClose, MdSettingsSuggest } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import styles from "./styles.module.scss";
import { capitalize } from "@/helpers";

type Props = {
  project: ProjectType;
  onClose: () => void;
};

const ProjectDetails: FC<Props> = ({ project, onClose }) => {
  const gitRepos = Object.entries(project.details.git ?? {});
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>{project.title}</h1>
        <button className="icon-button" onClick={onClose}>
          <MdClose />
        </button>
      </div>
      <p className={styles.brief}>{project.details.brief}</p>
      <div>
        {project.details.API !== null && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.apiButton}
            href={project.details.API}
          >
            API
          </a>
        )}

        {project.details.PDF && (
          <a
            className={styles.pdfButton}
            target="_blank"
            rel="noopener noreferrer"
            href={project.details.PDF}
          >
            <BsFileEarmarkPdf style={{ marginRight: "5px" }} /> Report
          </a>
        )}
      </div>
      <h3>
        <MdSettingsSuggest /> Technologies
      </h3>
      <div>
        {project.details.techs.map((tech) => {
          return (
            <p key={tech} className={styles.tech}>
              {tech}
            </p>
          );
        })}
      </div>
      {Boolean(gitRepos.length) && (
        <Fragment>
          <h3>
            <AiFillGithub /> GitHub Repositories
          </h3>

          <div>
            {gitRepos.map(([repoName, repoLink]) => {
              return (
                <p
                  key={repoName}
                  onClick={() => {
                    window.open(repoLink);
                  }}
                  className={styles.repoButton}
                >
                  <BiGitBranch /> {capitalize(repoName)}
                </p>
              );
            })}
          </div>
        </Fragment>
      )}

      {/* {project.details.carousel && (
        <div
          style={{
            backgroundColor: "#f1f1f1",
            marginTop: "20px",
            border: "3px solid #333333",
          }}
        >
          <SlideShow images={project.details.carousel} />
        </div>
      )} */}
    </div>
  );
};

export default ProjectDetails;
