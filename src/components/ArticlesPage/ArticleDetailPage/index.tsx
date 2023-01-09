import React from "react";
import { useAppSelector } from "app/hooks";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { isUser } from "features/auth/selectors";

import { ArticleEntityResponseCollection } from "generated/graphql";
import ArticleSingleTemplate from './ArticleSingleTemplate';


function ArticleDetailPage(props: {
  props: {
    data: { articles: ArticleEntityResponseCollection };
    loading: boolean;
    error: any;
  };
}) {
  const { user: user } = useAppSelector(isUser);
  const { data } = props.props;
  const article = data?.articles?.data[0];
  // console.log(article);

  const imageurl = article?.attributes?.heroImage?.data?.attributes?.url;
  const author = article?.attributes?.author?.data?.attributes;
  const avatar = author?.avatar?.data?.attributes?.url;

  return (
      <ArticleSingleTemplate
        id={user?.id as string}
        title={article?.attributes?.title as string}
        image={imageurl as string}
        body={article?.attributes?.body as string}
        categories={[]}
        authorName={author?.fullName as string}
        authorJobTitle={author?.jobTitle as string}
        authorAvatar={avatar as string}
        createdAt={dayjs(article?.attributes?.createdAt).fromNow()}
      />
  );
}

export default ArticleDetailPage;
