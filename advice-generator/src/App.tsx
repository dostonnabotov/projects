import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import axios from "axios";

type DataProps = {
  id: number;
  advice: string;
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<DataProps>({ id: 0, advice: "" });

  function fetchAdvice() {
    setIsLoading(true);
    axios
      .get("	https://api.adviceslip.com/advice")
      .then((res) => {
        const advice = res.data;
        setData(advice.slip);
      })
      .catch((err) => console.log(err));
    // remove loading animation after 1 second
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  function handleClick() {
    fetchAdvice();
  }

  // fetch API when site is first loaded
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      <Header />
      <Card isLoading={isLoading} handleClick={handleClick} data={data} />
    </>
  );
}

export default App;
