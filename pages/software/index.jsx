import Head from "next/head";
import styles from "@/styles/Software.module.css";
import Navigation from "../components/navigation";
import Categories from "../components/categories";
import { useState, useEffect } from "react";
import Footer from "../components/footer";
import Statistics from "../components/statistics";
import Image from "next/image";
import cs from "../../public/cs.png"
import csText from "../../public/Software-Developer-Text.png"

const data = [
  {
    name: "Web Programming",
    image: "JumboCode.png",
    link: "./software/web-programming",
    caption:
      "Matthew has led one major web programming project (pictured), and has tackled several smaller independent projects. Check out Matthew's web programming projects here!",
  },
  {
    name: "Python",
    image: "coding.jpeg",
    link: "./software/python",
    caption:
      "Matthew is proficient in Python, and has worked on many Python projects both independently and for his former employers. You can see some of his work here!",
  },
  {
    name: "C Languages",
    image: "tufts.jpeg",
    link: "./software/c",
    caption:
      "At Tufts, Matthew took multiple courses in C and C++. Some of the work from these courses is on display here!",
  },
];
const stats = [
  {stat: "2 Years", title: "IT Experience"},
  {stat: "9", title: "Programming Languages"},
  {stat: "2000+", title: "End-users Served"},
  {stat: "30+", title: "Successful Projects"},
  {stat: "370+", title: "Github Contributions This Year"}
];

const BLUE = "#272466";
const GREEN = "#03725B";

export default function Software() {
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
        <title>Software | Matthew Torres</title>
        <meta name="description" content="Matthew Torres Software Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Navigation active={1} color={color}></Navigation>
      <body>
        <div
          className={styles.scroller}
          id="scroller"
          style={{
            backgroundColor: color,
            transition: "background-color 0.5s ease",
          }}
          onScroll={reveal}
        >
          <div className={styles.backgroundLayer}>
            <Image className={styles.headerImage} src={cs} placeholder="blur"/>
            <Image
              className={styles.pageTitle}
              src={csText}
              placeholder="blur"
            />
            <ul className={styles.pageSubtitle}>
              <li>HTML/CSS</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>C/C++</li>
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
          <Footer></Footer>
        </div>
        
      </body>
    </>
  );
}
