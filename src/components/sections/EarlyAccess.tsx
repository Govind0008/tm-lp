import CustomButton from "../ui/custom-button";
import { motion } from "framer-motion";

const EarlyAccess = () => {
  return (
    <section className="self-center flex w-full max-w-[1200px] flex-col mt-[58px] px-4">
      {/* Heading with background (LEFT ALIGNED and CONSTRAINED WIDTH) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-start"
      >
        <div className="bg-[rgba(254,185,185,1)] px-6 py-3 rounded-md shadow-sm w-fit">
          <h2 className="text-3xl font-semibold text-left text-[rgba(32,33,36,1)]">
            Early Access Program Incentives
          </h2>
        </div>
      </motion.div>

      {/* Content section */}
      <div className="mt-[60px] max-md:mt-10 flex flex-col items-center">
        <div className="flex gap-12 max-md:flex-col max-md:items-center">
          
          {/* Left - Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-[45%] max-w-[500px] max-md:w-full text-gray-800"
          >
            <ul className="list-disc pl-6 text-lg leading-[32px] text-left">
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                3-month free trial – No credit card or commitment
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                75% discount vs full price
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Opportunity to shape the features of future development
              </motion.li>
            </ul>
          </motion.div>

          {/* Right - Image with Watch Demo Button */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-[50%] max-md:w-full flex justify-center"
          >
            <div className="relative bg-gray-100 shadow-md rounded-lg overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b28b963e53c444f085ce79615ad630d0/a4a602b9af0c60218c9acf20d7d9ea5b33f961e0?placeholderIfAbsent=true"
                alt="Demo Preview"
                className="w-full h-auto object-cover"
              />
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-[#693d3d] p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b28b963e53c444f085ce79615ad630d0/ba35cafaa360ca517308d6ba19c4b99a6e95f868?placeholderIfAbsent=true"
                    alt="Play button"
                    className="w-12 h-12"
                  />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

              <div className="flex justify-center mt-[50px]">
          <CustomButton className="px-6 py-3 bg-[#693d3d] text-white rounded-md text-lg font-semibold hover:scale-105 transition-transform w-auto">
            Join the Early Access Program
          </CustomButton>
        </div>

    </section>
  );
};

export default EarlyAccess;
