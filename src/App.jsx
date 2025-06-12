import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css'
import LoginPage from './Components/Login/LoginPage'
import Dashboard from './Components/Dashboard/Dashboard';
import PainelUsuarioPage from './Components/PainelUsuario/PainelUsuarioPage';
import HomePage from './Components/Home/HomePage';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard-adm" element={<Dashboard />} />
        <Route path="/painel-usuario" element={<PainelUsuarioPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
