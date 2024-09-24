import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Descricao from './pages/descricao';
import Home from './pages'
import Galery from './pages/galery';
import Clientes from './pages/clientes';

function App() {
  return (
    <Router>
      <div>
        {/* Configuração das rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/descricao" element={<Descricao/>} />
          <Route path="/galery" element={<Galery/>} />
          <Route path="/clientes" element={<Clientes/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
