import Button from "../ui/Button";

const Features = () => {
  return (
    <section className="self-center flex w-full max-w-[1200px] flex-col items-stretch mt-[110px] px-4">
      <div className="flex gap-10 text-[rgba(32,33,36,1)] flex-wrap">
        <div className="min-w-60 min-h-[72px] text-4xl font-medium text-center grow shrink w-[361px]">
          <div className="bg-[rgba(254,185,185,1)] min-h-[72px] w-[451px] max-w-full px-[7px] rounded-[5px]">
            Features and Benefits
          </div>
        </div>
        <div className="text-2xl font-normal grow shrink w-[588px]">
          Everything you need for faster, more accurate, mineral{" "}
          <strong>title work:</strong>
        </div>
      </div>
      <div className="bg-[rgba(254,185,185,0.4)] flex flex-col text-[22px] text-[rgba(32,33,36,1)] font-light mt-[50px] px-[50px] py-[60px] rounded-[5px]">
        {[
          "Auto-generated interactive Runsheet – Sortable and Searchable.",
          "One-click flowchart objects creation – No more manual drawing and filling in.",
          "Automated Mineral Conveyance Calculations – Reduce errors and improve efficiency.",
          "Pre-populated mineral reports and drilling opinions – Save time with formatted templates.",
          "Linked supporting documents on every page – easy access and reference.",
          "Secure, cloud-based access - Work from anywhere.",
        ].map((feature, index) => (
          <div key={index} className="leading-[3] mt-9 first:mt-0">
            {feature}
          </div>
        ))}
        <Button className="self-center w-[298px] mt-24 max-md:mt-10">
          Join the Early Access Program
        </Button>
      </div>
    </section>
  );
};

export default Features;
