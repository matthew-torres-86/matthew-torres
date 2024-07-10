import styles from "@/styles/Navigation.module.css";
export default function Navigation({active}){
    return(
    <nav className={styles.nav}>    
        <div className={styles.fullnav}>
        <a href = "/"><img className = {styles.logo} src="/logo.png"/></a>
        <ul>
        <li className={styles.socials}>
                <a href="https://www.linkedin.com/in/matthew-r-torres/" target="_blank"><img src="/icons/Linkedin.png" width="40px"/></a>
                <a href="https://github.com/matthew-torres-86" target="_blank"><img src="/icons/github.png" width="40px"/></a>
                <a href="https://www.facebook.com/profile.php?id=100041754421410" target="_blank"><img src="/icons/facebook.png" width="40px"/></a>
                <a href="https://www.instagram.com/matt.torres_86/" target="_blank"><img src="/icons/instagram.png" width="40px"/></a>
                <a href="https://twitter.com/Matttorres2020" target="_blank"><img src="/icons/twitter.png" width="40px"/></a>
            </li>
            <li className = {styles.dropdown}>
                <a href="/music">MUSICIAN</a>
                <div className={styles.dropdownContent}>
                    <a href="/music/music-director">Music Director</a>
                    <a href="/music/pianist">Pianist</a>
                    <a href="/music/organist">Organist</a>
                </div>
            </li>
            <li className = {styles.dropdown}>
                <a href="/software">SOFTWARE DEVELOPER</a>
                <div className={styles.dropdownContent}>
                    <a href="/software/web-programming">Web Programming</a>
                    <a href="/software/c">C Languages</a>
                    <a href="/software/python">Python</a>
                </div>
            </li>
           
    </ul>
    </div>
    <div className={styles.mobilenav}>
        <ul>
            {/* <li className={styles.socials}>
                <a href="https://www.linkedin.com/in/matthew-r-torres/" target="_blank"><img src="/icons/Linkedin.png" width="40px"/></a>
                <a href="https://github.com/matthew-torres-86" target="_blank"><img src="/icons/github.png" width="40px"/></a>
                <a href="https://www.facebook.com/profile.php?id=100041754421410" target="_blank"><img src="/icons/facebook.png" width="40px"/></a>
                <a href="https://www.instagram.com/matt.torres_86/" target="_blank"><img src="/icons/instagram.png" width="40px"/></a>
                <a href="https://twitter.com/Matttorres2020" target="_blank"><img src="/icons/twitter.png" width="40px"/></a>
            </li> */}
            
            <li className = {styles.dropdown}>
                <div className={styles.mobilediv}>
                    <a><img src="/icons/bars-solid.svg" style={{width: "20px"}}></img></a>
                    {/* <a href = "/"><img className = {styles.logo} src="/logo.png"/></a> */}
                </div>
                <div className={styles.dropdownContent}>
                <a href="/music">MUSICIAN</a>
                    <a href="/music/music-director">Music Director</a>
                    <a href="/music/pianist">Pianist</a>
                    <a href="/music/organist">Organist</a>
                    <a href="/software">SOFTWARE DEVELOPER</a>
                
                    <a href="/software/web-programming">Web Programming</a>
                    <a href="/software/c">C Languages</a>
                    <a href="/software/python">Python</a>
                    <li className={styles.socials}>
                <a href="https://www.linkedin.com/in/matthew-r-torres/" target="_blank"><img src="/icons/Linkedin.png" width="40px"/></a>
                <a href="https://github.com/matthew-torres-86" target="_blank"><img src="/icons/github.png" width="40px"/></a>
                <a href="https://www.facebook.com/profile.php?id=100041754421410" target="_blank"><img src="/icons/facebook.png" width="40px"/></a>
                <a href="https://www.instagram.com/matt.torres_86/" target="_blank"><img src="/icons/instagram.png" width="40px"/></a>
                <a href="https://twitter.com/Matttorres2020" target="_blank"><img src="/icons/twitter.png" width="40px"/></a>
            </li>
                </div>
            </li>
    </ul>
    </div>
    </nav>)
}