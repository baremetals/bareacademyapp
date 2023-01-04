import {
  ArticleEntity,
  ArticlesDocument,
  CoursesDocument,
} from "generated/graphql";

interface IfetchEntity {
  limit: number;
  start: number;
  gQDocument: GQDocument;
}

type GQDocument =
  | typeof ArticlesDocument
  | typeof CoursesDocument

type ArtEntity = {
  articles: {
    data: ArticleEntity[];
  };
};
type CourseEntity = {
  articles: {
    data: CourseEntity[];
  };
};


type ReturnedEntity = CourseEntity | ArtEntity;

export const useFetchEntities = ({
  limit,
  start,
  gQDocument,
}: IfetchEntity) => {
  const fetchDataOne = async ({
    start,
    limit,
    gQDocument,
  }: IfetchEntity): Promise<ReturnedEntity> => {
    console.log("Fetching really");
    const body = JSON.stringify({
      start,
      limit,
      gQDocument,
    });
    const res = await fetch("/api/entity", {
      method: "POST",
      body: body,
    });
    const entities = await res.json();
    return entities?.data;
  };
  return fetchDataOne({ start, limit, gQDocument });
};

export const fetchData = async ({
  start,
  limit,
  gQDocument,
}: IfetchEntity): Promise<ReturnedEntity> => {
  // console.log('Fetching really');
  const body = JSON.stringify({
    start,
    limit,
    gQDocument,
  });
  const res = await fetch("/api/entity", {
    method: "POST",
    body: body,
  });
  const entities = await res.json();
  // console.log(entities);
  return entities?.data;
};
