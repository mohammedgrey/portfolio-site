export type ProjectType = {
  id: string;
  title: string;
  type: string;
  link?: string;
  image: string;
  containImage?: boolean;
  details: {
    brief: string;
    techs: string[];
    git?: {
      client?: string;
      server?: string;
      both?: string;
    };
    API?: string;
    carousel?: string[];
    PDF?: string;
  };
};
