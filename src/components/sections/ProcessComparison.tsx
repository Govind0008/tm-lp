const ProcessComparison = () => {
  return (
    <section className="w-full max-w-[1320px] mt-[60px] mx-auto px-4">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[36%] max-md:w-full">
          <div className="flex flex-col items-stretch mt-[26px]">
            <h2 className="text-[rgba(92,46,46,1)] text-2xl font-semibold leading-none">
              Today's Manual Processes
            </h2>
            <div className="flex w-full flex-col mt-[35px] pl-[13px]">
              <div className="flex items-stretch gap-5">
                <div className="bg-neutral-200 text-xs text-[rgba(32,33,36,1)] font-medium whitespace-nowrap leading-none w-8 h-8 px-2.5 rounded-[10px] border-white border-solid border-2">
                  01
                </div>
                <div className="text-[#202124] text-lg font-normal leading-7 basis-auto grow shrink">
                  Manually drawing flowchart shapes and
                  <br />
                  copying over information
                </div>
              </div>
              <div className="self-stretch flex items-stretch gap-5 mt-7">
                <div className="bg-neutral-200 text-xs text-[rgba(32,33,36,1)] font-medium whitespace-nowrap leading-none w-8 h-8 px-2 rounded-[10px] border-white border-solid border-2">
                  02
                </div>
                <div className="text-[#202124] text-lg font-normal leading-7 grow shrink w-[382px] basis-auto">
                  Manually tracking and calculating complex
                  <br />
                  conveyances
                </div>
              </div>
              <div className="flex items-stretch gap-5 mt-7">
                <div className="bg-neutral-200 text-xs text-[rgba(32,33,36,1)] font-medium whitespace-nowrap leading-none w-8 h-8 px-2 rounded-[10px] border-white border-solid border-2">
                  03
                </div>
                <div className="text-[#202124] text-lg font-normal leading-7 basis-auto grow shrink">
                  Manually moving document details from
                  <br />
                  runsheets, to flowcharts, to conveyance
                  <br />
                  calculations, to reports
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[64%] ml-5 max-md:w-full max-md:ml-0">
          <div className="bg-[rgba(255,227,227,1)] flex w-full flex-col mx-auto pl-8 pr-20 py-[29px] rounded-[5px_0px_0px_5px] max-md:px-5">
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
                <div
                  key={index}
                  className="flex items-stretch gap-5 flex-wrap mt-[22px] first:mt-0"
                >
                  <div className="bg-white text-xs text-[rgba(32,33,36,1)] font-medium whitespace-nowrap leading-none w-8 h-8 px-2 rounded-[10px] border-[rgba(254,185,185,1)] border-solid border-2">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-[#202124] text-lg font-normal leading-7 basis-auto grow shrink">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessComparison;
