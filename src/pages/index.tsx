import Head from "next/head";
import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";
import ServicesCard from "../components/ServiceCard"
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/MainSection/Data";
import { withApollo } from "utils/withApollo";
import { useNoAuth } from "lib/noAuth";
import NavBar from 'components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import Footer from 'components/Footer/Footer';
import NavDropDown from 'components/NavDropDown';
import { analytics, logEve } from "lib/admin";

function Home() {
  
  useNoAuth();
  const [isOpen, setIsOpen] = useState(false);

  // if (typeof window != undefined) {
  //   useEffect(() => {
  //     logEve(analytics, "homepage_visited");
  //   });
  // }
  useEffect(() => {
    
    logEve(analytics, "homepage_visited");
  })

  const toggle: any = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <title>Baretutorials</title>
        <meta
          name="description"
          content="Tutorial site for learning web and software development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavDropDown toggle={toggle} isOpen={isOpen} />
        <NavBar toggle={toggle} />
        <HeroSection />
        <MainSection {...homeObjOne} />
        <ServicesCard linkIid="featured" />
        <MainSection {...homeObjTwo} />
        <MainSection {...homeObjThree} />
        <Footer />
      </main>
    </>
  );
}
export default withApollo({ ssr: false })(Home);

