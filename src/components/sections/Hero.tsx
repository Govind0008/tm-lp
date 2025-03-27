
import CustomButton from "../ui/custom-button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="self-center w-full max-w-[1200px] mt-14 px-4">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-6/12 max-md:w-full"
        >
          <div className="flex w-full flex-col font-normal">
            <h1 className="text-[rgba(32,33,36,1)] text-5xl font-[275] leading-[60px] tracking-[-1.5px] max-md:text-[40px] max-md:leading-[56px]">
              <span className="font-light">
                The First Comprehensive Mineral Title Review Platform for{" "}
              </span>
              <span className="font-medium text-[rgba(92,46,46,1)]">
                Title Attorneys
              </span>
            </h1>
            <p className="text-[#202124] text-lg leading-[29px] self-stretch mt-[47px]">
              Stop manually drawing flowcharts. Stop manually calculating
              mineral ownership. Stop manually populating reports and opinions.
            </p>
            <div className="flex items-stretch gap-[40px_41px] text-base font-medium mt-[37px]">
              <CustomButton className="hover:scale-105 transition-transform duration-300">Join the Early Access Program</CustomButton>
              <button className="flex items-center gap-[7px] text-[rgba(92,46,46,1)] my-auto group transition-all duration-300 hover:gap-[12px]">
                <span>Learn more</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b28b963e53c444f085ce79615ad630d0/3781ffe689b74f1a5c16367cdd1330ed301b2dc6?placeholderIfAbsent=true"
                  alt="Arrow"
                  className="aspect-[1.3] object-contain w-[13px] transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
            <p className="text-[#202124] text-sm leading-none mt-[50px]">
              <strong>200+</strong> title attorneys already joined
            </p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-6/12 ml-5 max-md:w-full max-md:ml-0"
        >
          <div className="bg-[rgba(255,255,255,0.002)] shadow-[0px_10px_25px_-3px_rgba(0,0,0,0.05)] overflow-hidden text-sm text-[#202124] font-medium text-center mt-2 rounded-xl transition-transform duration-500 hover:shadow-[0px_14px_30px_-3px_rgba(0,0,0,0.1)]">
            <div className="bg-[rgba(229,229,229,0.3)] overflow-hidden rounded-[10px]">
              <div className="bg-[rgba(92,46,46,0.15)] flex flex-col items-center justify-center px-20 py-[199px] rounded-[5px] max-md:px-5 max-md:py-[100px]">
                <div className="flex w-[84px] flex-col items-stretch -mb-10 max-md:mb-2.5 group cursor-pointer">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b28b963e53c444f085ce79615ad630d0/1c9213df9a07ae83a528c6409b116c91e4a148b6?placeholderIfAbsent=true"
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
    </section>
  );
};

export default Hero;
