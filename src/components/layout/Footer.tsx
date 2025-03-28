import { useForm } from "react-hook-form";
import CustomButton from "../ui/custom-button";
import { motion } from "framer-motion";

const Footer = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Contact form submitted:", data);
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.1 * i }
    })
  };

  return (
    <footer className="bg-[rgba(254,185,185,0.4)] w-full overflow-hidden mt-[60px] pt-[50px] pb-[30px] px-20 max-md:px-5">
      <div className="flex flex-col items-stretch max-w-[1200px] mx-auto">
        <div className="gap-8 flex max-md:flex-col max-md:items-stretch">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInVariant}
            className="w-[43%] max-md:w-full"
          >
            <div className="flex w-full flex-col">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b28b963e53c444f085ce79615ad630d0/cd2db76c908ef2573dbddffe3135b74d29001f8b?placeholderIfAbsent=true"
                alt="TitleMine Logo"
                className="aspect-[2.8] object-contain w-[140px] transition-transform duration-300 hover:scale-105"
              />
              <p className="text-lg text-[rgba(32,33,36,1)] font-normal mt-[50px] text-left">
                The First Comprehensive Mineral Title Review  <br />Platform for Title
                Attorneys
              </p>
              <CustomButton className="mt-[47px] px-[27px] py-3 hover:scale-105 transition-transform duration-300">
                Join the Early Access Program
              </CustomButton>
            </div>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeInVariant}
            className="w-[29%] ml-5 max-md:w-full max-md:ml-0"
          >
            <div className="flex w-full flex-col text-left text-base text-[rgba(32,33,36,1)] font-bold">
              <h3 className="text-2xl">Explore</h3>
              <nav className="mt-[13px] flex flex-col gap-4">
                <a
                  href="/what-we-do"
                  className="flex items-center gap-2.5 py-2.5 transition-colors duration-300 hover:text-[rgba(92,46,46,1)]"
                >
                  <span className="text-[rgba(92,46,46,1)]">&gt;</span> What We Do
                </a>
                <a
                  href="/early-access"
                  className="flex items-center gap-2.5 py-2.5 transition-colors duration-300 hover:text-[rgba(92,46,46,1)]"
                >
                  <span className="text-[rgba(92,46,46,1)]">&gt;</span> Join The Early Access Program
                </a>
                <a 
                  href="/contact" 
                  className="flex items-center gap-2.5 py-2.5 transition-colors duration-300 hover:text-[rgba(92,46,46,1)]"
                >
                  <span className="text-[rgba(92,46,46,1)]">&gt;</span> Contact Us
                </a>
              </nav>
            </div>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeInVariant}
            className="w-[28%] ml-5 max-md:w-full max-md:ml-0"
          >
            <div className="flex w-full text-left flex-col self-stretch font-normal">
              <h3 className="text-[rgba(92,46,46,1)] text-lg font-bold">
                Any Questions?
              </h3>
              <p className="text-[rgba(32,33,36,1)] text-sm mt-[19px]">
                You can contact us directly via
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white border self-stretch flex items-stretch gap-5 justify-between mt-5 px-[26px] py-[11px] rounded-[5px] border-[rgba(32,33,36,1)] border-solid transition-all duration-300 focus-within:shadow-md"
              >
                <input
                  type="email"
                  placeholder="Enter Mail Here"
                  className="text-[#202124] text-sm bg-transparent outline-none flex-1"
                  {...register("email", { required: true })}
                />
                <button
                  type="submit"
                  className="text-[rgba(92,46,46,1)] text-4xl text-center transition-transform duration-300 hover:translate-x-1"
                >
                  →
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b28b963e53c444f085ce79615ad630d0/2d9cbd62613918d19d4e96eb06e178741b77ef76?placeholderIfAbsent=true"
          alt="Divider"
          className="aspect-[100] object-contain w-full mt-[60px]"
        />
        <p className="text-[#202124] text-sm text-left font-normal mt-7">
          © [2025] TitleMine. All rights reserved. Unauthorized use or
          reproduction of content is strictly prohibited.
        </p>
      </div>
    </footer>
  );
};

export default Footer;