import Aservices from "./Pages/Aservices";
import EligibilityCheck from "./Pages/EligibilityCheck";
import Hero from "./Pages/Hero";
import WhyWorkWithUs from "./Pages/WhyWorkWithUs";

export default function Home() {
  return (
    <div className="w-full min-h-[200vh]"> {/* স্ক্রল করার জায়গা রাখার জন্য 200vh দিলাম */}
      <Hero/>
      <Aservices/>
      <WhyWorkWithUs/>
      <EligibilityCheck/>
    </div>
  );
}