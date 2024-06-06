// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';
import MasterLayout from './layouts';
import { Home, Contributors, Guide, ProjectList, NotFound } from './pages';
import { IssueList } from './pages/Issues/IssuesPage/IssueList';
import { useSelector } from 'react-redux';


function App() {
  const theme  = useSelector(store => store.theme.toggletheme)
  
  return (
    <BrowserRouter>
      <MasterLayout>
        <ScrollTop>
          <div className={theme ? `bg-white` : ``}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contributors" element={<Contributors />} />
            <Route path="/Docs" element={<Guide  theme={theme}/>} />
            <Route path="/projects" element={<ProjectList  theme = {theme}/>} />
            <Route path="/issues" element={<IssueList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
        </ScrollTop>
      </MasterLayout>
    </BrowserRouter>
  );
}

export default App;
