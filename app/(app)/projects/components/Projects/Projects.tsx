import { FC } from "react";
import { ProjectType } from "../../types/common";
import Project from "../Project/Project";
import styles from "./styles.module.scss";

type Props = {
  projects: ProjectType[];
};

const Projects: FC<Props> = ({ projects }) => {
  return (
    <div className={styles.container}>
      {projects.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
    </div>
  );
};

export default Projects;
