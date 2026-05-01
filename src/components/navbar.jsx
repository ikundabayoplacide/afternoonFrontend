import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm sticky top-0 z-50">
      <h2 className="text-2xl font-bold text-[#667eea]">ShopEase</h2>
      <div className="hidden md:flex gap-8 text-sm font-medium text-[#444]">
        <a href="#features" className="hover:text-[#667eea] transition-colors">Features</a>
        <a href="#categories" className="hover:text-[#667eea] transition-colors">Categories</a>
        <a href="#testimonials" className="hover:text-[#667eea] transition-colors">Reviews</a>
      </div>
      <div className="flex gap-3">
        <Link to="/login" className="px-5 py-2 text-sm font-medium text-[#667eea] border border-[#667eea] rounded-lg hover:bg-blue-600 hover:text-white transition-colors">Login</Link>
        <Link to="/register" className="px-5 py-2 text-sm font-medium bg-blue-700 text-white rounded-lg hover:bg-[#5a6fd6] transition-colors">Register</Link>
      </div>
    </nav>
  );
}
