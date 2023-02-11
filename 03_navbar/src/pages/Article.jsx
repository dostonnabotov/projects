import { useOutletContext, useParams } from "react-router-dom";

export default function Article() {
  const { id } = useParams();
  const obj = useOutletContext();

  return (
    <h1>
      Article {id} {obj.hello}
    </h1>
  );
}
