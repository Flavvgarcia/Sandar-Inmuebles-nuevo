import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
// Importa tus componentes
import Home from './components/Home';
import AdminDashboard from './components/AdminDashboard';
import ClientDashboard from './components/ClientDashboard';
import Login from './components/Auth/Login';
import AboutUs from './components/AboutUs';
import LandingPage from './components/LandingPage';
import PropertyDetail from './components/PropertyDetail';
import PropertyList from './components/PropertyList';


// Crea una función que verifica el rol del usuario
const checkUserRole = () => {
  // Implementa la lógica para determinar el rol del usuario
  // Devuelve 'admin' o 'client' según corresponda.
};

// Rutas protegidas
function AdminRoute({ children }) {
  if (checkUserRole() === 'admin') {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

function ClientRoute({ children }) {
  if (checkUserRole() === 'client') {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/client"
          element={
            <ClientRoute>
              <ClientDashboard />
            </ClientRoute>
          }
        />
        <Route exact path="/" element={<PropertyList/>} />
        <Route path="/property/:id" element={<PropertyDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
