import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";

import Main from "./components/main/Main";
function App() {
  const [data, setData] = useState(null);

  /*  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((response) => setData(response?.message));
  }, []); */

  return (
    <div className="App">
      <Header />

      <Main />
    </div>
  );
}

export default App;
