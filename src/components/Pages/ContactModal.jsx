import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesList = [
  "UK Part 3 Small Ships Registration",
  "UK Part 1 Pleasure & Commercial Vessel Registration",
  "UK Provisional Registration",
  "Change of Ownership & Vessel Details",
  "UK Part 1 Vessel Mortgage Registration",
  "Tonnage Survey Coordination",
  "Deregistration & Registry Closure",
  "Registration Application & Document Review",
  "Flag Selection & International Registration Assistance"
];

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    otherSubject: '',
    message: ''
  });

  // Modal ওপেন থাকলে বডি স্ক্রল বন্ধ রাখার জন্য
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Submit logic here
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 font-sans">
          
          {/* Background Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          ></motion.div>

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-[#131823] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 md:px-8 border-b border-white/5 shrink-0">
              <h2 className="text-2xl font-bold text-white tracking-tight relative">
                Contact Form
                {/* Cyan Accent Line matching reference image style */}
                <div className="absolute -bottom-6 left-0 w-1/2 h-[2px] bg-cyan-500"></div>
              </h2>
              
              <button 
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#090C10] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#090C10] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#090C10] border border-white/10 text-white rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    >
                      <option value="" disabled>- Select -</option>
                      {servicesList.map((service, idx) => (
                        <option key={idx} value={service}>{service}</option>
                      ))}
                      <option value="Other Services">Other Services</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Conditional Input for "Other Services" */}
                <AnimatePresence>
                  {formData.subject === 'Other Services' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: -10 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 0 }}
                      exit={{ opacity: 0, height: 0, marginTop: -10 }}
                      className="overflow-hidden"
                    >
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Specify Required Service <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="otherSubject"
                        value={formData.otherSubject}
                        onChange={handleChange}
                        required={formData.subject === 'Other Services'}
                        placeholder="Please write down your service name..."
                        className="w-full bg-[#090C10] border border-cyan-500/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors placeholder:text-slate-600"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-[#090C10] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-y"
                  ></textarea>
                  <p className="text-xs text-slate-400 mt-2">10 or more words required</p>
                </div>

                {/* Footer / Captcha & Submit */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-4 pt-6 border-t border-white/5">
                  
                  {/* Dummy Verification Box matching reference image */}
                  <div className="flex items-center gap-3 bg-[#090C10] border border-white/10 p-3 pr-8 rounded-md">
                    <input type="checkbox" required className="w-5 h-5 accent-cyan-500 cursor-pointer rounded" />
                    <span className="text-red-500 font-bold tracking-wide">Verified</span>
                    <span className="text-[10px] text-slate-500 absolute ml-23.75 mt-6">Protected by ALTCHA</span>
                  </div>

                  <button 
                    type="submit"
                    className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg shadow-red-500/20"
                  >
                    Submit
                  </button>
                </div>

              </form>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}