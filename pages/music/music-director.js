import Head from "next/head";
import styles from "@/styles/Music.module.css";
import Navigation from "../components/navigation";
import { useState, useEffect } from "react";
import Gallery from "../components/gallery";
import Footer from "../components/footer";

const data =
[
  {name:"Spring Awakening", video:"https://tufts.app.box.com/embed/s/ejmtrb0wvp7koprd3qhh29x1md6lt9w1?", title: "Song of Purple Summer",caption: "Video Credit: AE. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"December 2021 - March 2022", org: "Tufts' Department of Theater, Dance, and Performance Studies", descr:"Matthew's first collegiate music directorship", thumbnail:"/SpringAwakening.jpg"},
  {name:"Spring Awakening", video:"https://tufts.app.box.com/embed/s/crhpmrosgmklgady04qb81n5s2enz6rj?", title: "Don't Do Sadness/Blue Wind",caption: "Video Credit: AE. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"December 2021 - March 2022", org: "Tufts' Department of Theater, Dance, and Performance Studies", descr:"Matthew's first collegiate music directorship"},
  {name:"Into The Woods", video:"https://tufts.app.box.com/embed/s/s8t3zbc37ojvtt6fczdo6mpmam190dt9?", title: "Finale (In rehearsal)", caption: "Video Credit: TG. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"September 2022 - December 2022", org: "Tufts' Torn Ticket II", descr:"This fantastic production...", thumbnail: "/IntoTheWoods.jpeg"},
  {name:"Into The Woods", video:"https://tufts.app.box.com/embed/s/621qsbdwxii0967j0ah9calbueypx98c?", title: "Finale (Performance)", caption: "Video Credit: TG. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"September 2022 - December 2022", org: "Tufts' Torn Ticket II", descr:"This fantastic production...", },
  {name:"Little Women", video:"https://tufts.app.box.com/embed/s/db8iljtxytvvgzqvo4xgogtxewb4vlvi?", title: "Some Things Are Meant to Be",caption: "I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"April 2023", org: "Tufts' Torn Ticket II", descr:"This fantastic production...", thumbnail: "/LittleWomen.jpeg"},
  {name:"Little Women", video:"https://tufts.app.box.com/embed/s/ne5ze5955pyxradoy0anvt9zggzclg4j?", title: "Astonishing", caption: "I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"April 2023", org: "Tufts' Torn Ticket II", descr:"Coming Soon"},
  {name:"COMING SOON: Freshman 15", video:"/none", title: "Fascinating Rhythm", caption: "", date:"April 2024", org: "Tufts' Freshman 15 Jazz Ensemble", descr:"Coming Soon", thumbnail: "/Freshman15F23.png"},
  {name:"Freshman 15", video:"https://tufts.app.box.com/embed/s/6267jwhgiejxerhmh86g7gou8djr2jiu?", title: "On a Clear Day", caption: "", date:"April 2024", org: "Tufts' Freshman 15 Jazz Ensemble", descr:"Coming Soon", thumbnail: "/Freshman15SP24.png"},
  {name:"Freshman 15", video:"https://tufts.app.box.com/embed/s/rbqiiwc1dbgxhs0gr4wpzzef7vlxkmmc?", title: "Tank!", caption: "", date:"April 2024", org: "Tufts' Freshman 15 Jazz Ensemble", descr:"Coming Soon"},
  {name:"Freshman 15", video:"https://tufts.app.box.com/embed/s/z4tqyyzjf4zmuda7a8ok3hd521ea141a?", title: "Big Swing Face", caption: "", date:"April 2024", org: "Tufts' Freshman 15 Jazz Ensemble", descr:"Coming Soon"},
  {name:"Ben Lanzi Senior Recital", video:"https://tufts.app.box.com/embed/s/o8abmnn2gdbcqdr5e5f4d3e6np450yxy?", title: "I Get a Kick out of You", caption: "", date:"May 2023", org: "Tufts Music Department", descr:"Coming Soon"},
  {name:"Ben Lanzi Senior Recital", video:"https://tufts.app.box.com/embed/s/c3vtw6am9rviz0ft5k2gu81yei8bj4gu?", title: "Angel Eyes", caption: "", date:"May 2023", org: "Tufts Music Department", descr:"Coming Soon"},
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
