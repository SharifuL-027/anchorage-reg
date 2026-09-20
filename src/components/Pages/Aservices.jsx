import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// ==========================================
// ১. আপডেট করা ১০টি সার্ভিস ডাটা
// ==========================================
const servicesData = [
  { 
    tag: "UK", 
    title: "UK Part 3 Small Ships Registration", 
    desc: "Support with UK Part 3 Small Ships Register (SSR) applications, including eligibility checks, application preparation, ownership and vessel details, submission and registry follow-up.",
    img: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=1144&auto=format&fit=crop" 
  },
  { 
    tag: "UK", 
    title: "UK Part 1 Pleasure & Commercial Vessel", 
    desc: "End-to-end support with UK Part 1 registration for eligible pleasure and commercial vessels, from vessel-name availability and ownership documentation through to tonnage measurement coordination, application preparation, submission and registry follow-up.",
    img: "https://images.unsplash.com/photo-1502621737164-fb78cb47e276?q=80&w=1170&auto=format&fit=crop"
  },
  { 
    tag: "UK", 
    title: "UK Provisional Registration", 
    desc: "Support with provisional UK registration where temporary registration is required before full registration can be completed, including application preparation, supporting documentation and progression towards full registration.",
    img: "https://images.pexels.com/photos/7301510/pexels-photo-7301510.jpeg" 
  },
  { 
    tag: "Change", 
    title: "Change of Ownership & Vessel Details", 
    desc: "Support with changes to registered ownership and vessel particulars, including vessel name, port and other registered details, together with the preparation and review of supporting registry documentation.",
    img: "https://images.unsplash.com/photo-1630613241659-d12146e3913c?q=80&w=1170&auto=format&fit=crop" 
  },
  { 
    tag: "Finance", 
    title: "UK Part 1 Vessel Mortgage Registration", 
    desc: "Support with registering, transferring and discharging mortgages against UK Part 1 registered vessels, including preparation and review of the required documentation and coordination throughout the registry process.",
    img: "https://images.pexels.com/photos/1007836/pexels-photo-1007836.jpeg" 
  },
  { 
    tag: "Survey", 
    title: "Tonnage Survey Coordination", 
    desc: "Where UK Part 1 registration requires tonnage measurement, we can help identify and coordinate with an appropriate authorised surveyor or organisation and manage the resulting documentation as part of the registration process.",
    img: "https://oceanskies.com/wp-content/uploads/2025/07/52-scaled.jpg" 
  },
  { 
    tag: "Closure", 
    title: "Deregistration & Registry Closure", 
    desc: "Assistance with closing a UK registration when a vessel is sold, re-flagged or otherwise removed from the register, including the required documentation and appropriate registry records following closure.",
    img: "https://images.pexels.com/photos/15431025/pexels-photo-15431025.jpeg" 
  },
  { 
    tag: "Docs", 
    title: "Registration Application & Document Review", 
    desc: "Preparing your own registration application? We can review it before submission. Our pre-submission review checks the application and supporting documentation for missing information, inconsistencies and potential registry queries, helping you submit a more complete registration package.",
    img: "https://images.unsplash.com/photo-1674606867042-2aa3581c1bb5?q=80&w=1170&auto=format&fit=crop" 
  },
  { 
    tag: "Flag", 
    title: "Flag Selection & International Registration", 
    desc: "Considering registration outside the UK? We can help identify suitable registration options based on ownership eligibility, vessel use, operating area and administrative requirements. For selected jurisdictions, we can also assist with application documentation and coordinate with the relevant overseas registry.",
    img: "https://images.unsplash.com/photo-1656525399790-6303e8829dd7?q=80&w=1170&auto=format&fit=crop" 
  },
  {
    tag: "Setup",
    title: "UK Company Formation for Vessel Ownership",
    desc: "Administrative assistance with incorporating a UK limited company where corporate ownership has already been selected for the vessel, including company formation and preparation of the corporate documentation required for the registration process.",
    img: "https://images.unsplash.com/photo-1604737637145-48cc31d160eb?q=80&w=1332&auto=format&fit=crop"
  }
];

