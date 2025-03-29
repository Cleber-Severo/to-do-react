import { useState } from "react";
import "./App.css";
import CheckboxItem from "./components/checkbox-item";

function App() {
  return (
    <>
      <CheckboxItem selected={false} />
      <CheckboxItem selected={true} />
    </>
  );
}

export default App;
