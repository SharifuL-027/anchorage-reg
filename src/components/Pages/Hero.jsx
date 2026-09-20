import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);

  // স্ক্রল ট্র্যাক
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // বাটারি স্মুথ স্প্রিং ইঞ্জিন
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // ==========================================
  // ১. Phase 1 (টেক্সট এবং ৪টি কার্ড)
  // ==========================================
  const phase1Opacity = useTransform(smoothProgress, [0, 0.15, 1], [1, 0, 0]);
  const phase1Y = useTransform(smoothProgress, [0, 0.15, 1], ["0vh", "-100vh", "-100vh"]);

  // ==========================================
  // ২. বোট 
  // ==========================================
  const boatScale = useTransform(smoothProgress, [0.10, 0.50], [1, 0.15]); 
  const boatY = useTransform(smoothProgress, [0.10, 0.50], ["10vh", "20vh"]); 
  
  // বোট একদম শেষে (90% - 95%) গায়েব হবে
  const boatOpacity = useTransform(smoothProgress, [0.90, 0.95], [1, 0]); 

  // ==========================================
  // ৩. ট্রেইল লাইন ও রাডার (আপনার সেই ম্যাজিক লাইন)
  // ==========================================
  const lineHeight = useTransform(smoothProgress, [0.10, 0.50, 0.85, 1], ["0vh", "20vh", "20vh", "250vh"]);
  const lineOpacity = useTransform(smoothProgress, [0.10, 0.20, 1], [0, 1, 1]); 

  const radarOpacity = useTransform(smoothProgress, [0.45, 0.50], [0, 1]);
  const radarScale = useTransform(smoothProgress, [0.45, 0.50], [0.5, 1]);

  const particlesOpacity = useTransform(smoothProgress, [0.50, 0.55], [0, 1]);
  const particlesScale = useTransform(smoothProgress, [0.50, 0.55], [0, 1]);

  // ==========================================
  // 🗺️ ম্যাজিক ১: BACKGROUND MAP PARALLAX
  // ==========================================
  const mapY = useTransform(smoothProgress, [0, 1], ["15vh", "-120vh"]);

  // ==========================================
  // 🎬 ম্যাজিক ২: ROLLING SUBTITLES (লাইন রিপ্লেসমেন্ট)
  // ==========================================
