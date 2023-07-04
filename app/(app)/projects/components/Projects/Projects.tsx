import { groupBy } from "@/helpers";
import { FC } from "react";
import { ProjectType } from "../../types/common";
import Project from "../Project/Project";
import styles from "./styles.module.scss";

type Props = {
  projects: ProjectType[];
};

const Projects: FC<Props> = ({ projects }) => {
  const projectsGroupedByYear = groupBy<ProjectType>(projects, "year");

  return (
    <div className={styles.container}>
      {Object.entries(projectsGroupedByYear)
        .sort(([yearA], [yearB]) => +yearB - +yearA) //From Recent to Old
        .map(([year, projects]) => {
          return (
            <div key={year} className={styles.container}>
              <p className={styles.yearText}>{year}</p>
              {projects.map((project) => {
                return <Project key={project.id} project={project} />;
              })}
            </div>
          );
        })}
    </div>
  );
};

export default Projects;
