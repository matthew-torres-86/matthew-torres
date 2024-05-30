import Head from "next/head";
import styles from "@/styles/Music.module.css";
import Navigation from "../components/navigation";
import { useState, useEffect } from "react";
import Gallery from "../components/gallery";
import Footer from "../components/footer";

const data =
[
  {name:"CharLinkedList/CharArrayList", code:"https://gist.github.com/matthew-torres-86/b7dc5e02f692ba583abbbf59779439ce.js", title: "CharLinkedList/CharArrayList",caption: "Author: Matthew Torres. DO NOT REPRODUCE", date:"March 2021", org: "Tufts' CS15: Data Structures and Algorithms", descr:"A C++ program that explores the performance of different string implementations",  thumbnail:"/ArrayListLinkedList.png"},
  {name:"MetroSim", code:"https://gist.github.com/matthew-torres-86/5c06537f938d4f4885b9cb8622807826.js", title: "MetroSim",caption: "Author: Matthew Torres. DO NOT REPRODUCE", date:"March 2021", org: "Tufts' CS15: Data Structures and Algorithms", descr:"A C++ program that uses data structures to simulate the operation of a train", thumbnail:"/metrosim.jpg"},
  {name:"Six Degrees", code:"", title: "MetroSim",caption: "Author: Matthew Torres. DO NOT REPRODUCE", date:"March 2021", org: "Tufts' CS15: Data Structures and Algorithms", descr:"A C++ program that uses data structures to simulate the operation of a train"},
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
