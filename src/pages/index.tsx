import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";
import ServicesCard from "../components/ServiceCard";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/MainSection/Data";
import { withApollo } from "utils/withApollo";
import { useNoAuth } from "lib/noAuth";

import Layout from 'components/Layout';
import { LandingPage } from 'components/LandingPage';

function Home() {
  useNoAuth();

  const description = `
      Baremetals Metals Academy is an online learning and teaching platform for program, web development and other technology skills.
    `;
  const url = "https://www.baremetals.io";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://www.baremetals.io",
    maintainer: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Baremetals Metals Academy",
      email: "info@baremetals.co.uk",
      sameAs: [
        "https://twitter.com/bareacademy_",
        "https://www.facebook.com/baremetals.academy",
        "https://www.tiktok.com/@bareacademy",
        "https://www.linkedin.com/company/bare-metals-academy",
        "https://www.instagram.com/bareacademy",
      ],
    },
  };
  return (
    <>
      <Layout
        title={"Bare Metals Aacademy | Online Courses"}
        metaDescription={description}
        canonicalUrl={url}
        pageUrl={url}
        // image={"/yung-buck.jpg"}
        data={JSON.stringify(structuredData)}
        imageHeight={"auto"}
        imageWidth={"100%"}
        type="home"
      >
        <main>
          {/* <HeroSection /> */}
          <LandingPage />
          {/* <MainSection {...homeObjOne} />
          <ServicesCard linkIid="featured" />
          <MainSection {...homeObjTwo} />
          <MainSection {...homeObjThree} /> */}
        </main>
      </Layout>
    </>
  );
}
export default withApollo({ ssr: false })(Home);
