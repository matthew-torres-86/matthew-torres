import styles from "@/styles/Categories.module.css";

export default function Categories({data}){
    return(
        <div className={styles.categoriesGallery}>
        {data.map((d)=>{
            return(<div className={styles.card}>
                <a href={d.link}>
                    <img src={d.image}/>
                    <h3>{d.name}</h3>
                </a>
            </div>)
        })}
        </div>
    )
}