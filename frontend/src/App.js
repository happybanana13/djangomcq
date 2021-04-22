import React, { useEffect, useState } from "react";

import axios from "axios";
import "./App.css";

function App() {
  const fetchCompanies = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/show")
      .then((jsonResponse) => console.log(jsonResponse.data));
  };

  fetchCompanies();

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
