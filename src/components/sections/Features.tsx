import CustomButton from "../ui/custom-button";
import { motion } from "framer-motion";

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="self-center flex w-full max-w-[1200px] flex-col items-start mt-[80px] px-4">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center gap-6 text-[rgba(32,33,36,1)] w-full"
      >
        {/* Pink Background Box */}
        <div className="bg-[rgba(254,185,185,1)] px-8 py-3 rounded-[5px] shadow-sm text-[36px] font-semibold text-[#000]">
          Features and Benefits
        </div>

        {/* Supporting Text */}
        <div className="text-[28px] font-normal text-left max-w-[700px]">
          Everything you need for faster, more accurate, mineral{" "}
          <strong className="font-bold">title work:</strong>
        </div>
      </motion.div>

      {/* Full-Width Pink Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-[rgba(254,185,185,0.4)] flex flex-col text-[22px] text-[rgba(32,33,36,1)] font-light mt-[40px] px-[50px] py-[50px] rounded-[10px] shadow-sm w-full"
      >
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="list-disc pl-6 leading-[2]"
        >
          {[
            "Auto-generated interactive Runsheet – Sortable and Searchable.",
            "One-click flowchart objects creation – No more manual drawing and filling in.",
            "Automated Mineral Conveyance Calculations – Reduce errors and improve efficiency.",
            "Pre-populated mineral reports and drilling opinions – Save time with formatted templates.",
            "Linked supporting documents on every page – easy access and reference.",
            "Secure, cloud-based access - Work from anywhere.",
          ].map((feature, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="mt-5 hover:text-[rgba(92,46,46,1)] transition-colors duration-300 text-left"
            >
              {feature}
            </motion.li>
          ))}
        </motion.ul>

        {/* Centered Dark Button */}
        <CustomButton className="self-center mt-10 w-[298px] bg-[rgba(92,46,46,1)] text-white py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-300">
          Join the Early Access Program
        </CustomButton>
      </motion.div>
    </section>
  );
};

export default Features;
  