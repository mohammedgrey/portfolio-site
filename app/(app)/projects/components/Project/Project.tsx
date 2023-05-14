import { FC } from "react";
import { ProjectType } from "../../types/common";
import Image from "next/image";
import styles from "./styles.module.scss";

type Props = {
  project: ProjectType;
};

const Project: FC<Props> = ({ project }) => {
  const { image, title, type } = project;
  return (
    <div className={styles.card}>
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
  );
};

export default Project;
