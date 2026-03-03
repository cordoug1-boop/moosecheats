import React from 'react';

export const TrustpilotBanner = () => {
  return (
    <a
      href="https://www.trustpilot.com/review/moosecheats.com"
      aria-label="Read our Trustpilot reviews"
      className="text-white text-[13px] font-medium items-center backdrop-blur-[6px] bg-violet-500/30 shadow-[rgba(0,0,0,0.25)_0px_4px_12px_0px] box-border caret-transparent gap-x-2 flex justify-center leading-[19.5px] gap-y-2 w-full border border-violet-500/40 mt-6 mb-3 px-3 py-2.5 rounded-xl border-solid md:text-[15px] md:gap-x-3 md:leading-[22.5px] md:gap-y-3 md:px-[18px] md:py-3 hover:text-violet-500 hover:bg-violet-500/40"
    >
      <span className="text-[13px] box-border caret-transparent block leading-[19.5px] md:text-[15px] md:leading-[22.5px]">
        <span className="text-emerald-500 text-[13px] font-bold box-border caret-transparent tracking-[2px] leading-[19.5px] text-nowrap md:text-[15px] md:leading-[22.5px] md:text-wrap">
          ★★★★★
        </span>
        <span className="text-[13px] box-border caret-transparent leading-[19.5px] text-nowrap md:text-[15px] md:leading-[22.5px] md:text-wrap">
          Rated{" "}
          <strong className="text-[13px] font-bold box-border caret-transparent leading-[19.5px] text-nowrap md:text-[15px] md:leading-[22.5px] md:text-wrap">
            Excellent
          </strong>
          on Trustpilot
        </span>
      </span>
      <span className="text-[13px] font-semibold box-border caret-transparent block leading-[19.5px] opacity-90 text-nowrap md:text-[15px] md:leading-[22.5px] md:text-wrap hover:underline">
        Read reviews →
      </span>
    </a>
  );
};
