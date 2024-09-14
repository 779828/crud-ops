import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Create from './Create';
import Read from './Read';
import Update from './Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Create />}/>
          <Route exact path='/read' element={<Read />}/>
          <Route exact path='/update' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
