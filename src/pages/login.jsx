import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import integrate from '../api/axios';

export default function Login() {

  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  // define function that will take value from login form
  const handleChanges = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // function that will submit user's login credential
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      return
      setError("Please Email and password are required");
    }
    setError('');
    try {
      const response = await integrate.post('/login', form)
      // console.log('All information', response);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard')
    } catch (error) {
      setError(error.response?.data?.message || "Invalid credentials. Please login again")
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f0f4f8]">
      <form className="bg-white p-10 rounded-2xl w-[70%] max-w-[660px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex flex-col gap-4" onSubmit={handleSubmit}>
        <h2 className="text-center text-[#4a3f8f] text-2xl font-bold mb-2">Welcome Back</h2>
        {error && <p className="px-4 py-2.5 rounded-lg text-sm text-center bg-[#fde8e8] text-[#c0392b]">{error}</p>}
        <input
          name="email" type="email" placeholder="Email" value={form.email} onChange={handleChanges}
          className="w-full px-4 py-3 border-[1.5px] border-[#ddd] rounded-lg text-[0.95rem] outline-none transition-colors focus:border-[#667eea]"
        />
        <div className="relative flex items-center">
          <input
            name="password" type={showPassword ? 'text' : 'password'} placeholder="Password" value={form.password} onChange={handleChanges}
            className="w-full px-4 py-3 pr-10 border-[1.5px] border-[#ddd] rounded-lg text-[0.95rem] outline-none transition-colors focus:border-[#667eea]"
          />
          <span className="absolute right-3 cursor-pointer text-base select-none" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        <button
          type="submit" 
          className="w-full py-3 bg-blue-700 text-white border-2 border-[#667eea] rounded-lg text-base cursor-pointer hover:bg-[#5a6fd6] hover:border-[#5a6fd6] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
         Login
        </button>
        <p className="text-center text-sm text-[#666]">
          Don't have an account? <Link to="/register" className="text-[#667eea] hover:underline">Register</Link>
        </p>
      </form>
    </div>
  );
}
