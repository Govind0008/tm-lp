import Button from "../ui/Button";

const EarlyAccess = () => {
  return (
    <section className="self-center flex w-full max-w-[1200px] flex-col items-stretch mt-[58px] px-4">
      <div className="flex min-h-[72px] w-[451px] max-w-full flex-col text-4xl text-[rgba(32,33,36,1)] font-medium text-center">
        <div className="bg-[rgba(254,185,185,1)] min-h-[72px] w-full px-[7px] rounded-[5px]">
          Early Access Program Incentives
        </div>
      </div>
      <div className="mt-[102px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full">
            <div className="text-[rgba(32,33,36,1)] text-4xl font-light leading-[60px]">
              · 3-month free trial – No credit card or commitment
              <br />
              · 75% discount vs full price
              <br />· Opportunity to shape the features of future development
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(255,255,255,0.002)] shadow-[0px_10px_25px_-3px_rgba(0,0,0,0.05)] overflow-hidden text-sm text-[#202124] font-medium text-center mt-2 rounded-xl">
              <div className="bg-[rgba(229,229,229,0.3)] overflow-hidden rounded-[10px]">
                <div className="flex flex-col relative min-h-[312px] w-full items-center justify-center px-20 py-[109px] rounded-[5px] max-md:px-5 max-md:py-[100px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b28b963e53c444f085ce79615ad630d0/a4a602b9af0c60218c9acf20d7d9ea5b33f961e0?placeholderIfAbsent=true"
                    alt="Background"
                    className="absolute h-full w-full object-cover inset-0"
                  />
                  <div className="relative flex mb-[-22px] w-[84px] flex-col items-stretch max-md:mb-2.5">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/b28b963e53c444f085ce79615ad630d0/ba35cafaa360ca517308d6ba19c4b99a6e95f868?placeholderIfAbsent=true"
                      alt="Play button"
                      className="aspect-[1] object-contain w-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] self-center rounded-full"
                    />
                    <div className="mt-[21px]">Watch Demo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button className="self-center w-[298px] mt-[50px] max-md:mt-10">
        Join the Early Access Program
      </Button>
    </section>
  );
};

export default EarlyAccess;
