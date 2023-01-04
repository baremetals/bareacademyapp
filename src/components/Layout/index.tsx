import React, { ReactNode, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import NavBar from './NavBar';
import { useAppSelector } from 'app/hooks';
import { isUser } from 'features/auth';
import NavDropDown from 'components/NavDropDown';
const DynamicFooter: any = dynamic(() => import("./Footer"), {
  ssr: false,
});

type LayoutProps = {
  children?: ReactNode;
  title?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  image?: string;
  imageWidth?: string;
  imageHeight?: string;
  type?: string;
  pageUrl?: string;
  data?: string;
  keywords?: string;
  author?: string;
};

const Layout = ({
  children,
  title = `Bare Metals Aacademy | Discover courses for adults and kids`,
  image,
  imageHeight,
  imageWidth,
  pageUrl,
  type,
  data,
  metaDescription = `Welcome to Bare Metals Aacademy`,
  canonicalUrl,
  keywords,
  author,
}: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu: any = () => {
    setIsOpen(!isOpen);
  };
  const { user: user } = useAppSelector(isUser);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="max-image-preview:large" />
        {metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
        {keywords && <meta name="keywords" content={keywords}></meta>}
        {author && <meta name="author" content={author}></meta>}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

        {/* open-graph meta */}
        <meta property="og:title" content={title} key="title" />
        {metaDescription && (
          <meta property="og:description" content={metaDescription} />
        )}
        {image && <meta property="og:image" content={image} />}
        <meta property="og:image:width" content={imageWidth} />
        <meta property="og:image:height" content={imageHeight} />
        <meta property="og:type" content={type} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content={pageUrl} />

        {/* twitter card meta */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        {metaDescription && (
          <meta name="twitter:description" content={metaDescription} />
        )}
        {}
        {image && <meta name="twitter:image" content={image} />}

        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: data as string }}
        />
      </Head>
      {
        <>
          {!user?.id && (
            <>
              <NavBar toggle={toggleMenu} />
              <NavDropDown toggle={toggleMenu} isOpen={isOpen} />
            </>
          )}

          {children}
          {!user?.id && <DynamicFooter />}
        </>
      }
    </>
  );
};

export default Layout;
