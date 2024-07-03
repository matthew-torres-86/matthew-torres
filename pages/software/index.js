import Head from "next/head";
import styles from "@/styles/Software.module.css";
import Navigation from "../components/navigation";
import Categories from "../components/categories";
import { useState, useEffect } from "react";
import Footer from "../components/footer";

const data =
[
  {name:"Web Programming", image:"JumboCode.png", link:"./software/web-programming"},
  {name:"Python", image:"python.jpeg", link:"./software/python"},
  {name:"C Languages", image:"tufts.jpeg", link:"./software/c"},
]

function reveal() {
  var reveals = document.querySelectorAll(`.${styles.headerImage}, .${styles.pageTitle}`);
  console.log(reveals);
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add(styles.active);
    }
  }
}

export default function Software() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  if (typeof window !== "undefined") {
      window.addEventListener("scroll", reveal);
    }
  return (
    <>
      <Head>
      <title>Software | Matthew Torres</title>
        <meta name="description" content="Matthew Torres Software Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Navigation active={1}></Navigation>
    <body>
    <div className={styles.scroller}>
      <div className={styles.backgroundLayer}>
          <img className={styles.headerImage} src="cs.png"/>
          <h1 className={styles.pageTitle}>Software Developer</h1>
      </div>
      <div className={styles.projectsOverview}>
        <Categories data={data}></Categories>
      </div>
      </div>
    </body>
    <Footer></Footer>
    </>
  );
}
