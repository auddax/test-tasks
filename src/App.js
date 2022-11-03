import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Services from './pages/Services/Services';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='./services' />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:id/details' element={<ServiceDetails />} />
      </Routes>
    </div>
  );
}

export default App;