// ==========================================
  // 🎬 ম্যাজিক ২: LEFT-TO-RIGHT TYPING / REVEAL
  // ==========================================
  // ব্লক ১: Registration expertise...
  const block1Opacity = useTransform(smoothProgress, [0.54, 0.55, 0.65, 0.68], [0, 1, 1, 0]);
  const block1Clip = useTransform(smoothProgress, [0.55, 0.60], ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]);
  const block1Y = useTransform(smoothProgress, [0.55, 0.60, 0.65, 0.68], ["20px", "0px", "0px", "-30px"]);

  // ব্লক ২: MCA Heading + Description
  const block2Opacity = useTransform(smoothProgress, [0.67, 0.68, 0.76, 0.79], [0, 1, 1, 0]);
  const block2Clip = useTransform(smoothProgress, [0.68, 0.73], ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]);
  const block2Y = useTransform(smoothProgress, [0.68, 0.73, 0.76, 0.79], ["20px", "0px", "0px", "-30px"]);

  // ব্লক ৩: IMO Heading + Description
  const block3Opacity = useTransform(smoothProgress, [0.78, 0.79, 1], [0, 1, 1]);
  const block3Clip = useTransform(smoothProgress, [0.79, 0.84], ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]);
  const block3Y = useTransform(smoothProgress, [0.79, 0.84, 1], ["20px", "0px", "0px"]);

  // ==========================================
  // 🚀 Camera Pan (পুরো সিস্টেম উপরে তোলার জন্য)
  // ==========================================
  const cameraPanY = useTransform(smoothProgress, [0.90, 1], ["0vh", "-35vh"]);


  return (
    // এখানে কোনোভাবেই overflow-hidden দেওয়া যাবে না।
    <section ref={containerRef} className="relative h-[400vh] bg-[#111520]">
      
      {/* স্টিকি কন্টেইনার */}
      <div className="sticky top-0 h-screen w-full flex justify-center items-center">

        {/* 🗺️ BACKGROUND MAP */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div style={{ y: mapY }} className="relative w-full h-[200vh]">
            <svg className="absolute top-[20%] left-[-5%] w-[35vw] h-auto fill-slate-800 opacity-40" viewBox="0 0 400 800" xmlns="http://www.w3.org/2000/svg">
              <path d="M-50,0 C120,80 280,250 200,450 C120,650 250,750 80,850 L-50,850 Z" />
              <path d="M250,150 C270,160 280,190 260,210 C240,230 220,180 250,150 Z" />
              <circle cx="280" cy="550" r="12" />
              <circle cx="230" cy="620" r="8" />
            </svg>
            <svg className="absolute top-[40%] right-[-5%] w-[30vw] h-auto fill-slate-800 opacity-40" viewBox="0 0 400 800" xmlns="http://www.w3.org/2000/svg">
              <path d="M450,0 C300,150 200,350 280,550 C360,750 250,850 450,900 Z" />
              <path d="M180,250 C160,260 150,290 170,310 C190,330 210,280 180,250 Z" />
              <circle cx="120" cy="450" r="15" />
            </svg>
          </motion.div>
        </div>

        {/* --- ব্যাকগ্রাউন্ড রিং --- */}
        <div className="absolute top-[10vh] left-1/2 -translate-x-1/2 w-75 h-[300px] rounded-full border border-white/[0.03] pointer-events-none z-0"></div>
        <div className="absolute top-[25vh] left-1/2 -translate-x-1/2 w-56.25 h-[225px] rounded-full border border-white/4 pointer-events-none z-0"></div>

        {/* PHASE 1: মেইন টেক্সট ও ৪টি কার্ড */}
        <motion.div style={{ opacity: phase1Opacity, y: phase1Y }} className="absolute inset-0 z-30 pointer-events-none">
          <div className="absolute top-[12vh] w-full text-center flex flex-col items-center px-4">
            {/* মোবাইলের জন্য টেক্সট সাইজ রেসপন্সিভ করা হয়েছে */}
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto drop-shadow-lg">
             Yacht & Vessel Registration, <br/>backed by a team with first-hand UK registry experience.
            </h1>
            <p className="text-sm md:text-[16px] text-slate-100 max-w-2xl mx-auto mt-6 leading-relaxed">
              Specialist support with UK Part 1 and Part 3 registration, pleasure and commercial vessels, provisional registration, changes of ownership and vessel details, deregistration, mortgages and registry documentation. </p>
          </div>

          <div className="absolute inset-0 max-w-360 mx-auto hidden lg:block">
            {/* Card 1: UK Registration */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} 
              className="absolute top-[38vh] right-[calc(50%+280px)] xl:right-[calc(50%+340px)] w-64 xl:w-72 bg-[#181C28]/95 p-5 rounded-xl border border-white/5 shadow-2xl backdrop-blur-md">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Status</span>
                <span className="text-green-400 text-xs font-medium">Verified ✔</span>
              </div>
              <p className="text-white text-base font-semibold mb-1">UK Part 1 & 3 Registry</p>
              <p className="text-xs text-slate-400 leading-relaxed">Eligibility confirmed and documentation securely processed.</p>
            </motion.div>
            
            {/* Card 2: Flag Advisory */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} 
              className="absolute top-[68vh] right-[calc(50%+240px)] xl:right-[calc(50%+290px)] w-64 xl:w-72 bg-[#181C28]/95 p-5 rounded-xl border border-white/5 shadow-2xl backdrop-blur-md">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Advisory</span>
                <span className="text-cyan-400 text-xs font-medium">Active ●</span>
              </div>
              <p className="text-white text-base font-semibold">Flag Selection Match</p>
            </motion.div>

            {/* Card 3: Commercial Compliance */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} 
              className="absolute top-[38vh] left-[calc(50%+280px)] xl:left-[calc(50%+340px)] w-64 xl:w-72 bg-[#181C28]/95 p-5 rounded-xl border border-white/5 shadow-2xl backdrop-blur-md">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Compliance</span>
                <span className="text-slate-400 text-xs font-medium">Cleared 🔒</span>
              </div>
              <p className="text-white text-base font-semibold mb-1">Commercial Vessel</p>
              <p className="text-xs text-slate-400 leading-relaxed">Tonnage, survey, and ownership structure verified.</p>
            </motion.div>

            {/* Card 4: Transfer of Ownership */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }} 
              className="absolute top-[68vh] left-[calc(50%+240px)] xl:left-[calc(50%+290px)] w-64 xl:w-72 bg-[#181C28]/95 p-5 rounded-xl border border-white/5 shadow-2xl backdrop-blur-md">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Ownership</span>
                <span className="text-slate-400 text-xs font-medium">UK 🇬🇧</span>
              </div>
              <p className="text-white text-base font-semibold">Clean Registry Transfer</p>
            </motion.div>
          </div>
        </motion.div>

        {/* THE MASTER ANCHOR (ক্যামেরা প্যান সহ রাডার ও বোট) */}
        <motion.div style={{ y: cameraPanY }} className="absolute top-[55vh] left-0 w-full h-0 pointer-events-none z-20">
          
          {/* আপনার লাইন! এটি একদম পারফেক্টলি নেমে আসবে */}
          <motion.div 
            style={{ height: lineHeight, opacity: lineOpacity }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-400 z-10 origin-top"
          ></motion.div>

          <motion.div style={{ opacity: radarOpacity, scale: radarScale }} className="absolute top-[20vh] left-1/2 -translate-x-1/2 flex justify-center items-center pointer-events-none z-10">
            {/* ম্যাজিক: মোবাইলে রাডারটি যেন স্ক্রিন না ভাঙে তাই scale-50 দেওয়া হয়েছে, ডেস্কটপে 100% থাকবে */}
            <div className="relative flex justify-center items-center scale-50 md:scale-100">
              <div className="absolute w-64 h-64 rounded-full border border-cyan-500/30"></div>
              <div className="absolute w-125 h-125 rounded-full border border-cyan-500/20"></div>
              <div className="absolute w-200 h-200 rounded-full border border-cyan-500/10"></div>
              <div className="absolute w-200 h-200 rounded-full bg-[conic-gradient(from_0deg,transparent_75%,rgba(34,211,238,0.15)_100%)] animate-[spin_4s_linear_infinite]"></div>

              <motion.div style={{ opacity: particlesOpacity, scale: particlesScale }}>
                <div className="absolute -top-37.5 left-25 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-ping absolute"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <div className="absolute -bottom-25 -left-50 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping absolute"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div style={{ y: boatY, scale: boatScale, opacity: boatOpacity }} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
            {/* বোটটি মোবাইলেও সুন্দর ফিট হবে, ডেস্কটপে আপনার ৩২০পিক্সেলই থাকবে */}
            <img src="/yacht.png" alt="Yacht" className="w-[180px] md:w-[320px] max-w-[80vw] md:max-w-none h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]" />
          </motion.div>
        </motion.div>


        {/* ========================================== */}
        {/* 🎬 PHASE 5: ROLLING & TYPING SUBTITLES */}
        {/* ========================================== */}
        <motion.div 
          style={{ y: cameraPanY }} // রাডারের সাথে পুরো কন্টেইনার উপরে উঠবে
          className="absolute top-[35%] w-full z-30 flex justify-center items-center pointer-events-none"
        >
          <div className="relative w-full max-w-5xl h-[120px] flex items-center justify-center overflow-visible">
            
            {/* ----------------- ব্লক ১ ----------------- */}
            <motion.div 
              style={{ opacity: block1Opacity, y: block1Y, clipPath: block1Clip }}
              className="absolute w-full flex flex-col items-center justify-center px-4"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl plus-sans-bold tracking-tight text-white drop-shadow-2xl text-center leading-[1.1]">
                Registration expertise shaped from within.
              </h2>
            </motion.div>
            
            {/* ----------------- ব্লক ২ (MCA) ----------------- */}
            <motion.div 
              style={{ opacity: block2Opacity, y: block2Y, clipPath: block2Clip }}
              className="absolute w-full flex flex-col items-center justify-center px-4"
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl plus-sans-bold tracking-tight text-white drop-shadow-2xl text-center mb-3">
                MARITIME AND COASTGUARD AGENCY (MCA)
              </h2>
              <p className="text-sm md:text-lg lg:text-xl text-slate-100 font-medium tracking-wide drop-shadow-md text-center max-w-2xl">
                First-hand experience in UK ship registration.
              </p>
            </motion.div>
            
            {/* ----------------- ব্লক ৩ (IMO) ----------------- */}
            <motion.div 
              style={{ opacity: block3Opacity, y: block3Y, clipPath: block3Clip }}
              className="absolute w-full flex flex-col items-center justify-center px-4"
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl plus-sans-bold tracking-tight text-gray-100 drop-shadow-2xl text-center mb-3">
                INTERNATIONAL MARITIME ORGANIZATION (IMO)
              </h2>
              <p className="text-sm md:text-lg lg:text-xl text-slate-100 font-medium tracking-wide drop-shadow-md text-center max-w-2xl">
                Experience in international maritime administration.
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}