import Head from "next/head";
import styles from "@/styles/Music.module.css";
import Navigation from "../components/navigation";
import { useState, useEffect } from "react";
import Gallery from "../components/gallery";
import Footer from "../components/footer";

const data = [
  {
    name: "Spring Awakening",
    video: "https://www.youtube.com/embed/dlskUu8449w?si=XO6cUUzXocBYEeju",
    title: "Song of Purple Summer",
    caption:
      "Video Credit: AE. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.",
    date: "December 2021 - March 2022",
    org: "Tufts' Department of Theater, Dance, and Performance Studies",
    descr: "Matthew's first collegiate music directorship",
    thumbnail: "/SpringAwakening.jpg",
  },
  {
    name: "Spring Awakening",
    video: "https://www.youtube.com/embed/hly_ouG6b_s?si=qLKRPhrFM9pfL2Ec",
    title: "Don't Do Sadness/Blue Wind",
    caption:
      "Video Credit: AE. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.",
    date: "December 2021 - March 2022",
    org: "Tufts' Department of Theater, Dance, and Performance Studies",
    descr: "Matthew's first collegiate music directorship",
  },
  {
    name: "Into The Woods",
    video: "https://www.youtube.com/embed/Bo8rOW3eNf4?si=JFnGqoNr5-HCzfwF",
    title: "Last Midnight",
    caption:
      "Video Credit: TG. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.",
    date: "September 2022 - December 2022",
    org: "Tufts' Torn Ticket II",
    descr:
      "This fantastic production was perhaps Matthew's most challenging music directing feat today. With an incredibly difficlt score coupled with musicans ranging in experience level, Matthew worked overtime to help everyone get the music performance ready.",
    thumbnail: "/IntoTheWoods.jpeg",
  },
  {
    name: "Into The Woods",
    video: "https://www.youtube.com/embed/NsNuLYDO4sw?si=0zKBNGus268iai2E",
    title: "Finale (In rehearsal)",
    caption:
      "Video Credit: TG. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.",
    date: "September 2022 - December 2022",
    org: "Tufts' Torn Ticket II",
    descr:
      "This fantastic production was perhaps Matthew's most challenging music directing feat today. With an incredibly difficlt score coupled with musicans ranging in experience level, Matthew worked overtime to help everyone get the music performance ready.",
  },
  {
    name: "Into The Woods",
    video: "https://www.youtube.com/embed/HlggX10VhhQ?si=yyHRVg1xXsYwFSSv",
    title: "Finale (Performance)",
    caption:
      "Video Credit: TG. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.",
    date: "September 2022 - December 2022",
    org: "Tufts' Torn Ticket II",
    descr:
      "This fantastic production was perhaps Matthew's most challenging music directing feat today. With an incredibly difficlt score coupled with musicans ranging in experience level, Matthew worked overtime to help everyone get the music performance ready.",
  },
  {
    name: "Little Women",
    video: "https://www.youtube.com/embed/LFgakTBF39Y?si=wzzRQUUqn75AI4j1",
    title: "Some Things Are Meant to Be",
    caption:
      "I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.",
    date: "April 2023",
    org: "Tufts' Torn Ticket II",
    descr: "This production of Little Women was put on with a 3 week timeline, and required efficient rehearsals. This is a clip from the sitzprobe, the first time actors and the band join together with Matthew at the helm",
    thumbnail: "/LittleWomen.jpeg",
  },
  {
    name: "Little Women",
    video: "https://www.youtube.com/embed/C1GNixfF8tY?si=T7ixyJSMKe35ypda",
    title: "Astonishing",
    caption:
      "I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.",
    date: "April 2023",
    descr: "This production of Little Women was put on with a 3 week timeline, and required efficient rehearsals. This is a clip from the sitzprobe, the first time actors and the band join together with Matthew at the helm",
    org: "Tufts' Torn Ticket II",
    descr: "Coming Soon",
  },
  {
    name: "Freshman 15",
    video: "https://www.youtube.com/embed/rCnERu3I4Cw?si=UgbDt-wnUIFW7vta",
    title: "Fascinating Rhythm",
    caption: "",
    date: "December 2023",
    org: "Tufts' Freshman 15 Jazz Ensemble",
    descr:
      "Matthew directed Tufts' only student-run Jazz Big Band in their end-of-semester concert.",
    thumbnail: "/Freshman15F23.png",
  },
  {
    name: "Freshman 15",
    video: "https://www.youtube.com/embed/rdAf6Xi4zRA?si=io0qnEnqTbn_YoIC",
    title: "Spain",
    caption: "",
    date: "December 2023",
    org: "Tufts' Freshman 15 Jazz Ensemble",
    descr:
      "Matthew directed Tufts' only student-run Jazz Big Band in their end-of-semester concert.",
  },
  {
    name: "Freshman 15",
    video: "https://www.youtube.com/embed/ioF5xY996As?si=kxs228mwtSAtiGUt",
    title: "I'm Feeling Good",
    caption: "",
    date: "December 2023",
    org: "Tufts' Freshman 15 Jazz Ensemble",
    descr:
      "Matthew directed Tufts' only student-run Jazz Big Band in their end-of-semester concert. He arranged I'm Feeling Good, originally performed by Nina Simone, specially for this group.",
  },
  {
    name: "Freshman 15",
    video: "https://www.youtube.com/embed/0puDNFKQsjw?si=Y9l4m0WYWZhQVE9X",
    title: "On a Clear Day",
    caption: "",
    date: "April 2024",
    org: "Tufts' Freshman 15 Jazz Ensemble",
    descr:
      "Matthew's final performance in college, with an ambitious selection of charts.",
    thumbnail: "/Freshman15SP24.png",
  },
  {
    name: "Freshman 15",
    video: "https://www.youtube.com/embed/sc4L2Y8PGwc?si=mBNEr5wUyKTrY7X0",
    title: "Tank!",
    caption: "",
    date: "April 2024",
    org: "Tufts' Freshman 15 Jazz Ensemble",
    descr:
      "Matthew's final performance in college, with an ambitious selection of charts.",
  },
  {
    name: "Freshman 15",
    video: "https://www.youtube.com/embed/vbgMtXLpdnE?si=TgUmmTqDo6Jpqw9M",
    title: "Big Swing Face",
    caption: "",
    date: "April 2024",
    org: "Tufts' Freshman 15 Jazz Ensemble",
    descr:
      "Matthew's final performance in college, with an ambitious selection of charts.",
  },
  {
    name: "Ben Lanzi Senior Recital",
    video: "https://www.youtube.com/embed/0y4KCTx5tqE?si=55V3B8488M15VSzm",
    title: "I Get a Kick out of You",
    caption: "",
    date: "May 2023",
    org: "Tufts Music Department",
    descr:
      "Matthew conducted an orchestra for dear friend and colleague Ben Lanzi's senior recital.",
  },
  {
    name: "Ben Lanzi Senior Recital",
    video: "https://www.youtube.com/embed/CXQbjvRdkqE?si=A8YFuRkTnwUDcNbF",
    title: "Angel Eyes",
    caption: "",
    date: "May 2023",
    org: "Tufts Music Department",
    descr:
      "Matthew conducted an orchestra for dear friend and colleague Ben Lanzi's senior recital.",
  },
  {
    name: "Twelfth Night",
    video: "https://www.youtube.com/embed/Ch3bRZAEwrI?si=IZbyQn0NoNoII0JQ",
    title: "Is This Not Love",
    caption:
      "Video Credit: AE. I do not own the rights to this song. This production was in partnership with Concord Theatricals, with video for portfolio purposes only.",
    date: "December 2024 - March 2024",
    org: "Tufts' Department of Theater, Dance, and Performance Studies",
    descr: "Matthew's final collegiate musical theater production",
    thumbnail: "/12thnight.png",
  },
  {
    name: "Twelfth Night",
    video: "https://www.youtube.com/embed/FG0omGf81W4?si=LBUQLUwFI9DdyIye",
    title: "Play On",
    caption:
      "Video Credit: AE. I do not own the rights to this song. This production was in partnership with Concord Theatricals, with video for portfolio purposes only.",
    date: "December 2024 - March 2024",
    org: "Tufts' Department of Theater, Dance, and Performance Studies",
    descr: "Matthew's final collegiate musical theater production",
  },
  {
    name: "Twelfth Night",
    video: "https://www.youtube.com/embed/nOIi_zltViQ?si=XQrxKuENmy-U_xHA",
    title: "If You Were My Beloved",
    caption:
      "Video Credit: AE. I do not own the rights to this song. This production was in partnership with Concord Theatricals, with video for portfolio purposes only.",
    date: "December 2024 - March 2024",
    org: "Tufts' Department of Theater, Dance, and Performance Studies",
    descr: "Matthew's final collegiate musical theater production",
  },
];

const BLUE = "#272466";

export default function MusicDirector() {
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
      <Navigation color={BLUE}></Navigation>
      <body>
        <div className={styles.projectsDetail}>
          <Gallery data={data}></Gallery>
          <Footer color={BLUE}></Footer>
        </div>
      </body>
    </>
  );
}
