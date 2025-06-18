import Head from "next/head";
import styles from "@/styles/Music.module.css";
import Navigation from "../components/navigation";
import { useState, useEffect } from "react";
import Gallery from "../components/gallery";
import Footer from "../components/footer";

const data = [
  {
    name: "Network Sniffer",
    title: "Alert.py",
    descr:
      "A python application which uses the Scapy module to sniff network packets for threats",
    date: "March 2023",
    org: "Tufts Intro to Security",
    code: "https://gist.github.com/matthew-torres-86/e70464b72c04790e5ddaaa02f67d09f0.js",
  },
  {
    name: "CropImage",
    title: "CropImage.py",
    caption:
      "This project is proprietary and cannot be disclosed. For questions, please contact Matt",
    date: "May 2022 - June 2023",
    org: "Draper Inc.",
    descr:
      "This project interfaces Draper's enterprise tools, and process employee ID photos to meet the required image specifications of each tool",
    thumbnail: "/draper.jpeg",
  },
  {
    name: "PropertyScan",
    title: "PropertyScan.py",
    caption:
      "This project is proprietary and cannot be disclosed. For questions, please contact Matt",
    date: "August 2023",
    org: "Draper Inc.",
    descr:
      "This project processes data from handheld scanners to help maintain Draper's Asset Management Records",
  },
];

const BLUE = "#272466";

export default function Pianist() {
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
        <Footer></Footer>
      </body>
    </>
  );
}
