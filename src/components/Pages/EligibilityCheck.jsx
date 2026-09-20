import { motion } from 'framer-motion';

// আপনার দেওয়া ডাটা ১ (চেকলিস্ট)
const requirements = [
  "Vessel type & length",
  "Private or commercial use",
  "Owner nationality & residence",
  "Individual or company ownership",
  "Current flag, if any",
  "Vessel location & operating area"
];

export default function EligibilityCheck() {
  return (
    <section className="relative bg-[#1C2432] text-white py-24 md:py-32 overflow-hidden">
      
      {/* Background Glow Illusions (হালকা গ্লো রাখা হয়েছে যাতে টেক্সটগুলো সুন্দর ফুটে ওঠে) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-[80rem] mx-auto px-6 lg:px-12 relative z-20">
        
        {/* ========================================== */}
        {/* 🌟 OPEN LAYOUT CTA (NO CARD BACKGROUND) */}
        {/* ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-10%" }}
          // এখান থেকে কার্ডের সব ব্যাকগ্রাউন্ড, শ্যাডো এবং বর্ডার মুছে ফেলা হয়েছে
          className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 group"
        >
          
          {/* ================= LEFT SIDE (DATA 1) ================= */}
          <div className="w-full lg:w-3/5 flex flex-col">
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
              Not sure which registration is  <span className="text-[#90d2d6]">right for your vessel?</span>
            </h2>
            
            <p className="text-base md:text-lg text-slate-200 leading-relaxed mb-10 max-w-2xl">
             Tell us a little about your vessel, ownership and intended use. We'll review the details and provide an initial assessment of the registration options and requirements — <span className="text-white font-medium">with no obligation.</span>
            </p>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {requirements.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  {/* Glowing Check/Dot */}
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-50 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                  <span className="text-sm md:text-base text-slate-200 font-medium tracking-wide">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
            
          </div>


          {/* ================= RIGHT SIDE (DATA 2 - BUTTON) ================= */}
          {/* ডানদিকের বর্ডারটাও মুছে দেওয়া হয়েছে ওপেন লুকের জন্য */}
          <div className="w-full lg:w-2/5 flex flex-col items-start lg:items-end text-left lg:text-right pt-8 lg:pt-0">
            
            {/* Glowing CTA Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto relative inline-flex h-14 md:h-16 items-center justify-center px-8 py-3 font-semibold text-[#090C10] bg-cyan-200 rounded-none overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] transition-all duration-300"
            >
              Start the eligibility check
              {/* Button Shine Effect */}
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </motion.button>

            {/* Subtext (Reviewed by a person) */}
            <div className="mt-5 flex items-center gap-2 lg:justify-end opacity-80">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-xs md:text-sm text-slate-400 font-medium">
                Reviewed by a person, not an algorithm.
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}