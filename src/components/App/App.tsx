import "./App.css";

import { Routes, Route } from 'react-router-dom';
import Header from "../Header/Header";
import PageArticles from "../PageArticles/PageArticles";
import PageCreateNews from "../PageCreateNews/PageCreateNews";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import DataContextProvider from 'Contexts/dataContext';

function App() {
  
  return (
    <div className="App">
      <Header />
      <main className="main">
        <DataContextProvider>
          <Routes>
            <Route path="/" element={<PageArticles />}  />
            <Route path="/create" element={<PageCreateNews />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DataContextProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
