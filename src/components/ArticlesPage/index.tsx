import React from "react";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

import { ArticleEntity} from "generated/graphql";
import ATemplate from './ATemplate';

type TArticlesPage = {
  desc: string;
  articles: ArticleEntity[];
};

function ArticlesPage({ desc, articles }: TArticlesPage) {
  const { user: user } = useAppSelector(isUser);

  // console.log(articles);

  return (
    <ATemplate id={user?.id as string} description={desc} articles={articles} />
  );
}

export default ArticlesPage;
