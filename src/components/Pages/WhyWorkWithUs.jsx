import { motion } from 'framer-motion';

export default function WhyWorkWithUs() {
  return (
    // pt-0 (Padding Top 0) দেওয়া হয়েছে যাতে সেকশনের উপরে কোনো গ্যাপ না থাকে
    <section className="relative bg-[#111520] text-white pt-0 pb-24 md:pb-32 overflow-hidden min-h-[50vh] flex flex-col">
      
      {/* ========================================== */}
      {/* 🏷️ TAG / BADGE (কোনো মার্জিন নেই, সরাসরি টপ বর্ডারে) */}
      {/* ========================================== */}
      {/* 
        মোবাইলে আগের লাইনটা left-6 এ ছিল, তাই pl-6 এবং -translate-x-1/2 দিয়ে 
        ব্যাজটাকে ঠিক লাইনের নিচে বসানো হয়েছে। ডেক্সটপে এটি অটোমেটিক সেন্টারে থাকবে।
      */}
      <div className="w-full flex md:justify-center pl-6 md:pl-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "0%" }}
          // mt-0 এর কারণে এটি একদম উপরের বর্ডারে লেগে থাকবে
          className="mt-0 relative z-20 bg-[#1C212D] border-x border-b md:border-t border-white/10 px-4 py-1.5 rounded-b-md md:rounded-md text-xs md:text-xl font-medium text-slate-300 tracking-wide mb-16 md:mb-20 shadow-xl -translate-x-1/2 md:translate-x-0"
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
          className="text-slate-400 text-base plus-sans-normal text-center md:text-xl  leading-tight tracking-tight max-w-3xl"
        >
          While registration support is usually provided from the applicant's side of the process, our team also brings first-hand UK ship registration experience from the <span className="text-slate-200 font-medium">Maritime and Coastguard Agency (MCA)</span> complemented by international maritime administration experience at the <span className="text-slate-200 font-medium">International Maritime Organization (IMO)</span>That background gives us a practical understanding of how applications and supporting documents are reviewed, where queries can arise, and what can lead to unnecessary back-and-forth. We bring that perspective to every case-helping you prepare carefully, navigate the requirements and move through the process with clarity.

        </motion.p>
        
      </div>

    </section>
  );
}