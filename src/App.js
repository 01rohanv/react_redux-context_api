import React from "react";
import DetailsProvider from "./data";
import Redux from "./Redux";

function App() {
  return (
    <div>
      <Redux />
      <DetailsProvider />
    </div>
  );
}

export default App;
