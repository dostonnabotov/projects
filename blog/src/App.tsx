import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
const url = "https://dev.to/api/articles?username=dostonnabotov";

function App() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    setLoading(true);

    try {
      const res = await fetch(url);
      const articles = await res.json();
      setLoading(false);
      setArticles(articles);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <main>
          <Loading />
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <div className="wrapper">
          <Cards articles={articles} />
        </div>
      </main>
    </>
  );
}

export default App;
