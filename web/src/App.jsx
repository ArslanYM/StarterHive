// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contributors } from "./pages";
import MasterLayout from "./layouts";

function App() {
  return (
    <MasterLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contributors" element={<Contributors />} />
        </Routes>
      </BrowserRouter>
    </MasterLayout>
  );
}

export default App;
