import Head from "next/head";
import styles from "@/styles/Music.module.css";
import Navigation from "../components/navigation";
import { useState, useEffect } from "react";
import Gallery from "../components/gallery";
import Footer from "../components/footer";

const data =
[
  {name:"Spring Awakening", video:"https://pub-69dc49b0c2f04d6ea22444e7dc347c9e.r2.dev/PurpleSummer.mov", title: "Song of Purple Summer",caption: "Video Credit: AE. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"December 2021 - March 2022", org: "Tufts' Department of Theater, Dance, and Performance Studies", descr:"Matthew's first collegiate music directorship", thumbnail:"/SpringAwakening.jpg"},
  {name:"Spring Awakening", video:"https://pub-69dc49b0c2f04d6ea22444e7dc347c9e.r2.dev/DontDoSadnessTrim.MOV", title: "Don't Do Sadness/Blue Wind",caption: "Video Credit: AE. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"December 2021 - March 2022", org: "Tufts' Department of Theater, Dance, and Performance Studies", descr:"Matthew's first collegiate music directorship"},
  {name:"Into The Woods", video:"https://pub-69dc49b0c2f04d6ea22444e7dc347c9e.r2.dev/IntoTheWoods.mov", title: "Finale",caption: "Video Credit: TG. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"September 2022 - December 2022", org: "Tufts' Torn Ticket II", descr:"This fantastic production...", thumbnail: "/IntoTheWoods.jpeg"},
  {name:"COMING SOON: Little Women", video:"/none", title: "Some Things Are Meant to Be",caption: "I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"April 2023", org: "Tufts' Torn Ticket II", descr:"This fantastic production...", thumbnail: "/LittleWomen.jpeg"},
  {name:"COMING SOON: Little Women", video:"/none", title: "Astonishing",caption: "I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"April 2023", org: "Tufts' Torn Ticket II", descr:"Coming Soon"},
  {name:"COMING SOON: Freshman 15", video:"/none", title: "Fascinating Rhythm", caption: "", date:"April 2024", org: "Tufts' Freshman 15 Jazz Ensemble", descr:"Coming Soon", thumbnail: "/Freshman15SP24.png"},
  {name:"COMING SOON: Freshman 15", video:"/none", title: "On a Clear Day", caption: "", date:"April 2024", org: "Tufts' Freshman 15 Jazz Ensemble", descr:"Coming Soon", thumbnail: "/Freshman15F23.png"},
  {name:"COMING SOON: Twelfth Night", video:"/none", title: "Is This Not Love", caption: "Video Credit: AE. I do not own the rights to this song. This production was in partnership with Concord Theatricals, with video for portfolio purposes only.", date:"December 2024 - March 2024", org: "Tufts' Department of Theater, Dance, and Performance Studies", descr:"Matthew's final collegiate musical theater production", thumbnail:"/12thnight.png"},
]

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
