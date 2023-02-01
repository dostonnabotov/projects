import "./Card.css";
import { CardProps } from "../../types";
import moment from "moment";

export default function Card({
  id,
  title,
  description,
  url,
  cover_image,
  tag_list,
  readable_publish_date,
  published_at,
}: CardProps) {
  return (
    <a className="card" href={url} target="_blank" rel="noopener noreferrer">
      <div className="card__img-container">
        <img className="card__img" src={cover_image} alt={title} />
        <div className="card__tags">
          {tag_list.map((tag) => {
            return <span className="card__tag">{tag}</span>;
          })}
        </div>
      </div>
      <div className="card__body flow">
        <h3 className="card__title">{title}</h3>
        <p className="card__date">
          Updated on{" "}
          <time dateTime={published_at}>{readable_publish_date}</time>
        </p>
        <p>{description}</p>
        <p className="card__cta">Read more</p>
      </div>
    </a>
  );
}
