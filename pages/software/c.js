import Head from "next/head";
import styles from "@/styles/Music.module.css";
import Navigation from "../components/navigation";
import { useState, useEffect } from "react";
import Gallery from "../components/gallery";
import Footer from "../components/footer";

const data =
[
  {name:"MetroSim", video:"/PurpleSummer.mov", title: "Song of Purple Summer",caption: "Video Credit: Amelia Estrada. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"December 2021 - March 2022", org: "Tufts' Department of Theater, Dance, and Performance Studies", descr:"Matthew's first collegiate music directorship"},
  {name:"Six Degrees", video:"/DontDoSadness.mov", title: "Don't Do Sadness/Blue Wind",caption: "Video Credit: Amelia Estrada. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"December 2021 - March 2022", org: "Tufts' Department of Theater, Dance, and Performance Studies", descr:"Matthew's first collegiate music directorship"},
]

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
      <Navigation></Navigation>
    <body>
      <div className={styles.projectsDetail}>
        <Gallery data={data}></Gallery>
      </div>
      <Footer></Footer>
    </body>
    </>
  );
}
