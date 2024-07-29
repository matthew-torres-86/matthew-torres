import Head from "next/head";
import styles from "@/styles/Music.module.css";
import Navigation from "../components/navigation";
import { useState, useEffect } from "react";
import Gallery from "../components/gallery";
import Footer from "../components/footer";



const data =
[
  {name:"Spring Awakening", video:"https://tufts.app.box.com/embed/s/ejmtrb0wvp7koprd3qhh29x1md6lt9w1?", title: "Song of Purple Summer",caption: "Video Credit: AE. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"December 2021 - March 2022", org: "Tufts' Department of Theater, Dance, and Performance Studies", descr:"Matthew's first collegiate music directorship", thumbnail:"/SpringAwakening.jpg"},
  {name:"Spring Awakening", video:"https://www.youtube.com/embed/hly_ouG6b_s?si=qLKRPhrFM9pfL2Ec", title: "Don't Do Sadness/Blue Wind",caption: "Video Credit: AE. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"December 2021 - March 2022", org: "Tufts' Department of Theater, Dance, and Performance Studies", descr:"Matthew's first collegiate music directorship"},
  {name:"Into The Woods", video:"https://tufts.app.box.com/embed/s/s8t3zbc37ojvtt6fczdo6mpmam190dt9?", title: "Finale (In rehearsal)", caption: "Video Credit: TG. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"September 2022 - December 2022", org: "Tufts' Torn Ticket II", descr:"This fantastic production...", thumbnail: "/IntoTheWoods.jpeg"},
  {name:"Into The Woods", video:"https://www.youtube.com/embed/HlggX10VhhQ?si=yyHRVg1xXsYwFSSv", title: "Finale (Performance)", caption: "Video Credit: TG. I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"September 2022 - December 2022", org: "Tufts' Torn Ticket II", descr:"This fantastic production...", },
  {name:"Little Women", video:"https://tufts.app.box.com/embed/s/db8iljtxytvvgzqvo4xgogtxewb4vlvi?", title: "Some Things Are Meant to Be",caption: "I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"April 2023", org: "Tufts' Torn Ticket II", descr:"This fantastic production...", thumbnail: "/LittleWomen.jpeg"},
  {name:"Little Women", video:"https://www.youtube.com/embed/C1GNixfF8tY?si=T7ixyJSMKe35ypda", title: "Astonishing", caption: "I do not own the rights to this song. This production was in partnership with MTI, with video for portfolio purposes only.", date:"April 2023", org: "Tufts' Torn Ticket II", descr:"Coming Soon"},
  {name:"COMING SOON: Freshman 15", video:"/none", title: "Fascinating Rhythm", caption: "", date:"April 2024", org: "Tufts' Freshman 15 Jazz Ensemble", descr:"Coming Soon", thumbnail: "/Freshman15F23.png"},
  {name:"Freshman 15", video:"https://tufts.app.box.com/embed/s/6267jwhgiejxerhmh86g7gou8djr2jiu?", title: "On a Clear Day", caption: "", date:"April 2024", org: "Tufts' Freshman 15 Jazz Ensemble", descr:"Coming Soon", thumbnail: "/Freshman15SP24.png"},
  {name:"Freshman 15", video:"https://tufts.app.box.com/embed/s/rbqiiwc1dbgxhs0gr4wpzzef7vlxkmmc?", title: "Tank!", caption: "", date:"April 2024", org: "Tufts' Freshman 15 Jazz Ensemble", descr:"Coming Soon"},
  {name:"Freshman 15", video:"https://www.youtube.com/embed/vbgMtXLpdnE?si=TgUmmTqDo6Jpqw9M", title: "Big Swing Face", caption: "", date:"April 2024", org: "Tufts' Freshman 15 Jazz Ensemble", descr:"Coming Soon"},
  {name:"Ben Lanzi Senior Recital", video:"https://www.youtube.com/embed/0y4KCTx5tqE?si=55V3B8488M15VSzm", title: "I Get a Kick out of You", caption: "", date:"May 2023", org: "Tufts Music Department", descr:"Coming Soon"},
  {name:"Ben Lanzi Senior Recital", video:"https://www.youtube.com/embed/CXQbjvRdkqE?si=A8YFuRkTnwUDcNbF", title: "Angel Eyes", caption: "", date:"May 2023", org: "Tufts Music Department", descr:"Coming Soon"},
  {name:"Twelfth Night", video:"https://www.youtube.com/embed/Ch3bRZAEwrI?si=IZbyQn0NoNoII0JQ", title: "Is This Not Love", caption: "Video Credit: AE. I do not own the rights to this song. This production was in partnership with Concord Theatricals, with video for portfolio purposes only.", date:"December 2024 - March 2024", org: "Tufts' Department of Theater, Dance, and Performance Studies", descr:"Matthew's final collegiate musical theater production", thumbnail:"/12thnight.png"},
  {name:"Twelfth Night", video:"https://tufts.app.box.com/embed/s/iacb8f36o76w0v5zgm22riki3zzb2v9v?", title: "Play On", caption: "Video Credit: AE. I do not own the rights to this song. This production was in partnership with Concord Theatricals, with video for portfolio purposes only.", date:"December 2024 - March 2024", org: "Tufts' Department of Theater, Dance, and Performance Studies", descr:"Matthew's final collegiate musical theater production"},
  {name:"Twelfth Night", video:"https://www.youtube.com/embed/nOIi_zltViQ?si=XQrxKuENmy-U_xHA", title: "If You Were My Beloved", caption: "Video Credit: AE. I do not own the rights to this song. This production was in partnership with Concord Theatricals, with video for portfolio purposes only.", date:"December 2024 - March 2024", org: "Tufts' Department of Theater, Dance, and Performance Studies", descr:"Matthew's final collegiate musical theater production"},
]

const BLUE = "#272466"

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
