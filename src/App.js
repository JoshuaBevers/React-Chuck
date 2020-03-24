import React from "react";
import "./App.css";
import Quote from "./components/Quote";

function App() {
  const quote = "This is a chuck quote.";
  return (
    <div className="App">
      <header className="App-header">
        <Quote quote={quote} />
      </header>
    </div>
  );
}

export default App;
