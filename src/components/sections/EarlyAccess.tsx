
import CustomButton from "../ui/custom-button";
import { motion } from "framer-motion";

const EarlyAccess = () => {
  return (
    <section className="self-center flex w-full max-w-[1200px] flex-col items-stretch mt-[58px] px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex min-h-[72px] w-[451px] max-w-full flex-col text-4xl text-[rgba(32,33,36,1)] font-medium text-center"
      >
        <div className="bg-[rgba(254,185,185,1)] min-h-[72px] w-full px-[7px] py-3 rounded-[5px] shadow-sm flex items-center justify-center">
          Early Access Program Incentives
        </div>
      </motion.div>
      <div className="mt-[102px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-6/12 max-md:w-full"
          >
            <div className="text-[rgba(32,33,36,1)] text-4xl font-light leading-[60px]">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                · 3-month free trial – No credit card or commitment
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                · 75% discount vs full price
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                · Opportunity to shape the features of future development
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-6/12 ml-5 max-md:w-full max-md:ml-0"
          >
            <div className="bg-[rgba(255,255,255,0.002)] shadow-[0px_10px_25px_-3px_rgba(0,0,0,0.05)] overflow-hidden text-sm text-[#202124] font-medium text-center mt-2 rounded-xl transition-all duration-500 hover:shadow-[0px_14px_30px_-3px_rgba(0,0,0,0.1)]">
              <div className="bg-[rgba(229,229,229,0.3)] overflow-hidden rounded-[10px]">
                <div className="flex flex-col relative min-h-[312px] w-full items-center justify-center px-20 py-[109px] rounded-[5px] max-md:px-5 max-md:py-[100px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b28b963e53c444f085ce79615ad630d0/a4a602b9af0c60218c9acf20d7d9ea5b33f961e0?placeholderIfAbsent=true"
                    alt="Background"
                    className="absolute h-full w-full object-cover inset-0"
                  />
                  <div className="relative flex mb-[-22px] w-[84px] flex-col items-stretch max-md:mb-2.5 group cursor-pointer">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/b28b963e53c444f085ce79615ad630d0/ba35cafaa360ca517308d6ba19c4b99a6e95f868?placeholderIfAbsent=true"
                      alt="Play button"
                      className="aspect-[1] object-contain w-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] self-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0px_14px_20px_-3px_rgba(0,0,0,0.15)]"
                    />
                    <div className="mt-[21px] transition-all duration-300 group-hover:text-[rgba(92,46,46,1)]">Watch Demo</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <CustomButton className="self-center w-[298px] mt-[50px] max-md:mt-10 hover:scale-105 transition-transform duration-300">
        Join the Early Access Program
      </CustomButton>
    </section>
  );
};

export default EarlyAccess;
