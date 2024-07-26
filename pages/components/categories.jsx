import styles from "@/styles/Categories.module.css";

export default function Categories({data}){

    if(data==null){
        return(<p>Component Not Found</p>)
    }
    return(
        <div className={styles.categoriesGallery}>
        {data.map((d)=>{
            return(<div className={styles.card}>
                <a href={d.link}>
                    <img src={d.image}/>
                    <h3>{d.name}</h3>
                    <p>{d.caption}</p>
                </a>
            </div>)
        })}
        </div>
    )
}