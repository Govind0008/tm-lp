
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProcessComparison from "@/components/sections/ProcessComparison";
import Features from "@/components/sections/Features";
import EarlyAccess from "@/components/sections/EarlyAccess";
import { motion } from "framer-motion";
import Imagecard from "@/components/ui/imagecard";
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />
      <main className="flex-1 flex flex-col items-stretch">
        <Hero />
        <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="w-full text-[40px] text-[rgba(32,33,36,1)]  tracking-[-0.8px] leading-[55px] mt-[55px] pt-[25px] pb-[15px] px-[50px] rounded-[10px] border-[rgba(254,185,185,1)] border-solid border-2 max-w-[1200px] mx-auto max-md:px-5 shadow-sm text-left font-[400]"
>
  Repetitive clerical work of mineral title review is hard to delegate
  to clerical support. This is inefficient, prone to error, and not a
  fun part of the job.
</motion.div>

        <ProcessComparison />
        <Imagecard/>
        <Features />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
