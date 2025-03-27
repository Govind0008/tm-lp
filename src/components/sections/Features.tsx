
import CustomButton from "../ui/custom-button";
import { motion } from "framer-motion";

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity:
      1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="self-center flex w-full max-w-[1200px] flex-col items-stretch mt-[110px] px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex gap-10 text-[rgba(32,33,36,1)] flex-wrap"
      >
        <div className="min-w-60 min-h-[72px] text-4xl font-medium text-center grow shrink w-[361px]">
          <div className="bg-[rgba(254,185,185,1)] min-h-[72px] w-[451px] max-w-full px-[7px] py-3 rounded-[5px] shadow-sm flex items-center justify-center">
            Features and Benefits
          </div>
        </div>
        <div className="text-2xl font-normal grow shrink w-[588px] flex items-center">
          Everything you need for faster, more accurate, mineral{" "}
          <strong>title work:</strong>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-[rgba(254,185,185,0.4)] flex flex-col text-[22px] text-[rgba(32,33,36,1)] font-light mt-[50px] px-[50px] py-[60px] rounded-[10px] shadow-sm"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            "Auto-generated interactive Runsheet – Sortable and Searchable.",
            "One-click flowchart objects creation – No more manual drawing and filling in.",
            "Automated Mineral Conveyance Calculations – Reduce errors and improve efficiency.",
            "Pre-populated mineral reports and drilling opinions – Save time with formatted templates.",
            "Linked supporting documents on every page – easy access and reference.",
            "Secure, cloud-based access - Work from anywhere.",
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="leading-[3] mt-9 first:mt-0 hover:text-[rgba(92,46,46,1)] transition-colors duration-300"
            >
              {feature}
            </motion.div>
          ))}
        </motion.div>
        <CustomButton className="self-center w-[298px] mt-24 max-md:mt-10 hover:scale-105 transition-transform duration-300">
          Join the Early Access Program
        </CustomButton>
      </motion.div>
    </section>
  );
};

export default Features;
