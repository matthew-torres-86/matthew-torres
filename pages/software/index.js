import Head from "next/head";
import styles from "@/styles/Software.module.css";
import Navigation from "../components/navigation";
import Categories from "../components/categories";
import { useState, useEffect } from "react";
import Footer from "../components/footer";

const data =
[
  {name:"Web Programming", image:"JumboCode.png", link:"./software/web-programming"},
  {name:"Python", image:"coding.jpeg", link:"./software/python"},
  {name:"C Languages", image:"tufts.jpeg", link:"./software/c"},
]

const BLUE = "#272466"
const GREEN = "#03725B"



export default function Software() {
  const [hydrated, setHydrated] = useState(false);
  const [color, setColor] = useState(GREEN)

  function reveal() {
    var reveals = document.querySelectorAll(`.${styles.backgroundLayer}, .${styles.projectsOverview}`);
    console.log(reveals);
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementBottom = reveals[i].getBoundingClientRect().bottom;
      var elementVisible = 100;
      if (elementTop < windowHeight - elementVisible && elementBottom >= windowHeight - elementVisible) {
        if(i==0){setColor(GREEN)}
        else{setColor(BLUE)}
      }
    }
  }
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
      <title>Software | Matthew Torres</title>
        <meta name="description" content="Matthew Torres Software Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Navigation active={1} color={color}></Navigation>
    <body>
    <div className={styles.scroller} onScroll={reveal}>
      <div className={styles.backgroundLayer}>
          <img className={styles.headerImage} src="cs.png"/>
          <img className={styles.pageTitle} src="Software-Developer-Text.png"></img>
          <ul className={styles.pageSubtitle}>
            <li>HTML/CSS</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>React.js/Next.js</li>
            <li>C/C++</li>
          </ul>
      </div>
      <div className={styles.projectsOverview}>
        <h2>Projects</h2>
        <Categories data={data}></Categories>
      </div>
      </div>
    </body>
    <Footer></Footer>
    </>
  );
}
