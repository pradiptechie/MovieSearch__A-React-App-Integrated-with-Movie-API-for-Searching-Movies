  // import React from "react";
  // import ReactDom from 'react-dom';

  // import App from './App';

  // ReactDom.render(<App/>, document.getElementById('root'))

  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './App';
  import reportWebVitals from './reportWebVitals';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  reportWebVitals();
