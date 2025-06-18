import Head from "next/head";
import styles from "@/styles/Music.module.css";
import Navigation from "../components/navigation";
import { useState, useEffect } from "react";
import Categories from "../components/categories";
import Footer from "../components/footer";
import Statistics from "../components/statistics";
import Image from "next/image";
import music from "../../public/music.png"
import musicText from "../../public/Musician-Text.png"

const BLUE = "#272466";
const GREEN = "#03725B";

const data = [
  {
    name: "Music Director",
    image: "test.jpg",
    link: "./music/music-director",
    caption:
      "Matthew's music directing credits include seven theatrical productions, one jazz big band, among other freelance projects. Click to view videos of Matthew's music directing accolades.",
  },
  {
    name: "Pianist",
    image: "piano.JPG",
    link: "./music/pianist",
    caption:
      "Matthew's piano performance spans genres from classical to jazz, rock, pop, and musical theater. Click to view Matthew's piano performances",
  },
  {
    name: "Organist",
    image: "Organist.png",
    link: "./music/organist",
    caption:
      "Matthew has served as an organist at the Congregational Church of Grafton, UCC., the Baptist Church of Grafton, and Tufts' protestant chaplaincy. Click to view videos of Matthew's Organ performances.",
  },
];
const stats = [
  {stat: "10 Years", title: "Piano Performance Experience"},
  {stat: "7", title: "Musical Theater Credits"},
  {stat: "50+", title: "Performances"},
  {stat: "2000+", title: "Audience Members Reached"},
];

export default function Home() {
  const [hydrated, setHydrated] = useState(false);
  const [color, setColor] = useState(GREEN);
  const [catsReveal, setCatsReveal] = useState(false);
  const [statsReveal, setStatsReveal] = useState(false);
  function reveal() {
    var reveals = document.querySelectorAll(
      `.${styles.backgroundLayer}, .${styles.stats}, .${styles.projectsOverview}`,
    );
    console.log(reveals);
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementBottom = reveals[i].getBoundingClientRect().bottom;
      var elementVisible = 100;
      if (
        elementTop < windowHeight - elementVisible &&
        elementBottom >= windowHeight - elementVisible
      ) {
        if (i == 1) {
          setColor(BLUE);
        } else {
          setColor(GREEN);
        }
        if (i == 1) {
          setStatsReveal(true);
        }
        if (i == 2) {
          setCatsReveal(true);
        }
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
        <div
          className={styles.scroller}
          id="scroller"
          onScroll={reveal}
          style={{
            backgroundColor: color,
            transition: "background-color 0.5s ease",
          }}
        >
          <div className={styles.backgroundLayer}>
            <Image className={styles.headerImage} src={music} placeholder="blur"/>
            <Image className={styles.pageTitle} src={musicText} placeholder="blur" priority/>
            <ul className={styles.pageSubtitle}>
              <li>Music Director</li>
              <li>Organist</li>
              <li>Pianist</li>
            </ul>
          </div>
          <div className={styles.stats}>
            <h2>Experience at a Glance</h2>
            <Statistics data={stats} reveal={statsReveal}></Statistics>
          </div>
          <div className={styles.projectsOverview}>
            <h2>Projects</h2>
            <Categories data={data} reveal={catsReveal}></Categories>
          </div>
          <Footer color={GREEN}></Footer>
        </div>
      </body>
    </>
  );
}
