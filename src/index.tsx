import React from 'react';
import ReactDOM from 'react-dom/client';
import AutoSelect from './AutoSelect/AutoSelect';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AutoSelect />
  </React.StrictMode>
);
