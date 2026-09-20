import { motion } from 'framer-motion';

export default function WhyWorkWithUs() {
  return (
    // pt-0 (Padding Top 0) দেওয়া হয়েছে যাতে সেকশনের উপরে কোনো গ্যাপ না থাকে
    <section className="relative bg-[#1C2432] text-white pt-0 pb-24 md:pb-32 overflow-hidden min-h-[50vh] flex flex-col">
      
      {/* ========================================== */}
      {/* 🏷️ TAG / BADGE */}
      {/* ========================================== */}
      {/* 
        মোবাইলে ব্যাজটি যাতে স্ক্রিনের বাইরে না যায়, তাই -translate-x-1/2 রিমুভ করা হয়েছে।
        ml-6 ব্যবহার করা হয়েছে যাতে এটি বামপাশের লাইনের সাথে সুন্দরভাবে অ্যালাইন হয়।
      */}
      <div className="w-full flex md:justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "0%" }}
          // ml-6 দিয়ে এটিকে বাম দিকে সেফ জোনে রাখা হয়েছে
          className="mt-0 relative z-20 bg-[#1C212D] border border-white/10 px-4 md:px-6 py-1.5 md:py-2 rounded-md text-sm md:text-xl font-medium text-slate-300 tracking-wide mb-16 md:mb-20 shadow-xl ml-6 md:ml-0"
        >
          Why work with us
        </motion.div>
      </div>


      {/* ========================================== */}
      {/* 📝 MAIN CONTENT (Heading + Paragraph) */}
      {/* ========================================== */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-6 relative z-20">
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-10%" }}
          className="text-slate-400 text-base text-justify md:text-center md:text-lg plus-sans-normal leading-relaxed tracking-tight max-w-3xl"
        >
          Registration support is usually provided from the applicant’s side of the process but our team brings something different: first-hand UK ship registration experience from the <span className="text-slate-200 font-medium">Maritime and Coastguard Agency (MCA)</span> complemented by international maritime administration experience at the <span className="text-slate-200 font-medium">International Maritime Organization (IMO)</span>. That background gives us a practical understanding of how applications and supporting documents are reviewed, where queries can arise and what can lead to unnecessary back-and-forth. We bring that perspective to every case-helping you prepare carefully, navigate the requirements and move through the process with clarity.
        </motion.p>
        
      </div>

    </section>
  );
}