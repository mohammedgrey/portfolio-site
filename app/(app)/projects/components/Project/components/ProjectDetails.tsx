import { ProjectType } from "@/(app)/projects/types/common";
import { capitalize } from "@/helpers";
import { FC, Fragment } from "react";
import {
  AiFillGithub,
  AiOutlineLink,
  AiFillAndroid,
  AiFillApple,
  AiFillApi,
} from "react-icons/ai";
import { BiExtension, BiGitBranch } from "react-icons/bi";
import { BsFilePdf } from "react-icons/bs";
import { MdClose, MdSettingsSuggest } from "react-icons/md";
import ButtonLink from "./ButtonLink";
import styles from "./styles.module.scss";

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
          <MdClose size={24} />
        </button>
      </div>
      <p className={styles.brief}>{project.details.brief}</p>
      <div className={styles.links}>
        <ButtonLink
          Icon={AiOutlineLink}
          title={"Website"}
          link={project.link}
        />
        <ButtonLink Icon={AiFillApi} title={"API"} link={project.details.API} />
        <ButtonLink
          Icon={BiExtension}
          title={"Extension"}
          link={project.details.extension}
        />
        <ButtonLink
          Icon={AiFillApple}
          title={"IOS"}
          link={project.details.ios}
          color="#000000"
        />
        <ButtonLink
          Icon={AiFillAndroid}
          title={"Android"}
          link={project.details.android}
          color="#7cb342"
        />
        <ButtonLink
          Icon={BsFilePdf}
          title={"Document"}
          link={project.details.PDF}
          color="#ea4335"
        />
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
