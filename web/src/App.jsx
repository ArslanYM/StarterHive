// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Contributors, Guide, IssuesList } from "./pages";
import MasterLayout from "./layouts";
import { ThemeProvider } from "./Context/ThemeContext";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
          {/* 
            By wrapping routes with ScrollToTop, we ensure that the page will be scrolled to the top 
            whenever the user navigates to a new route. 
          */}
          <ScrollToTop>
            <MasterLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contributors" element={<Contributors />} />
                  <Route path="/Docs" element={<Guide />} />
                  <Route path="/issues" element={<IssuesList />} />
                </Routes>
            </MasterLayout>
          </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
