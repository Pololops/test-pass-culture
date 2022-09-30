import "./App.css";

import { Routes, Route } from 'react-router-dom';
import Header from "../Header/Header";
import PageArticles from "../PageArticles/PageArticles";
import PageCreateNews from "../PageCreateNews/PageCreateNews";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import { useContext, useEffect } from 'react';
import { LoadContextType } from '../../Contexts/dataContextTypes'
import { DataContext } from 'Contexts/dataContext';


function App() {
  const { 
    articles, 
    getAllData, 
    getFilters 
  }: LoadContextType = useContext(DataContext);

  useEffect(() => {
    getFilters && getFilters();
    getAllData && getAllData();
  }, [articles]);
  
  return (
    <div className="App">
      <Header />
      <main className="main">
          <Routes>
            <Route path="/" element={<PageArticles />}  />
            <Route path="/create" element={<PageCreateNews />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
