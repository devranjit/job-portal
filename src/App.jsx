
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Addjob from './pages/Addjob';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import Header from './Components/Header'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/add-job" element={<Addjob />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
