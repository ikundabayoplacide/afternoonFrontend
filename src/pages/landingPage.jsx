import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';




const testimonials = [
  { name: 'Alice M.', text: 'Amazing experience! Fast delivery and great quality products.', rating: 5 },
  { name: 'John K.', text: 'Best online shop I have used. Super easy checkout process.', rating: 5 },
  { name: 'Sara L.', text: 'Love the variety of products. Will definitely shop again!', rating: 4 },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-[#764ba2] text-white px-10 py-24 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <span className="bg-white/20 text-sm px-3 py-1 rounded-full mb-4 inline-block">New arrivals every week</span>
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Shop Smarter,<br />Live Better</h1>
          <p className="text-white/80 text-lg mb-8">Discover thousands of products at unbeatable prices. Quality you can trust, delivered to your door.</p>
          <div className="flex gap-4">
            <Link to="/register" className="px-7 py-3 bg-white text-[#667eea] font-semibold rounded-xl hover:bg-gray-100 transition-colors">Get Started</Link>
            <a href="#categories" className="px-7 py-3 border border-white/60 rounded-xl hover:bg-white/10 transition-colors">Browse Categories</a>
          </div>
        </div>
        <div className="text-[10rem] select-none hidden md:block">🛒</div>
      </section>

      {/* Stats */}
      <section className="bg-[#f8f9ff] py-10 px-10">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[['50K+', 'Happy Customers'], ['10K+', 'Products'], ['500+', 'Brands']].map(([val, label]) => (
            <div key={label}>
              <p className="text-3xl font-bold text-[#667eea]">{val}</p>
              <p className="text-sm text-[#666] mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-16 px-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-[#764ba2] rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium opacity-80 mb-1">Limited Time Offer</p>
            <h3 className="text-3xl font-bold mb-2">Get 20% Off Your First Order</h3>
            <p className="opacity-80">Sign up today and use code <span className="font-bold bg-white/20 px-2 py-0.5 rounded">WELCOME20</span></p>
          </div>
          <Link to="/register" className="shrink-0 px-8 py-3 bg-white text-[#667eea] font-semibold rounded-xl hover:bg-gray-100 transition-colors">Claim Offer</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-10 bg-[#f8f9ff]">
        <h2 className="text-center text-2xl font-bold text-[#222] mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map(({ name, text, rating }) => (
            <div key={name} className="bg-white p-6 rounded-2xl shadow-sm border border-[#eee]">
              <p className="text-yellow-400 text-lg mb-3">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</p>
              <p className="text-[#555] text-sm mb-4">"{text}"</p>
              <p className="font-semibold text-[#333] text-sm">— {name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white py-10 px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-xl font-bold text-[#667eea]">ShopEase</h3>
            <p className="text-sm text-white/50 mt-1">Your trusted online marketplace</p>
          </div>
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm text-white/40">© 2025 ShopEase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
