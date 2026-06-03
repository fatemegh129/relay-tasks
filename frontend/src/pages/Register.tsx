import { useEffect, useState } from 'react'

function Register() {

    const [error, setError] = useState<string[]>([]);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        const newErrors = [];

        if (password.length === 0) newErrors.push('Passwort darf nicht leer sein! ');
        if (email.length === 0) newErrors.push('E-Mail darf nicht leer sein! ');
        if (password!== confirmPassword) newErrors.push('Passwörter stimmen nicht überein! ');

        setError(newErrors);

    }


    useEffect(() => {
        if (confirmPassword && password !== confirmPassword && password.length > 0) {
            setError(['Passwörter stimmen nicht überein! ']);
        }
        else {
            setError([]);
        }
    }, [confirmPassword, password]);


    return (
        <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto md:ml-4 md:mt-4">
                <a href="/">
                    Back to Home
                </a>
            </button>
            <div className="min-h-screen bg-gray-950 flex items-center justify-center">
                <div className="bg-gray-900 p-8 w-96 rounded-lg">
                    <h1 className="text-white text-2xl font-bold mb-6">Register</h1>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <input type="email" placeholder="E-Mail" className="bg-gray-800 text-white p-2 rounded" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" className="bg-gray-800 text-white p-2 rounded" onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" placeholder="Confirm Password" className="bg-gray-800 text-white p-2 rounded" onChange={(e) => setConfirmPassword(e.target.value)} />
                        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Register
                        </button>
                        <div className="text-red-500 text-sm mt-2 font-bold">
                            {error.map((err, index) => (
                                <p key={index}>{err}</p>
                            ))}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;