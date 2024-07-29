import Head from "next/head";
import styles from "@/styles/Music.module.css";
import Navigation from "../components/navigation";
import { useState, useEffect } from "react";
import Gallery from "../components/gallery";
import Footer from "../components/footer";

const data =
[
  {name:"June Senior Recital", video:"https://tufts.app.box.com/embed/s/b93oih36skuepx6e9il8laohpsxncuyu?", title: "All The Wasted Time", descr:"Matthew accompanied talented vocalist June Beiser at their Senior Recital, playing a plethora of works by Musical Theater's most notorious writers"},
  {name:"June Senior Recital", video:"https://tufts.app.box.com/embed/s/re5zxe88va2xch5mthd56cygiaqetbc3?", title: "Send in the Clowns", descr:"Matthew accompanied talented vocalist June Beiser at their Senior Recital, playing a plethora of works by Musical Theater's most notorious writers"},
  {name:"June Senior Recital", video:"https://tufts.app.box.com/embed/s/41jkhvt5oqya6ydjkokycb4s61u2cxmu?", title: "Franklin Shepard Inc.", descr:"Matthew accompanied talented vocalist June Beiser at their Senior Recital, playing a plethora of works by Musical Theater's most notorious writers"},
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
