
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
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[36%] max-md:w-full"
        >
          <div className="flex flex-col items-stretch mt-[26px]">
            <h2 className="text-[rgba(92,46,46,1)] text-2xl font-semibold leading-none">
              Today's Manual Processes
            </h2>
            <div className="flex w-full flex-col mt-[35px] pl-[13px]">
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
                  className="flex items-stretch gap-5 mt-7 first:mt-0"
                >
                  <div className="bg-neutral-200 text-xs text-[rgba(32,33,36,1)] font-medium whitespace-nowrap leading-none w-8 h-8 px-2.5 rounded-[10px] border-white border-solid border-2 flex items-center justify-center">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-[#202124] text-lg font-normal leading-7 basis-auto grow shrink">
                    {text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-[64%] ml-5 max-md:w-full max-md:ml-0"
        >
          <div className="bg-[rgba(255,227,227,1)] flex w-full flex-col mx-auto pl-8 pr-20 py-[29px] rounded-[10px] shadow-sm max-md:px-5">
            <h2 className="text-[rgba(92,46,46,1)] text-2xl font-semibold leading-none">
              Our Solution
            </h2>
            <div className="flex items-stretch gap-5 flex-wrap mt-[38px]">
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
                  className="flex items-stretch gap-5 flex-wrap mt-[22px] first:mt-0"
                >
                  <div className="bg-white text-xs text-[rgba(32,33,36,1)] font-medium whitespace-nowrap leading-none w-8 h-8 rounded-[10px] border-[rgba(254,185,185,1)] border-solid border-2 flex items-center justify-center">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-[#202124] text-lg font-normal leading-7 basis-auto grow shrink">
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
