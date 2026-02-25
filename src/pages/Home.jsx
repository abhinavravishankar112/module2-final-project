import { useEffect, useState } from "react";

export default function Home() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setLoading(false);
      });
  }, []);

  return <div className="p-6">{loading ? "Loading..." : <h1>{advice}</h1>}</div>;
}