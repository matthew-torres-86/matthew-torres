import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navigation from "./components/navigation";
import { useState, useEffect } from "react";
import Footer from "./components/footer";
import Categories from "./components/categories";

const BIO = (
  <div className={styles.biotext}>
    <p>
      Matthew Torres is a multi-faceted Software Engineer and Musician who holds
      a Bachelor's degree in Computer Science and Music from{" "}
      <a href="https://tufts.edu" target="_blank">
        Tufts University
      </a>
      . As a student in the{" "}
      <a href="https://engineering.tufts.edu/cs/" target="_blank">
        Tufts Department of Computer Science
      </a>
      , he served as an undergraduate teaching assistant for Web Programming
      (CS20), where he helped hundreds of students each year learn frontend and
      backend development techniques as well as simple database infrastructure.
      He went on to become a tech lead for{" "}
      <a href="https://jumbocode.org/" target="_blank">
        Jumbocode
      </a>
      , a student organization which delivers software projects to non-profit
      organizations. He applied skills learned through his studies as a
      two-summer intern at{" "}
      <a href="https://draper.com/" target="_blank">
        Draper
      </a>
      , where he delivered a dozen new features and improvements to Draper's
      Enterprise Software. To learn more about Matthew's Software Engineering
      work, view his <a href="/software">software portfolio</a>.
    </p>

    <p>
      Matthew is also an accomplished pianist, organist, music director, and
      composer. He served as Interim Organist and Choir Director at the{" "}
      <a href="https://uccgrafton.org" target="_blank">
        Congregational Church of Grafton (UCC)
      </a>
      , and has performed as an organist at the{" "}
      <a href="https://bcg1800.org" target="_blank">
        Baptist Church of Grafton
      </a>{" "}
      as well as{" "}
      <a href="https://chaplaincy.tufts.edu/" target="_blank">
        Tufts' Goddard Chapel
      </a>
      , and as a pianist at{" "}
      <a href="https://as.tufts.edu/music/" target="_blank">
        Tufts' Distler Hall
      </a>{" "}
      and countless other venues around Massachusetts. He has music directed
      seven theatrical productions, including Spring Awakening, Into the Woods,
      and Twelfth Night among others. He was also the President and Director of
      the{" "}
      <a href="https://www.instagram.com/tuftsfreshman15/" target="_blank"></a>
      Tufts' Freshman 15 Jazz Big Band. To see Matthew's musical work, view his{" "}
      <a href="/music" target="_blank">
        music portfolio
      </a>
      .
    </p>
  </div>
);

const data = [
  { name: "Software Portfolio", image: "JumboCode.png", link: "./software" },
  { name: "Music Portfolio", image: "piano.JPG", link: "./music" },
];

const GREEN = "#03725B";
const BLUE = "#272466";

export default function Home() {
  const [hydrated, setHydrated] = useState(false);
  const [color, setColor] = useState(GREEN);

  function reveal() {
    var reveals = document.querySelectorAll(
      `.${styles.backgroundLayer}, .${styles.biotext}, .${styles.pdf}, .${styles.portfolio}`,
    );
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementBottom = reveals[i].getBoundingClientRect().bottom;
      var elementVisible = 100;
      if (
        elementTop < windowHeight - elementVisible ||
        elementBottom <= windowHeight
      ) {
        reveals[i].classList.add(styles.active);
        if (i == 0 || i == 2) {
          setColor(GREEN);
        } else {
          setColor(BLUE);
        }
      }
    }
  }
  // const [displayedReference, setDisplayedReference] = useState(0);
  // setTimeout(()=>setDisplayedReference((displayedReference+1) % REFERENCES.length), 5000)

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
        <title>Home | Matthew Torres</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Navigation active={0} color={color}></Navigation>
      <body>
        <div
          className={styles.scroller}
          onScroll={reveal}
          style={{
            backgroundColor: color,
            transition: "background-color 0.5s ease",
          }}
        >
          <div className={styles.backgroundLayer}>
            <img className={styles.headerImage} src="Matthew Torres.png" />
            <img
              className={styles.pageTitle}
              src="Matthew-Torres-Text.png"
            ></img>
            <ul className={styles.pageSubtitle}>
              <li>Software Developer</li>
              <li>Musican</li>
              <li>Boston, MA</li>
            </ul>
          </div>
          {/* <div className={styles.references}>
        <p>{REFERENCES[displayedReference]}</p>
        <p>-{REFERENCES[displayedReference]}</p>
      </div> */}
          <div className={styles.bio}>
            <div>
              <h2 id="bio">Bio</h2>
              <img src="bio.jpeg" className={styles.bioimg}></img>
            </div>
            {BIO}
          </div>
          <div className={styles.resume}>
            <h2>Resume</h2>
              <embed
                className={styles.pdf}
                src="https://drive.google.com/file/d/1tXmrqTV1ngvva86c96wv1DGi3b4hQhAq/preview?usp=sharing"
                width="100%"
                height="500px"
              />
          </div>
          <div className={styles.portfolio}>
            <h2>View Portfolio</h2>
            <div className={styles.portfolioIcons}>
              <a href="/software">
                <img src="/icons/laptop-code-solid.svg"></img>
                <h3>Software</h3>
              </a>
              <a href="/music">
                <img src="/icons/music-solid.svg"></img>
                <h3>Music</h3>
              </a>
            </div>
          </div>
          <Footer color={BLUE}></Footer>
        </div>
      </body>
    </>
  );
}
