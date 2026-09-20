import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header 
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out flex items-center justify-between py-0 px-6 lg:px-16 ${
          isScrolled 
            ? 'py-4 bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
          
    {/* ১. বাম অংশ: লোগো */}
        <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-3 group z-50">
          <div>
            
            {/* SVG-এর বদলে PNG ইমেজ */}
            <img 
              src="https://res.cloudinary.com/dsrs8hryx/image/upload/v1789886875/Anchorage_Yacht_Logo-removebg-preview_c4snqs.png" // আপনার লোগোটি public ফোল্ডারে থাকলে শুধু নাম দিন, অথবা ইম্পোর্ট করা পাথ বসান
              alt="Anchorage Logo" 
              className="w-15 h-18 p-0 mt-0" 
            />
            
          </div>
        
        </Link>
        
        {/* ২. মাঝের অংশ: ডেস্কটপ ন্যাভিগেশন লিংকস (অ্যাবসলিউট পজিশন দিয়ে মাঝখানে রাখা হয়েছে) */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-white text-[15px] font-medium transition-colors" : "text-slate-200 text-[15px] font-medium hover:text-white transition-colors"}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "text-white text-[15px] font-medium transition-colors" : "text-slate-200 text-[15px] font-medium hover:text-white transition-colors"}>Services</NavLink>
          <NavLink to="/process" className={({ isActive }) => isActive ? "text-white text-[15px] font-medium transition-colors" : "text-slate-200 text-[15px] font-medium hover:text-white transition-colors"}>Process</NavLink>
        </nav>

        {/* ৩. ডান অংশ: কল টু অ্যাকশন বাটন এবং মোবাইল মেন্যু আইকন */}
        <div className="flex items-center gap-4 z-50">
          {/* ডেস্কটপ বাটন */}
          <Link className="hidden lg:flex items-center gap-3 px-5 py-2.5 text-[14px] font-medium text-white bg-white/5 hover:bg-white/10 rounded border border-white/10 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Get in Touch
            <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* মোবাইল অ্যানিমেটেড হ্যামবার্গার */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex lg:hidden flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none group"
            aria-label="Toggle Mobile Menu"
          >
            <span className={`block w-6 h-0.5 bg-slate-300 rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-white' : 'group-hover:bg-white'}`} />
            <span className={`block w-6 h-0.5 bg-slate-300 rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100 group-hover:bg-white'}`} />
            <span className={`block w-6 h-0.5 bg-slate-300 rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : 'group-hover:bg-white'}`} />
          </button>
        </div>
      </header>

      {/* মোবাইল ওভারলে মেনু */}
      <div 
        className={`fixed inset-0 bg-[#0B0F19]/95 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out flex flex-col items-center justify-center lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "text-white text-2xl font-medium tracking-wide transition-colors" : "text-slate-400 text-2xl font-medium tracking-wide hover:text-white transition-colors"}>Home</NavLink>
          <NavLink to="/services" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "text-white text-2xl font-medium tracking-wide transition-colors" : "text-slate-400 text-2xl font-medium tracking-wide hover:text-white transition-colors"}>Services</NavLink>
          <NavLink to="/process" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "text-white text-2xl font-medium tracking-wide transition-colors" : "text-slate-400 text-2xl font-medium tracking-wide hover:text-white transition-colors"}>Process</NavLink>
          
          <Link to="/contact" onClick={closeMobileMenu} className="mt-4 flex items-center gap-3 px-8 py-3 text-lg font-medium text-white bg-blue-600/20 hover:bg-blue-600/40 rounded-full border border-blue-500/30 transition-all">
            Get in Touch
          </Link>
        </nav>
      </div>
    </>
  );
}