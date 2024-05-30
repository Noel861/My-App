import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/card.css'
import './styles/tracks.css'
import App from './App';
import './styles/decor.css'
import './styles/comments.css'
import './styles/tracks2.css'
import './styles/searchbox.css'
import './styles/aboutus.css'
import './styles/contactus.css'
import './styles/signup.css'
import './styles/banner.css'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

