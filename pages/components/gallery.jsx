import styles from "@/styles/Gallery.module.css";
import { useState, useRef } from "react";



export default function Categories({data}){
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    var selectedCard = data[index]
    var numCards = data.length

    function mod(n, m) {
        return ((n % m) + m) % m;
    }
    
    const timerDelay = 12000;
    const timerRef = useRef(null);
    //function that resets timer whenever move left or right
    
    const beginNewTimerInterval = (action) => {
    if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(action, timerDelay);
    };

    const moveNext = () => {
        console.log("moving next", isPlaying);
        if(!isPlaying) setIndex(mod((index+1), numCards));
        beginNewTimerInterval(moveNext)
    }

    const moveBack = () => {
        setIndex(mod((index-1), numCards))
        beginNewTimerInterval(moveNext)
    }

    beginNewTimerInterval(moveNext)
    return(
        <>
            <div className={styles.projectsGallery}>
                <button onClick={moveBack}><img src="/icons/chevron-left-solid.svg"></img></button>
                <div className={styles.card}>
                        <div className={isPlaying? styles.videoFull: styles.preview }>
                            <video onPlay={()=>setIsPlaying(true)} onPause={()=>setIsPlaying(false)} src={selectedCard.video} controls/>
                            <p className={styles.caption}>{selectedCard.caption}</p>
                        </div>
                        <div className={isPlaying? styles.infoMinimized: styles.info}>
                            <h2>{selectedCard.name}</h2>
                            <p>"{selectedCard.title}"</p>
                            <p><b>Date:</b> {selectedCard.date}</p>
                            <p><b>Organization:</b> {selectedCard.org}</p>
                            <p><b>Description:</b> {selectedCard.descr}</p>
                        </div>
                </div>
                <button onClick={()=>{moveNext; setIsPlaying(false)} }><img src="/icons/chevron-right-solid.svg"></img></button>
            </div>
            <h2>Browse by project:</h2>
            <div className={styles.thumbnails}>
                
                {data.map((d, i)=>
                    {if(d.thumbnail)
                        return <img src={d.thumbnail} onClick={()=>{setIndex(i); beginNewTimerInterval(moveNext); setIsPlaying(false)}}></img>
                    }
                )}
            </div>
        </>
    )
}