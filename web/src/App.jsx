// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Contributors, Guide, ProjectList } from "./pages";
import MasterLayout from "./layouts";
import { IssueList } from "./pages/Issues/IssueList";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <MasterLayout>
          <ScrollTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/Docs" element={<Guide />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/issues" element={<IssueList />} />
        </Routes>
          </ScrollTop>
      </MasterLayout>
    </BrowserRouter>
  );
}

export default App;
