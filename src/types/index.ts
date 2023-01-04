import { ChangeEvent } from "react";
import { ArticleEntity, CourseEntity } from "generated/graphql";

export type uploadProps = {
  event: ChangeEvent<HTMLInputElement>;
  setUploadImg: React.Dispatch<React.SetStateAction<File | null>>;
  setDisplayImg: React.Dispatch<React.SetStateAction<string | null>>;
};

export type Entities = ArticleEntity | CourseEntity;