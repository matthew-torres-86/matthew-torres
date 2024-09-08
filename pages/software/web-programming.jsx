import Head from "next/head";
import styles from "@/styles/Music.module.css";
import Navigation from "../components/navigation";
import { useState, useEffect } from "react";
import Gallery from "../components/gallery";
import Footer from "../components/footer";

const data = [
  {
    name: "KeepMassBeautiful",
    title: "Home Page",
    site: "https://keep-mass-beautiful.vercel.app/Demo",
    date: "September 2023 - May 2024",
    org: "Jumbocode",
    thumbnail: "/KMB.png",
    descr:
      "One home page of the KeepMassBeautiful project, which allows chapter leaders to create, modify, and host their own public-facing promotional sites.",
    caption: "iFrame is not an accurate representation of the site's responsiveness. To view the full site, go to https://keep-mass-beautiful.vercel.app"
  },
  {
    name: "KeepMassBeautiful",
    title: "About Page",
    site: "https://keep-mass-beautiful.vercel.app/Demo/about",
    date: "September 2023 - May 2024",
    org: "Jumbocode",
    descr:
      "One about page of the KeepMassBeautiful project, which allows chapter leaders to create, modify, and host their own public-facing promotional sites.",
    caption: "iFrame is not an accurate representation of the site's responsiveness. To view the full site, go to https://keep-mass-beautiful.vercel.app"
  },
  {
    name: "KeepMassBeautiful",
    title: "Contact Page",
    site: "https://keep-mass-beautiful.vercel.app/Demo/contact",
    date: "September 2023 - May 2024",
    org: "Jumbocode",
    descr:
      "One contact page of the KeepMassBeautiful project, which allows chapter leaders to create, modify, and host their own public-facing promotional sites.",
    caption: "iFrame is not an accurate representation of the site's responsiveness. To view the full site, go to https://keep-mass-beautiful.vercel.app"
  },
  {
    name: "KeepMassBeautiful",
    title: "Events Page",
    site: "https://keep-mass-beautiful.vercel.app/Demo/events",
    date: "September 2023 - May 2024",
    org: "Jumbocode",
    descr:
      "One events page of the KeepMassBeautiful project, which allows chapter leaders to create, modify, and host their own public-facing promotional sites.",
    caption: "iFrame is not an accurate representation of the site's responsiveness. To view the full site, go to https://keep-mass-beautiful.vercel.app"
  },
  {
    name: "Troop 107 Website",
    title: "Home Page",
    site: "https://graftontroop107.wordpress.com/",
    date: "June 2018 - August 2018",
    org: "Grafton Boy Scout Troop 107",
    thumbnail: "/troop107.png",
    descr:
      "As senior patrol leader for Boy Scout Troop 107, Matthew led a series of improvement initiatives that included a new Wordpress website, which he designed and built while in High School.",
    caption: "iFrame is not an accurate representation of the site's responsiveness. To view the full site, go to https://graftontroop107.wordpress.com"
  },
  {
    name: "Matthew Torres Portfolio",
    title: "Home Page",
    site: "https://matthew-torres.vercel.app/",
    date: "June 2024 - July 2024",
    org: "Personal",
    thumbnail: "/portfoliosite.png",
    descr:
      "Look familiar? This portfolio site was a major personal project, with extensive care taken to provide the best user experience. It features scroll-based and click-based animations, a cohesive look and feel, and many interactive displays for Matthew's software and music projects.",
      caption: "iFrame is not an accurate representation of the site's responsiveness. To view the full site, go to https://keep-mass-beautiful.vercel.app"
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
        <title>Software | Matthew Torres</title>
        <meta name="description" content="Matthew Torres Software Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation color={BLUE}></Navigation>
      <body>
        <div className={styles.projectsDetail}>
          <Gallery data={data}></Gallery>
        </div>
      </body>
    </>
  );
}
