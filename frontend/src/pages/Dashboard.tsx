import { Link } from 'react-router-dom'
function Dashboard()

{
    
function handleLogout()
{
    localStorage.removeItem('token');
    window.location.href = "/login";
}
    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
            <h1 className="text-white text-3xl font-bold">Dashboard</h1>
            <div className="absolute left-6 top-6 flex items-center gap-3">
                
            <Link to="/" className="text-gray-300 hover:text-white text-sm font-medium gap-3">
                ← Back
            </Link>
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-5 rounded-2xl gap-3 transition-all duration-200  ">
                Logout
            </button>
            </div>
        </div>
    )
}

export default Dashboard;