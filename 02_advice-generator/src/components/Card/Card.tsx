import Loading from "../Loading/Loading";
import "./Card.css";

type CardProps = {
  isLoading: boolean;
  handleClick: () => void;
  data: {
    id: number;
    advice: string;
  };
};

export default function Card({ isLoading, handleClick, data }: CardProps) {
  return (
    <div className="card | flow">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <p className="card__number">#{data.id}</p>
          <q className="card__body">{data.advice}</q>
        </>
      )}
      <button className="btn card__cta" onClick={handleClick}>
        Generate
      </button>
    </div>
  );
}
