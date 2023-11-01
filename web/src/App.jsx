// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';
import MasterLayout from './layouts';
import { Home, Contributors, Guide, ProjectList, NotFound } from './pages';
import { IssueList } from './pages/Issues/IssuesPage/IssueList';

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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollTop>
      </MasterLayout>
    </BrowserRouter>
  );
}

export default App;
