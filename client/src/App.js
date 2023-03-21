import './App.css';
import AllRoutes from './allRoutes';

import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div >
      <Router>
      
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
