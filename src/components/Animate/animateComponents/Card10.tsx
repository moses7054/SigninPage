import React from "react";
import Cross from "@/icons/Cross.svg";

const Card10 = () => {
  return (
    <div>
      {/* text box */}
      <div className="bg-white px-[10px] py-[17px] rounded-lg w-[256px] font-figtree font-normal text-xs leading-[14px] text-[#193647] flex flex-col">
        <div>
          <p className="ml-1">
            4. List three differences between{" "}
            <span className="ml-3">prokaryotic and eukaryotic cells:</span>
          </p>
          <div className="ml-5 mb-2">
            <p>a.</p>
            <p>b.</p>
            <p>c.</p>
          </div>
        </div>
        {/* blue text */}
        <div className="flex w-full mb-2 relative">
          <div className="flex flex-col bg-[#6A38EF26] w-[221px] h-[39px] justify-center pl-1 border-dashed border-[1px] border-[#6A38EF]">
            <p>
              5. What is the main difference between
              <br />
              <span className="ml-3">DNA and RNA?</span>
            </p>
          </div>
          <Cross className="rotate-[7deg]" />
          <div className="absolute w-[46px] h-[18px] rounded-[10.75px] bg-[#F3EFFE] border-[1px] border-[#6A38EF] right-4 -bottom-[24px]">
            <p className="font-figtree font-medium text-xs text-center">
              Solve
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex">
            <p>6.</p>
            <p className="ml-1">
              Describe two adaptations of mamal living in the Arctic
            </p>
          </div>
          <div className="ml-5 mb-2">
            <p>a.</p>
            <p>b.</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex">
            <p>7.</p>
            <p className="ml-1">Circle the correct term in each pair:</p>
          </div>
          <div className="ml-5 ">
            <div className="flex gap-1">
              <p>a.</p>
              <p>
                (Genotype / Phenotype) refers to an organism&apos;s observable
                traits.
              </p>
            </div>
            <div className="flex gap-1">
              <p>b.</p>
              <p>(Mitosis / Meiosis) results in the production of gametes.</p>
            </div>
            <div className="flex gap-1">
              <p>c.</p>{" "}
              <p>
                (Photosynthesis / Cellular respiration) uses oxygen to break
                down glucose.
              </p>
            </div>
            <div className="flex gap-1">
              <p>d.</p>{" "}
              <p>
                (Homozygous / Heterozygous) means having two different alleles
                for a trait.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card10;
