import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import axios from "axios";
const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;
const siteUrl: string | undefined = process.env.NEXT_PUBLIC_SITE_URL;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await axios({
    method: "GET",
    url: `${baseUrl}/courses`,
    headers: {
      Accept: "application/json",
    },
  });
  const courses = response.data.data;
  const fields: ISitemapField[] = courses.map(
    (item: {
      attributes: {
        slug: string;
        updatedAt: string;
      };
    }) => ({
      loc: `${siteUrl}/courses/${item?.attributes?.slug}`,
      lastmodified: item?.attributes?.updatedAt,
    })
  );

  return getServerSideSitemap(ctx, fields);
};

export default function site() {}
