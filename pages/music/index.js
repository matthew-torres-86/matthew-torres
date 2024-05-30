import Head from "next/head";
import styles from "@/styles/Music.module.css";
import Navigation from "../components/navigation";
import { useState, useEffect } from "react";
import Categories from "../components/categories";
import Footer from "../components/footer";


const data =
[
  {name:"Music Director", image:"test.jpg", link:"./music/music-director"},
  {name:"Pianist", image:"piano.JPG", link:"./music/pianist"},
  {name:"Organist", image:"Organist.png", link:"./music/organist"},
]

export default function Home() {
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
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Navigation></Navigation>
    <body>
      <div className={styles.backgroundLayer}>
          <img className={styles.headerImage} src="conducting.png"/>
          <h1 className={styles.pageTitle}>Musician</h1>
      </div>
      <div className={styles.projectsOverview}>
        <Categories data={data}></Categories>
      </div>
      <Footer></Footer>
    </body>
    </>
  );
}
