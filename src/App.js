import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Grievance from './pages/Grievance/Grievance';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/grievance' element={<Grievance />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
