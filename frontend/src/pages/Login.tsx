function Login() {
    return (
        <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto md:ml-4 md:mt-4">
                <a href="/">
                    Back to Home
                </a>
            </button>
            <div className="min-h-screen bg-gray-950 flex items-center justify-center">
                <div className="bg-gray-900 p-8 w-96 rounded-lg">
                    <h1 className="text-white text-2xl font-bold mb-6">Login</h1>
                    <form className="flex flex-col gap-4">
                        <input type="email" placeholder="E-Mail" className="bg-gray-800 text-white p-2 rounded" />
                        <input type="password" placeholder="Password" className="bg-gray-800 text-white p-2 rounded" />
                        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;