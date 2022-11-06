import { Route, Routes, Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Main from './pages/Main/Main';
import Create from './pages/Create/Create';
import Edit from './pages/Edit/Edit';
import store from './store/rootStore';
import './App.css';

const App = observer(() => {
  store.eventStore.setReminder();

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/main' />} />
        <Route path='/main' element={<Main />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </div>
  );
});

export default App;
