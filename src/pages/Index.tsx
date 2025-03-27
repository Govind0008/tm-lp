
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProcessComparison from "@/components/sections/ProcessComparison";
import Features from "@/components/sections/Features";
import EarlyAccess from "@/components/sections/EarlyAccess";
import { motion } from "framer-motion";
import CustomButton from "@/components/ui/custom-button";

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
          className="w-full text-5xl text-[rgba(32,33,36,1)] font-light tracking-[-1.5px] leading-[60px] mt-[55px] pt-[25px] pb-[15px] px-[70px] rounded-[10px] border-[rgba(254,185,185,1)] border-solid border-2 max-w-[1200px] mx-auto max-md:px-5 shadow-sm"
        >
          Repetitive clerical work of mineral title review are hard to delegate
          to clerical support. This is inefficient, prone to error, and not a
          fun part of the job.
        </motion.div>
        <ProcessComparison />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-[rgba(254,185,185,0.4)] flex w-full flex-col items-stretch justify-center mt-[50px] px-20 py-[68px] rounded-[10px] max-md:px-5 shadow-sm"
        >
          <h2 className="text-[rgba(32,33,36,1)] text-4xl font-light leading-loose text-center">
            Drag-and-drop to upload your landman provided files and runsheet
          </h2>
          <div className="flex w-full flex-col items-stretch mt-[47px] px-[45px] max-md:px-5">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src="https://cdn.builder.io/api/v1/image/assets/b28b963e53c444f085ce79615ad630d0/d7cc5774a3b748e811759e356ca41f54d7f62cf0?placeholderIfAbsent=true"
              alt="Upload interface"
              className="aspect-[1.96] object-contain w-full rounded-[10px] shadow-md hover:shadow-lg transition-all duration-300"
            />
            <div className="flex w-[707px] max-w-full items-stretch gap-5 flex-wrap justify-between mt-20 max-md:mt-10">
              <CustomButton className="hover:scale-105 transition-transform duration-300">
                Join the Early Access Program
              </CustomButton>
              <div className="flex items-stretch gap-2 whitespace-nowrap">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div
                    key={num}
                    className={`flex items-center justify-center w-8 h-8 rounded-full border-white border-solid border-2 text-xs font-medium transition-all duration-300 hover:scale-110 ${
                      num === 1 ? "bg-[rgba(254,185,185,1)]" : "bg-neutral-200"
                    }`}
                  >
                    {num}
                  </div>
                ))}
                <div className="text-[#202124] text-[40px] font-bold leading-[0.4] my-auto transition-transform duration-300 hover:translate-x-1">
                  →
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <Features />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
