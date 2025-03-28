import { motion } from "framer-motion";

const ProcessComparison = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.1 * i }
    })
  };

  return (
    <section className="w-full max-w-[1320px] mt-[60px] mx-auto px-4">
      <div className="flex gap-10 items-start max-md:flex-col max-md:items-stretch">
        
        {/* Left Section - Manual Process */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[40%] max-md:w-full"
        >
          <div className="flex flex-col">
            <h2 className="text-[#5C2E2E] text-2xl font-semibold text-left">
              Today's Manual Processes
            </h2>
            <div className="flex flex-col mt-6 space-y-6 pl-4">
              {[
                "Manually drawing flowchart shapes and copying over information",
                "Manually tracking and calculating complex conveyances",
                "Manually moving document details from runsheets, to flowcharts, to conveyance calculations, to reports"
              ].map((text, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInVariant}
                  className="flex items-center gap-4 text-left"
                >
                  <div className="bg-neutral-200 text-xs font-medium w-8 h-8 rounded-lg flex items-center justify-start border-white border-2 pl-2">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-[#202124] text-lg font-normal leading-7 text-left">
                    {text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Section - Our Solution */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-[60%] max-md:w-full"
        >
          <div className="bg-[#FFE3E3] p-8 rounded-lg shadow-md">
            <h2 className="text-[#5C2E2E] text-2xl font-semibold text-left">
              Our Solution
            </h2>
            <div className="flex flex-col gap-6 mt-6">
              {[
                'Smart "file-to-runsheet" links that take you to the information you need – stop digging through folders and files',
                'Smart "runsheet-to-flowchart" shape generation - Never draw a box or rewrite a date again',
                "Instrument based mineral rights conveyance inputs and automated calculations are accessible from the flowchart shapes",
                "Customizable and autopopulated first draft mineral ownership reports, drilling opinions, and division orders.",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInVariant}
                  className="flex items-center gap-4 text-left"
                >
                  <div className="bg-white text-xs font-medium w-8 h-8 rounded-lg flex items-center justify-start border-[#FEB9B9] border-2 pl-2">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-[#202124] text-lg font-normal leading-7 text-left">
                    {text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessComparison;
