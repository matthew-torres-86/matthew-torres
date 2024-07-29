import styles from "@/styles/Navigation.module.css";
import { useState } from "react";
export default function Navigation({active, color}){
    const [mobileDrop, setMobileDrop] = useState(false);
    return(
    <nav className={styles.nav} style={{backgroundColor:color, transition:"color 0.5s ease"}}>    
        <div className={styles.fullnav}>
        <a href = "/"><img className = {styles.logo} src="/logo.png"/></a>
        <ul>
        <li className={styles.socials}>
                <a href="https://www.linkedin.com/in/matthew-r-torres/" target="_blank"><img src="/icons/Linkedin.png"/></a>
                <a href="https://github.com/matthew-torres-86" target="_blank"><img src="/icons/github.png"/></a>
                <a href="https://www.facebook.com/profile.php?id=100041754421410" target="_blank"><img src="/icons/facebook.png"/></a>
                <a href="https://www.instagram.com/matt.torres_86/" target="_blank"><img src="/icons/instagram.png"/></a>
                <a href="https://twitter.com/Matttorres2020" target="_blank"><img src="/icons/twitter.png"/></a>
            </li>
            <li className = {styles.dropdown}>
                <a href="/music">MUSICIAN</a>
                <div className={styles.dropdownContent}  style={{backgroundColor:color}}>
                    <a href="/music/music-director">Music Director</a>
                    <a href="/music/pianist">Pianist</a>
                    <a href="/music/organist">Organist</a>
                </div>
            </li>
            <li className = {styles.dropdown}>
                <a href="/software">SOFTWARE DEVELOPER</a>
                <div className={styles.dropdownContent}  style={{backgroundColor:color}}>
                    <a href="/software/web-programming">Web Programming</a>
                    <a href="/software/c">C Languages</a>
                    <a href="/software/python">Python</a>
                </div>
            </li>
           
    </ul>
    </div>
    <div className={styles.mobilenav}>
        <ul>
            
            <li className = {styles.dropdown}>
                <div className={styles.mobilediv}>
                    
                    <button className={styles.hamburger} onClick={()=>setMobileDrop(!mobileDrop)}><img src="/icons/bars-solid.svg" style={{width: "20px"}} className={mobileDrop? styles.rotated: styles.plain}></img></button>
                    <a href="/"><img src="/logo.png" className={styles.logo}></img></a>
                    <li className={styles.socials}>
                <a href="https://www.linkedin.com/in/matthew-r-torres/" target="_blank"><img src="/icons/Linkedin.png" width="40px"/></a>
                <a href="https://github.com/matthew-torres-86" target="_blank"><img src="/icons/github.png" width="40px"/></a>
                <a href="https://www.facebook.com/profile.php?id=100041754421410" target="_blank"><img src="/icons/facebook.png" width="40px"/></a>
                <a href="https://www.instagram.com/matt.torres_86/" target="_blank"><img src="/icons/instagram.png" width="40px"/></a>
                <a href="https://twitter.com/Matttorres2020" target="_blank"><img src="/icons/twitter.png" width="40px"/></a>
            </li>
                    {/* <a href = "/"><img className = {styles.logo} src="/logo.png"/></a> */}
                </div>
                  <div className={mobileDrop? styles.dropdownContent: styles.hidden} style={{backgroundColor:color}}>
                
                    <a href="/software">SOFTWARE DEVELOPER</a>
                        <a href="/software/web-programming" className={styles.sub}>Web Programming</a>
                        <a href="/software/c" className={styles.sub}>C Languages</a>
                        <a href="/software/python" className={styles.sub}>Python</a>
                    <a href="/music">MUSICIAN</a>
                        <a href="/music/music-director" className={styles.sub}>Music Director</a>
                        <a href="/music/pianist" className={styles.sub}>Pianist</a>
                        <a href="/music/organist" className={styles.sub}>Organist</a>
                </div>
            </li>
    </ul>
    </div>
    </nav>)
}