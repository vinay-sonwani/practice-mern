
// Without redux---------------------------------------------------

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

// import CrudPage from './components/withoutRedux/CrudPage';
// import BasicForm from './components/withoutRedux/BasicForm';

// const App = () => {
//   return (
//     <Router> 
//       <Routes>
//         <Route path="/" element={<CrudPage />} />
//         <Route path="/basicForm" element={<BasicForm />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// With redux ---------------------------------------------------


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import CrudPage from './components/withRedux/CrudPage';
import BasicForm from './components/withRedux/BasicForm';

const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<CrudPage />} />
        <Route path="/basicForm" element={<BasicForm />} />
      </Routes>
    </Router>
  );
};

export default App;
