import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';
import App from 'App';
import GlobalCSS from 'styles/global.css';
import ThemeComponent from 'styles/ThemeComponent';

const container = document.getElementById('root');
const root = createRoot(container!);
const app = (
<React.StrictMode>
    <ThemeComponent>
      <GlobalCSS />
      <App />
    </ThemeComponent>
  </React.StrictMode>
);

root.render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
