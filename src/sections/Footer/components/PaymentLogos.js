import React from 'react';

export const PaymentLogos = () => {
  return (
    <div className="relative box-border caret-transparent max-w-[1600px] mx-auto px-[15px]">
      <ul className="bg-[linear-gradient(to_right,rgb(139,96,255),rgb(81,96,210))] bg-size-[200%] box-border caret-transparent gap-x-[13px] flex flex-wrap justify-center list-none gap-y-[13px] mt-[65px] p-[26px] rounded-[5px]">
        <li className="text-white box-border caret-transparent flex items-center">
          <a
            href="https://cash.app/$MOOSECHEATS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2 text-white font-bold text-lg hover:opacity-80 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-7 w-7">
              <path d="M17.15 14.15c-.2 1.18-1.1 2.1-2.28 2.3l-.37.06V18h-1.5v-1.5H11.5V18H10v-1.5H8v-1.5h1V9H8V7.5h2V6h1.5v1.5H13V6h1.5v1.56l.37.06c1.18.2 2.08 1.12 2.28 2.30.13.77-.02 1.53-.42 2.12.40.59.55 1.35.42 2.11zM12 8.5h-1.5v2.5H12c.69 0 1.25-.56 1.25-1.25S12.69 8.5 12 8.5zm.5 4H10.5V15H12.5c.69 0 1.25-.56 1.25-1.25S13.19 12.5 12.5 12.5z"/>
            </svg>
            <span className="text-white text-base font-bold tracking-wide">Cash App — $MOOSECHEATS</span>
          </a>
        </li>
        <li className="text-white box-border caret-transparent flex items-center">
          <a
            href="https://account.skrill.com/wallet/account/send-money?recipient=GOOSECHEATS@GMAIL.COM"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2 text-white font-bold text-lg hover:opacity-80 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-7 w-7">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
            <span className="text-white text-base font-bold tracking-wide">Skrill</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
