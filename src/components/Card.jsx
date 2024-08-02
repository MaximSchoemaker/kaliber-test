import style from "./Card.module.css";

export default function Card({ data }) {
   return (
      <div className={style.card}>
         <img src={data.image} alt={data.title} className={style.image} />
         <div className={style.content}>
            <h2 className={style.cardTitle}>{data.title}</h2>
            <p className={style.cardText}>{data.hours} | {data.location}</p>
            <p className={style.cardText}>{data.department}</p>
            <p className={style.cardText}>{data.date_posted}</p>
            <a href={data.link_to_job_opening} className={style.cardLink}>Bekijk vacature</a>
         </div>
      </div>
   );
}
