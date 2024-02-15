
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <div className="App">
      <Router>

      <Navbar />
      <AnimatedRoutes />
      
      </Router>
  
    </div>
  );
}

export default App;
