import { motion } from 'framer-motion';

const servicesData = [
  { 
    tag: "UK", 
    title: "UK Part 3 Small Ships Registration", 
    desc: "Support with UK Part 3 Small Ships Register (SSR) applications, including eligibility checks, application preparation, ownership and vessel details, submission and registry follow-up." 
  },
  { 
    tag: "UK", 
    title: "UK Part 1 Pleasure & Commercial Vessel Registration", 
    desc: "End-to-end support with UK Part 1 registration for eligible pleasure and commercial vessels, from vessel-name availability and ownership documentation through to tonnage measurement coordination, application preparation, submission and registry follow-up." 
  },
  { 
    tag: "UK", 
    title: "UK Provisional Registration", 
    desc: "Support with provisional UK registration where temporary registration is required before full registration can be completed, including application preparation, supporting documentation and progression towards full registration." 
  },
  { 
    tag: "Change", 
    title: "Change of Ownership & Vessel Details", 
    desc: "Support with changes to registered ownership and vessel particulars, including vessel name, port and other registered details, together with the preparation and review of supporting registry documentation." 
  },
  { 
    tag: "Finance", 
    title: "UK Part 1 Vessel Mortgage Registration", 
    desc: "Support with registering, transferring and discharging mortgages against UK Part 1 registered vessels, including preparation and review of the required documentation and coordination throughout the registry process." 
  },
  { 
    tag: "Survey", 
    title: "Tonnage Survey Coordination", 
    desc: "Where UK Part 1 registration requires tonnage measurement, we can help identify and coordinate with an appropriate authorised surveyor or organisation and manage the resulting documentation as part of the registration process." 
  },
  { 
    tag: "Closure", 
    title: "Deregistration & Registry Closure", 
    desc: "Assistance with closing a UK registration when a vessel is sold, re-flagged or otherwise removed from the register, including the required documentation and appropriate registry records following closure." 
  },
  { 
    tag: "Docs", 
    title: "Registration Application & Document Review", 
    desc: "Preparing your own registration application? We can review it before submission. Our pre-submission review checks the application and supporting documentation for missing information, inconsistencies and potential registry queries, helping you submit a more complete registration package." 
  },
  { 
    tag: "Flag", 
    title: "Flag Selection & International Registration Assistance", 
    desc: "Considering registration outside the UK? We can help identify suitable registration options based on ownership eligibility, vessel use, operating area and administrative requirements. For selected jurisdictions, we can also assist with application documentation and coordinate with the relevant overseas registry, local representative or registration agent." 
  }
];

// ==========================================
// 🔠 SPECIAL TEXT ANIMATION COMPONENT
// এই কম্পোনেন্টটি টেক্সটগুলোকে শব্দে শব্দে ভেঙে নিচ থেকে স্মুথলি রিভিল করবে
// ==========================================
const AnimatedTitle = ({ text }) => {
  const words = text.split(" ");
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        visible: { transition: { staggerChildren: 0.04 } } // প্রতিটি শব্দের মাঝে 0.04s ডিলি
      }}
      className="flex flex-wrap"
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-block mr-[0.25em]">
          <motion.span
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: { 
                y: 0, 
                opacity: 1, 
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } // বাটারি স্মুথ স্প্রিং ইজ (Ease)
              }
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

export default function ServicesOverview() {
  return (
    <section className="relative bg-[#090C10] min-h-screen pb-32 font-sans">
      
      {/* ========================================== */}
      {/* 🚢 BOLD HERO IMAGE PART (আগের মতোই রাখা হয়েছে) */}
      {/* ========================================== */}
      <div className="relative w-full h-[75vh] md:h-[85vh] flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dsrs8hryx/image/upload/f_auto,q_auto/v1789643973/Gemini_Generated_Image_yppu8hyppu8hyppu_vg5mit.jpg" 
            alt="Maritime Fleet" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#090C10] via-[#090C10]/70 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-360 mx-auto px-6 lg:px-12 pb-16 md:pb-24 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full md:w-3/5"
            >
              <h1 className="text-4xl md:text-6xl plus-sans-bold text-white tracking-tight leading-[1.1] drop-shadow-2xl">
                Registration and <br className="hidden lg:block"/> regulatory support
              </h1>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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
      {/* 📝 ORGANIZED TEXT-INDEX SECTION (New Design) */}
      {/* ========================================== */}
      <div className="relative z-20 w-full max-w-360 mx-auto px-6 lg:px-12 mt-12 md:mt-24">
        
        <div className="flex flex-col w-full border-t border-white/10">
          {servicesData.map((service, index) => {
            // ক্রমিক নম্বর তৈরি করা (যেমন: 01, 02)
            const serialNumber = (index + 1).toString().padStart(2, '0');

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col md:flex-row justify-between py-10 md:py-16 border-b border-white/10 hover:bg-white/2 transition-colors duration-500"
              >
                
                {/* Left Side: Serial Number & Tag */}
                <div className="w-full md:w-1/4 flex items-start gap-4 mb-6 md:mb-0">
                  <span className="text-xl md:text-2xl text-slate-100 font-mono tracking-widest mt-1 group-hover:text-cyan-500 transition-colors">
                    {serialNumber}
                  </span>
                  
                </div>

                {/* Right Side: Animated Title & Description */}
                <div className="w-full md:w-3/4 flex flex-col md:pr-12">
                  <h3 className="text-2xl md:text-4xl plus-sans-bold text-gray-50 mb-6 tracking-tight leading-[1.15] group-hover:text-cyan-50 transition-colors duration-500">
                    <AnimatedTitle text={service.title} />
                  </h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl group-hover:text-slate-300 transition-colors"
                  >
                    {service.desc}
                  </motion.p>
                </div>

              </motion.div>
            );
          })}
          {/* ========================================== */}
          {/* 🎯 ELIGIBILITY CHECK CTA (List এর শেষে) */}
          {/* ========================================== */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center justify-between py-12 md:py-16 border-b border-white/10 bg-linear-to-r from-cyan-900/10 to-transparent px-6 md:px-12 -mx-6 md:-mx-12 rounded-b-2xl"
          >
            <div className="w-full md:w-2/3 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl lg:text-4xl plus-sans-bold text-gray-50 mb-3 tracking-tight">
                Not sure which registration is right for your vessel?
              </h3>
              <p className="text-slate-100 text-sm md:text-base max-w-2xl leading-relaxed">
                Tell us a little about your vessel, ownership and intended use. We'll review the details and provide an initial assessment of the registration options and requirements — <span className="text-slate-200 font-medium">no obligation.</span>
              </p>
            </div>
            
            <div className="w-full md:w-1/3 flex md:justify-end">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto relative inline-flex h-14 items-center justify-center px-8 py-3 font-semibold text-[#090C10] bg-cyan-200 rounded-none overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] transition-all duration-300 group"
              >
                Start eligibility check
                {/* Button Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
              </motion.button>
            </div>
          </motion.div>
        </div>

      </div>
      

    </section>
  );
}