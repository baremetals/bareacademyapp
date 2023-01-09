import React from "react";
import Dashboard from "components/Dashboard";
import { ArticleEntity } from "generated/graphql";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/LandingPage/Landing.module.css";
import ArticleBox from './ArticleBox';

type ATypeTemplate = {
  id: string;
  description: string;
  articles: ArticleEntity[];
};

const ATemplate = ({ id, description, articles }: ATypeTemplate) => {
    // console.log(articles[1])
  return (
    <Dashboard>
      <main>
        <article className={styles.pageHeroSection}>
          <div className={styles.pageHeroBg}>
            <Image
              layout="fill"
              alt="articles hero image"
              className={styles.pageHeroBgPic}
              src="/assets/images/courses.png"
            />
          </div>
          <div className={styles.pageHeroContent}>
            <div className={styles.container}>
              <div className={styles.pageHeroInfo}>
                <label>
                  Browse the articles for help with your studies or advice
                </label>
                <h1>Explore all our articles</h1>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </article>

        {/* <!-- breadcrumb --> */}
        <article className={styles.breadcrumb}>
          <div className={styles.container}>
            <ol>
              <li>
                <Link href={id ? "/home" : "/"}> Home</Link>
              </li>
              <li>
                <Link href="/articles">Articles</Link>
              </li>
            </ol>
          </div>
        </article>
        <article className={styles.coursesListSection}>
          <div className={styles.container}>
            <div className={styles.coursesListHeader}>
              <h2>Articles</h2>
            </div>
            <div className={styles.row}>
              {articles?.map((art) => (
                <ArticleBox
                  articleId={art.id as string}
                  slug={art?.attributes?.slug as string}
                  title={art?.attributes?.title as string}
                  image={
                    art?.attributes?.heroImage?.data?.attributes?.url as string
                  }
                  category={
                    art?.attributes?.category?.data?.attributes?.name as string
                  }
                  key={art.id}
                  createdAt={art?.attributes?.updatedAt}
                />
              ))}
            </div>
          </div>
        </article>
      </main>
    </Dashboard>
  );
};

export default ATemplate;
