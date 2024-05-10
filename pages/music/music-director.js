import Head from "next/head";
import styles from "@/styles/Music.module.css";
import Navigation from "../components/navigation";
import { useState, useEffect } from "react";
import Gallery from "../components/gallery";
import Footer from "../components/footer";

const data =
[
  {name:"Spring Awakening", video:"/PurpleSummer.mov", title: "Song of Purple Summer",caption: "Video Credit: Amelia Estrada. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"December 2021 - March 2022", org: "Tufts' Department of Theater, Dance, and Performance Studies", descr:"Matthew's first collegiate music directorship", thumbnail:"/SpringAwakening.jpg"},
  {name:"Spring Awakening", video:"/DontDoSadness.mov", title: "Don't Do Sadness/Blue Wind",caption: "Video Credit: Amelia Estrada. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"December 2021 - March 2022", org: "Tufts' Department of Theater, Dance, and Performance Studies", descr:"Matthew's first collegiate music directorship"},
  {name:"Into The Woods", video:"/IntoTheWoods.mov", title: "Finale",caption: "Video Credit: Thomas Grant. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"September 2022 - December 2022", org: "Tufts' Torn Ticket II", descr:"This fantastic production...", thumbnail: "/IntoTheWoods.jpeg"},
  {name:"Little Women", video:"/none", title: "Finale",caption: "I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"April 2023", org: "Tufts' Torn Ticket II", descr:"This fantastic production...", thumbnail: "/LittleWomen.jpeg"},
  {name:"Freshman 15", video:"/none", title: "Finale", caption: "", date:"April 2024", org: "Tufts' Freshman 15 Jazz Ensemble", descr:"", thumbnail: "/Freshman15SP24.png"},
  {name:"Freshman 15", video:"/none", title: "Finale", caption: "", date:"April 2024", org: "Tufts' Freshman 15 Jazz Ensemble", descr:"", thumbnail: "/Freshman15F23.png"},
  {name:"Twelfth Night", video:"/none", title: "Is This Not Love", caption: "Video Credit: Amelia Estrada. I do not own the rights to this song. This production was in partnership with Concord Theatricals, with video for portfolio purposes only.", date:"December 2024 - March 2024", org: "Tufts' Department of Theater, Dance, and Performance Studies", descr:"Matthew's final collegiate musical theater production", thumbnail:"/12thnight.png"},
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
