import Head from "next/head";
import styles from "@/styles/Music.module.css";
import Navigation from "../components/navigation";
import { useState, useEffect } from "react";
import Categories from "../components/categories";
import Footer from "../components/footer";

const BLUE = "#272466"
const GREEN = "#03725B"

const data =
[
  {name:"Music Director", image:"test.jpg", link:"./music/music-director", caption: "Matthew's music directing credits include seven theatrical productions, one jazz big band, among other freelance projects. Click to view videos of Matthew's music directing accolades."},
  {name:"Pianist", image:"piano.JPG", link:"./music/pianist", caption: "Matthew's piano performance spans genres from classical to jazz, rock, pop, and musical theater. Click to view Matthew's piano performances"},
  {name:"Organist", image:"Organist.png", link:"./music/organist", caption: "Matthew has served as an organist at the Congregational Church of Grafton, UCC., the Baptist Church of Grafton, and Tufts' protestant chaplaincy. Click to view videos of Matthew's Organ performances."},
]

export default function Home() {
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
        <title>Music | Matthew Torres</title>
        <meta name="description" content="Matthew Torres Music Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Navigation color={color}></Navigation>
    <body>
      <div className={styles.scroller} onScroll={reveal} style={{backgroundColor:color}}>
      <div className={styles.backgroundLayer}>
          <img className={styles.headerImage} src="music.png"/>
          <img className={styles.pageTitle} src="Musician-Text.png"></img>
          <ul className={styles.pageSubtitle}>
            <li>Music Director</li>
            <li>Organist</li>
            <li>Pianist</li>
            
          </ul>
      </div>
      <div className={styles.projectsOverview}>
      <h2>Projects</h2>
        <Categories data={data}></Categories>
      </div>
      <Footer color={BLUE}></Footer>
      </div>
    </body>
    </>
  );
}
