import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './RatingparSexe';
import MyComponent2 from './AchatparCustomertype';
import MyComponent3 from './RevenueCategorie';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyComponent />
    
    <MyComponent2/>

    <MyComponent3/>
  </React.StrictMode>
);

