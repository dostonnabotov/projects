import Card from "../Card/Card";
import { CardProps, CardsProps } from "../../types";
import "./Cards.css";

export default function Cards({ articles }: CardsProps) {
  return (
    <div className="cards">
      {articles.map((article: CardProps) => {
        return <Card key={article.id} {...article} />;
      })}
    </div>
  );
}
