import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-[#090C10] pt-20 pb-16 md:pb-24 overflow-hidden font-sans">
      
      {/* Background Texture/Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ========================================== */}
        {/* 🛥️ FLOATING FOOTER CARD */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#121620] border border-white/5 rounded-2xl md:rounded-[2rem] p-8 md:p-14 lg:p-16 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]"
        >
          
          {/* Top Section: Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16 md:mb-24">
            
            {/* Column 1: Logo and Disclaimer (একটু বেশি জায়গা নেবে) */}
            <div className="lg:col-span-3 flex flex-col items-start pr-0 lg:pr-12">
              {/* Logo */}
              <div className="flex items-center gap-3 text-white font-bold tracking-[0.15em] uppercase mb-8">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Ship Wheel/Compass Icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22a10 10 0 100-20 10 10 0 000 20z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
                  <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
                </svg>
                Anchorage Yacht Services
              </div>
              
              {/* Description / Disclaimer */}
              <p className="text-slate-400 text-sm leading-relaxed tracking-wide text-justify md:text-left">
                Anchorage Yacht Services Ltd is an independent vessel registration and maritime administrative services company, providing specialist support with UK ship registration and selected international registration matters. We are not part of, endorsed by, or officially affiliated with the UK Ship Register, the Maritime and Coastguard Agency (MCA), the International Maritime Organization (IMO), or any flag State administration.

              </p>
            </div>

            {/* Column 2: Services */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              <h4 className="text-slate-200 text-sm font-semibold mb-2 uppercase tracking-wider">Services</h4>
              
              {/* Mapped Service Links */}
              {[
                'UK Part 1 Registration', 
                'UK Part 3 / Small Ships Register', 
                'Provisional Registration', 
                'Ownership & Registry Changes', 
                'International Registration'
              ].map((link) => (
                <a 
                  key={link} 
                  href="/services" 
                  className="text-slate-400 text-sm font-medium hover:text-white transition-colors duration-300 w-max"
                >
                  {link}
                </a>
              ))}

              {/* View all services link with hover animation */}
              <a 
                href="/services" 
                className="mt-2 text-white text-sm font-medium hover:text-cyan-200 transition-colors duration-300 flex items-center gap-2 group w-max"
              >
                View all services <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Column 3: Get in touch */}
            <div className="flex flex-col gap-4 lg:col-span-1">
              <h4 className="text-slate-200 text-sm font-semibold mb-2 uppercase tracking-wider">Get in touch</h4>
              
              <a href="mailto:registry@anchorageyacht.co.uk" className="text-slate-400 text-sm font-medium hover:text-cyan-400 transition-colors duration-300 break-words">
                registry@anchorageyacht.co.uk
              </a>
              
              <span className="text-slate-400 text-sm font-medium">
                United Kingdom
              </span>
              
              {/* Eligibility Check Link as a highlighted action */}
              <a href="#" className="mt-2 text-white text-sm plus-sans-medium hover:text-cyan-100 transition-colors duration-300 flex items-center gap-2 group">
                Eligibility check <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

          </div>

          {/* Bottom Section: Divider, Copyright & Legal Links */}
          <div className="border-t border-white/5 pt-8 flex flex-col xl:flex-row justify-between items-center xl:items-start gap-6">
            
            {/* Copyright */}
            <p className="text-slate-400 text-xs md:text-sm tracking-wide text-center xl:text-left">
              © 2026 Anchorage Yacht Services Ltd. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center xl:justify-end items-center gap-4 md:gap-8">
              {['Privacy Notice', 'Cookie Notice', 'Terms & Conditions', 'Disclaimer', 'Complaints'].map((legalLink) => (
                <a key={legalLink} href="#" className="text-slate-500 text-xs md:text-sm hover:text-white transition-colors duration-300">
                  {legalLink}
                </a>
              ))}
            </div>

          </div>

        </motion.div>
      </div>
    </footer>
  );
}