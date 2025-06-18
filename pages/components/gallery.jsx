import styles from "@/styles/Gallery.module.css";
import { useState, useRef } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import Frame from "react-frame-component";
import Footer from "./footer";

const BLUE = "#272466";

export default function Gallery({ data }) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  if (typeof window !== "undefined") {
    const listener = () => {
      if (window.matchMedia(`(max-width: 885px)`).matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", listener);
  }

  if (data == null) {
    return <p>Component Not Found</p>;
  }
  var selectedCard = data[index];
  var numCards = data.length;

  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  const timerDelay = 12000;
  const timerRef = useRef(null);
  //function that resets timer whenever move left or right

  // const beginNewTimerInterval = (action) => {
  // if (timerRef.current) clearInterval(timerRef.current);
  //     timerRef.current = setInterval(action, timerDelay);
  // };

  const moveNext = () => {
    console.log("moving next", isPlaying);
    if (!isPlaying) setIndex(mod(index + 1, numCards));
    // beginNewTimerInterval(moveNext)
  };

  const moveBack = () => {
    if (!isPlaying) setIndex(mod(index - 1, numCards));
    // beginNewTimerInterval(moveNext)
  };

  const nextButton = () => {
    setIsPlaying(false);
    setIndex(mod(index + 1, numCards));
    // beginNewTimerInterval(moveNext)
  };
  const backButton = () => {
    setIsPlaying(false);
    setIndex(mod(index - 1, numCards));
    // beginNewTimerInterval(moveNext)
  };

  // beginNewTimerInterval(moveNext)
  return (
    <div
      className={styles.scroller}
      id="scroller"
      style={{ backgroundColor: BLUE }}
    >
      <div className={styles.projectsGallery}>
        <button className={styles.left} onClick={backButton}>
          <img src="/icons/chevron-left-solid.svg"></img>
        </button>
        <button className={styles.right} onClick={nextButton}>
          <img src="/icons/chevron-right-solid.svg"></img>
        </button>
        <div className={styles.card}>
          <div className={styles.full}>
            {selectedCard.video && (
              <div className={styles.video}>
                <iframe
                  src={selectedCard.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            )}
            {selectedCard.code && (
              <Frame
                style={{ width: "100%", height: "100%", border: "none" }}
                initialContent={`<!DOCTYPE html><html><head></head><body><script src="${selectedCard.code}"></script></body></html>`}
              ></Frame>
            )}

            {selectedCard.site && (
              <div className={styles.laptop}>
                <img
                  src={isMobile ? "/phone-frame.png" : "/laptop-frame.png"}
                ></img>
                <iframe src={selectedCard.site}></iframe>
              </div>
            )}
          </div>

          <div className={isPlaying ? styles.infoMinimized : styles.info}>
            <button
              className={styles.showInfo}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <img src="/icons/bars-solid.svg"></img>
            </button>
            <div className={styles.infoText}>
              <h2>{selectedCard.name}</h2>
              <p>"{selectedCard.title}"</p>
              <p>
                <b>Date:</b> {selectedCard.date}
              </p>
              <p>
                <b>Organization:</b> {selectedCard.org}
              </p>
              <p>
                <b>Description:</b> {selectedCard.descr}
              </p>
            </div>
          </div>
          <p className={styles.caption}>{selectedCard.caption}</p>
        </div>
      </div>
      <div className={styles.browse}>
        <h2>Browse by project:</h2>
        <div className={styles.thumbnails}>
          {data.map((d, i) => {
            if (d.thumbnail)
              return (
                <img
                  src={d.thumbnail}
                  onClick={() => {
                    setIndex(i);
                    setIsPlaying(false);
                    document
                      .getElementById("scroller")
                      .scrollTo({ top: 0, behavior: "smooth" });
                  }}
                ></img>
              );
          })}
        </div>
        <Footer color={BLUE}></Footer>
      </div>
    </div>
  );
}
