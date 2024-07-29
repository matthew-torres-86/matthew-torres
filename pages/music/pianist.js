import Head from "next/head";
import styles from "@/styles/Music.module.css";
import Navigation from "../components/navigation";
import { useState, useEffect } from "react";
import Gallery from "../components/gallery";
import Footer from "../components/footer";

const data =
[
  {name:"June Senior Recital", video:"https://www.youtube.com/embed/cQ8fDn6VKw0?si=AjETLDfdLsQZ_DBl", title: "All The Wasted Time", descr:"Matthew accompanied talented vocalist June Beiser at their Senior Recital, playing a plethora of works by Musical Theater's most notorious writers"},
  {name:"June Senior Recital", video:"https://www.youtube.com/embed/M9YiCaWCkts?si=cA7FZuMP-TzuS4pr", title: "Send in the Clowns", descr:"Matthew accompanied talented vocalist June Beiser at their Senior Recital, playing a plethora of works by Musical Theater's most notorious writers"},
  {name:"June Senior Recital", video:"https://www.youtube.com/embed/H_K6eht2AL8?si=aPrsTu8JwIeoOSr4", title: "Franklin Shepard Inc.", descr:"Matthew accompanied talented vocalist June Beiser at their Senior Recital, playing a plethora of works by Musical Theater's most notorious writers"},
]

const BLUE = "#272466"

export default function Pianist() {
  const [hydrated, setHydrated] = useState(false);
  
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <>
      <Head>
        <title>Music | Matthew Torres</title>
        <meta name="description" content="Matthew Torres Music Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation color ={BLUE}></Navigation>
    <body>
      <div className={styles.projectsDetail}>
        <Gallery data={data}></Gallery>
      </div>
      <Footer></Footer>
    </body>
    </>
  );
}
