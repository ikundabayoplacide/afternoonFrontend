import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '', email: '', password: '', phoneNumber: '',
    location: '', gender: '', age: '', date_of_birth: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });




  const inputCls = "w-full px-4 py-3 border-[1.5px] border-[#ddd] rounded-lg text-[0.95rem] outline-none transition-colors focus:border-[#667eea]";
  const labelCls = "text-sm font-medium text-[#444]";

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f0f4f8]">
      <form className="bg-white p-10 rounded-2xl w-[70%] max-w-[660px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex flex-col gap-4">
        <h2 className="text-center text-[#4a3f8f] text-2xl font-bold mb-2">Create Account</h2>
        {error && <p className="px-4 py-2.5 rounded-lg text-sm text-center bg-[#fde8e8] text-[#c0392b]">{error}</p>}
        {success && <p className="px-4 py-2.5 rounded-lg text-sm text-center bg-[#e8f8f0] text-[#27ae60]">{success}</p>}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className={labelCls}>Full Name</label>
            <input id="fullName" name="fullName" placeholder="e.g. John Doe" value={form.fullName} onChange={handleChange} className={inputCls} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className={labelCls}>Email</label>
            <input id="email" name="email" type="email" placeholder="e.g. john@example.com" value={form.email} onChange={handleChange} className={inputCls} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className={labelCls}>Password</label>
            <div className="relative flex items-center">
              <input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" value={form.password} onChange={handleChange} className={`${inputCls} pr-10`} />
              <span className="absolute right-3 cursor-pointer text-base select-none" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phoneNumber" className={labelCls}>Phone Number</label>
            <input id="phoneNumber" name="phoneNumber" placeholder="e.g. +250700000000" value={form.phoneNumber} onChange={handleChange} className={inputCls} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="location" className={labelCls}>Location</label>
            <input id="location" name="location" placeholder="e.g. Kigali" value={form.location} onChange={handleChange} className={inputCls} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="gender" className={labelCls}>Gender</label>
            <select id="gender" name="gender" value={form.gender} onChange={handleChange} className={inputCls}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="age" className={labelCls}>Age</label>
            <input id="age" name="age" type="number" placeholder="e.g. 25" value={form.age} onChange={handleChange} className={inputCls} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="date_of_birth" className={labelCls}>Date of Birth</label>
            <input id="date_of_birth" name="date_of_birth" type="date" value={form.date_of_birth} onChange={handleChange} className={inputCls} />
          </div>
        </div>
        <button
          type="submit" disabled={loading}
          className="w-full py-3 bg-[#667eea] text-white border-2 border-[#667eea] rounded-lg text-base cursor-pointer hover:bg-[#5a6fd6] hover:border-[#5a6fd6] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
        <p className="text-center text-sm text-[#666]">
          Already have an account? <Link to="/" className="text-[#667eea] hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
}
