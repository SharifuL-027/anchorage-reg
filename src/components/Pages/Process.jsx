import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// ==========================================
// ১. ডাটা (Process Steps)
// ==========================================
const processData = [
  {
    num: "i",
    title: "Enquiry",
    desc: "Tell us about your vessel, its ownership, current registration and what you're looking to achieve."
  },
  {
    num: "ii",
    title: "Assessment",
    desc: "We assess the registration route and eligibility requirements, identify the documentation needed and highlight potential issues early."
  },
  {
    num: "iii",
    title: "Documentation",
    desc: "We help prepare, gather and review the required documentation — from ownership evidence and bills of sale to tonnage measurement and survey documentation where applicable."
  },
  {
    num: "iv",
    title: "Submission",
    desc: "Your application is submitted to the relevant registry, with us coordinating correspondence and assisting with any follow-up queries or additional documentation required."
  },
  {
    num: "v",
    title: "Registered",
    desc: "Once registration is completed, we review the resulting documentation and provide you with a clear record of the completed case."
  }
];

export default function Process() {
  const timelineRef = useRef(null);

  // Timeline Scroll Line Animation
  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const smoothLine = useSpring(timelineScroll, { damping: 20, stiffness: 100 });

  return (
    <section className="relative bg-[#1C2432] min-h-screen font-sans">
      
      {/* ========================================== */}
      {/* 🎬 HERO SECTION (Services Overview Style) */}
      {/* ========================================== */}
      <div className="relative w-full h-[75vh] md:h-[85vh] flex flex-col justify-between overflow-hidden">
        
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dsrs8hryx/image/upload/v1789888702/Gemini_Generated_Image_59gv0359gv0359gv_wd7xcg.jpg" 
            alt="Maritime Process" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C2432] via-[#090C10]/70 to-transparent"></div>
        </div>

        {/* Hero Content aligned to bottom */}
        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 lg:px-12 pb-16 md:pb-24 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            
            {/* Left Title */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full md:w-3/5"
            >
              <h1 className="text-4xl md:text-6xl plus-sans-bold text-white tracking-tight leading-[1.1] drop-shadow-2xl">
                From enquiry to <br className="hidden lg:block"/> registration
              </h1>
            </motion.div>
            
            {/* Right Text & Button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full md:w-2/5 md:pl-8 lg:pl-16 flex flex-col items-start"
            >
              <p className="text-slate-200 text-sm md:text-base plus-sans-medium leading-relaxed mb-6 drop-shadow-md">
                Advisory work across UK and international registration, scoped to what each vessel and owner actually needs — <span className="text-white font-semibold">not a fixed package.</span>
              </p>
              <button className="bg-white/10 plus-sans-bold hover:bg-white/20 border border-white/10 backdrop-blur-md text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-3 group shadow-lg">
                Get in Touch 
                <span className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
              </button>
            </motion.div>

          </div>
        </div>
      </div>


      {/* ========================================== */}
      {/* ⏳ TIMELINE SECTION (Step by Step Process) */}
      {/* ========================================== */}
      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 py-24 md:py-32" ref={timelineRef}>
        
        {/* Master Vertical Line (Background) */}
        <div className="absolute left-9.75 md:left-14.75 top-32 bottom-24 w-px bg-white/5 z-0"></div>
        
        {/* Animated Glow Line (Fills up on scroll) */}
        <motion.div 
          style={{ scaleY: smoothLine }}
          className="absolute left-9.75 md:left-14.75 top-32 bottom-24 w-0.5 bg-linear-to-b from-cyan-100 via-cyan-200 to-transparent z-10 origin-top shadow-[0_0_15px_rgba(34,211,238,0.5)]"
        ></motion.div>

        <div className="relative z-20 flex flex-col gap-16 md:gap-24">
          {processData.map((step, index) => (
            <div key={index} className="relative flex items-start gap-8 md:gap-16 group">
              
              {/* Left Side: Roman Numeral Node */}
              <div className="relative shrink-0 w-14 h-14 md:w-20 md:h-20 flex justify-center items-center rounded-full bg-[#111520] border border-white/10 group-hover:border-cyan-500/50 transition-colors duration-500 shadow-xl overflow-hidden mt-1">
                <span className="text-xl md:text-2xl font-serif italic font-bold text-slate-400 group-hover:text-cyan-200 transition-colors duration-500 z-10">
                  {step.num}
                </span>
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-500"></div>
              </div>

              {/* Right Side: Content Box */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="flex-1 flex flex-col pt-2"
              >
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight group-hover:text-cyan-50 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl group-hover:text-slate-300 transition-colors duration-300">
                  {step.desc}
                </p>
              </motion.div>

              {/* Huge Background Roman Numeral (Faded) for Desktop */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.03 }}
                viewport={{ once: true }}
                className="absolute right-0 top-0 hidden md:block pointer-events-none select-none"
              >
                <span className="text-[12rem] font-serif italic font-bold text-white leading-none">
                  {step.num}
                </span>
              </motion.div>

            </div>
          ))}
        </div>
      </div>

      {/* ========================================== */}
      {/* 🎯 BOTTOM CTA SECTION */}
      {/* ========================================== */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6 pb-32 text-center"
      >
        <div className="bg-[#121620] border border-white/10 rounded-2xl p-10 md:p-16 flex flex-col items-center shadow-2xl relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <h3 className="text-2xl md:text-4xl plus-sans-bold text-white mb-4 relative z-10">Ready to get started?</h3>
          <p className="text-slate-400 mb-8 max-w-xl relative z-10">
            Tell us about your vessel and we'll handle the entire registration process from start to finish.
          </p>
          <button className="relative z-10 bg-cyan-100 hover:bg-cyan-200 text-[#090C10] font-semibold px-8 py-3.5 rounded-xl transition-colors duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            Start eligibility check
          </button>
        </div>
      </motion.div>

    </section>
  );
}