// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import MasterLayout from "./layouts";

function App() {
  return (
    <MasterLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MasterLayout>
  );
}

export default App;
