import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/_reset.css';
import './styles/_vars.css';
import './styles/index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import DataContextprovider from 'Contexts/dataContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DataContextprovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataContextprovider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