// ==========================================
// FADED APP-WINDOW / BROWSER COMPONENT
// ==========================================
const RealFadedImage = ({ isLeft, imgSrc, windowTitle }) => {
  return (
    <div 
      className="relative mt-6 md:mt-10 w-full max-w-[700px] h-[220px] sm:h-[300px] md:h-[450px] border border-white/10 rounded-2xl bg-[#090C10] shadow-2xl overflow-hidden group flex flex-col"
      style={{
        WebkitMaskImage: isLeft 
          ? 'linear-gradient(to right, transparent 0%, black 15%, black 100%)' 
          : 'linear-gradient(to left, transparent 0%, black 15%, black 100%)',
        maskImage: isLeft 
          ? 'linear-gradient(to right, transparent 0%, black 15%, black 100%)'
          : 'linear-gradient(to left, transparent 0%, black 15%, black 100%)'
      }}
    >
      
      {/* 🖥️ APP WINDOW HEADER */}
      <div className="flex items-center px-4 md:px-5 py-2.5 md:py-3 bg-[#131823] border-b border-white/5 relative z-10 shrink-0">
        <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-400 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span className="text-xs md:text-[13px] font-medium text-slate-300 tracking-wide truncate">
          {windowTitle || "Service Dashboard"}
        </span>
      </div>

      {/* 🖼️ IMAGE CONTENT AREA */}
      <div className="relative w-full flex-1 overflow-hidden bg-[#090C10]">
        <img 
          src={imgSrc} 
          alt={windowTitle} 
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply pointer-events-none group-hover:bg-slate-900/10 transition-colors duration-700"></div>
      </div>

    </div>
  );
};


export default function Services() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  return (
    <section ref={containerRef} className="relative bg-[#111520] text-white py-0 pt-12 md:pt-12 md:py-0 overflow-hidden">
      
      {/* THE MASTER DRAWING LINE */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2 z-0"></div>
      
      <motion.div 
        style={{ scaleY: smoothProgress }} 
        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gray-600 to-gray-400 md:-translate-x-1/2 shadow-[0_0_15px_rgba(156,163,175,0.5)] z-10 origin-top"
      ></motion.div>


      {/* ZIG-ZAG TIMELINE WITH BIG IMAGES */}
      <div className="relative max-w-[90rem] mx-auto w-full z-20 pb-20">
        {servicesData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={index} className="relative w-full flex mb-32 md:mb-48 group">
              
              {/* Center Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#111520] border-2 border-gray-400 rounded-full z-20 shadow-[0_0_10px_rgba(156,163,175,0.5)] mt-3 transition-transform duration-300 group-hover:scale-150"></div>

              {/* ================= MOBILE LAYOUT ================= */}
              <div className="md:hidden w-full pl-14 pr-5 flex flex-col">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-5%" }}
                >
                  <div className="inline-flex items-center px-3 py-1.5 mb-3 rounded bg-white/5 border border-white/10 w-max">
                    <span className="text-[10px] uppercase tracking-widest text-slate-300 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-gray-400 rounded-full inline-block"></span> {item.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3 leading-tight">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-5%" }}
                >
                  <RealFadedImage isLeft={true} imgSrc={item.img} windowTitle={item.title} />
                </motion.div>
              </div>

              {/* ================= DESKTOP ZIG-ZAG LAYOUT ================= */}
              <div className="hidden md:flex w-full">
                
                {/* Left Column */}
                <div className="w-1/2 pr-16 lg:pr-24 flex flex-col items-end text-left">
                  {isLeft && (
                    <div className="w-full max-w-[700px]">
                      <motion.div 
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-15%" }}
                      >
                        <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded bg-white/5 border border-white/10">
                          <span className="text-xs uppercase tracking-widest text-slate-300 flex items-center gap-2">
                            <span className="w-3.5 h-3.5 border border-slate-400 rounded-full inline-block"></span> {item.tag}
                          </span>
                        </div>
                        <h3 className="text-[2.75rem] font-semibold text-white mb-5 leading-[1.1]">{item.title}</h3>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-xl">{item.desc}</p>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-15%" }}
                      >
                        <RealFadedImage isLeft={true} imgSrc={item.img} windowTitle={item.title} />
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Right Column */}
                <div className="w-1/2 pl-16 lg:pl-24 flex flex-col items-start text-left">
                  {!isLeft && (
                    <div className="w-full max-w-[700px]">
                      <motion.div 
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-15%" }}
                      >
                        <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded bg-white/5 border border-white/10">
                          <span className="text-xs uppercase tracking-widest text-slate-300 flex items-center gap-2">
                            <span className="w-3.5 h-3.5 border border-slate-400 rounded-full inline-block"></span> {item.tag}
                          </span>
                        </div>
                        <h3 className="text-[2.75rem] font-semibold text-white mb-5 leading-[1.1]">{item.title}</h3>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-xl">{item.desc}</p>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-15%" }}
                      >
                        <RealFadedImage isLeft={false} imgSrc={item.img} windowTitle={item.title} />
                      </motion.div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}