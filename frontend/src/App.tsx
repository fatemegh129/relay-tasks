import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Welcome to Relay</h1>
            <p className="text-gray-400">
              Team tasks that flow. Each member owns their stage and passes it forward.
            </p>
            <button className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              <a href="/login">
                Login
              </a>
            </button>
            <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
              <a href="/register">
                Register
              </a>
            </button>
            <button className="mt-6 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4">
              <a href="/dashboard">
                Dashboard
              </a>
            </button>
          </div>
        </div>
      } />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />

    </Routes>
  );
}

export default App;