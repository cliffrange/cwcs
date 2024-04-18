import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("/user")
      .then((res) => res.json())
      .then((data) => {
        setName(data.pubName);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <h1>Hello {name}</h1>;
};

ReactDOM.render(<App></App>, document.getElementById("app"));
