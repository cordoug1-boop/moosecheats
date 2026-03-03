import React from 'react';

export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent gap-x-[26px] grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-between gap-y-[26px] md:gap-x-[normal] md:flex md:grid-cols-none md:gap-y-[normal]">
      <ul className="relative box-border caret-transparent list-none w-auto pl-0 md:w-full"></ul>
      <ul className="relative box-border caret-transparent list-none w-auto pl-0 md:w-full">
        <h3 className="text-white text-[17px] font-semibold box-border caret-transparent leading-[25.5px] mb-2.5">
          Important Information
        </h3>
        <li className="box-border caret-transparent py-2.5">
          <a
            href="https://moosecheats.com/how-it-works/"
            className="text-white text-[15px] items-center box-border caret-transparent gap-x-[7.5px] flex leading-[15px] gap-y-[7.5px] before:accent-auto before:bg-[linear-gradient(to_right_top,rgb(139,96,255),rgb(81,96,210))] before:caret-transparent before:text-white before:block before:text-[15px] before:not-italic before:normal-nums before:font-normal before:h-1.5 before:tracking-[normal] before:leading-[15px] before:list-outside before:list-none before:pointer-events-auto before:relative before:text-start before:indent-[0px] before:normal-case before:visible before:w-1.5 before:rounded-[375px] before:border-separate before:font-inter before:md:rounded-[1280px] hover:text-violet-500 hover:border-violet-500"
          >
            How It Works
          </a>
        </li>
        <li className="box-border caret-transparent py-2.5">
          <a
            href="https://moosecheats.com/faq/"
            className="text-white text-[15px] items-center box-border caret-transparent gap-x-[7.5px] flex leading-[15px] gap-y-[7.5px] before:accent-auto before:bg-[linear-gradient(to_right_top,rgb(139,96,255),rgb(81,96,210))] before:caret-transparent before:text-white before:block before:text-[15px] before:not-italic before:normal-nums before:font-normal before:h-1.5 before:tracking-[normal] before:leading-[15px] before:list-outside before:list-none before:pointer-events-auto before:relative before:text-start before:indent-[0px] before:normal-case before:visible before:w-1.5 before:rounded-[375px] before:border-separate before:font-inter before:md:rounded-[1280px] hover:text-violet-500 hover:border-violet-500"
          >
            FAQ
          </a>
        </li>
        <li className="box-border caret-transparent py-2.5">
          <a
            href="https://moosecheats.com/about-us/"
            className="text-white text-[15px] items-center box-border caret-transparent gap-x-[7.5px] flex leading-[15px] gap-y-[7.5px] before:accent-auto before:bg-[linear-gradient(to_right_top,rgb(139,96,255),rgb(81,96,210))] before:caret-transparent before:text-white before:block before:text-[15px] before:not-italic before:normal-nums before:font-normal before:h-1.5 before:tracking-[normal] before:leading-[15px] before:list-outside before:list-none before:pointer-events-auto before:relative before:text-start before:indent-[0px] before:normal-case before:visible before:w-1.5 before:rounded-[375px] before:border-separate before:font-inter before:md:rounded-[1280px] hover:text-violet-500 hover:border-violet-500"
          >
            About Us
          </a>
        </li>
        <li className="box-border caret-transparent py-2.5">
          <a
            href="mailto:Moosecheats@gmail.com"
            className="text-white text-[15px] items-center box-border caret-transparent gap-x-[7.5px] flex leading-[15px] gap-y-[7.5px] before:accent-auto before:bg-[linear-gradient(to_right_top,rgb(139,96,255),rgb(81,96,210))] before:caret-transparent before:text-white before:block before:text-[15px] before:not-italic before:normal-nums before:font-normal before:h-1.5 before:tracking-[normal] before:leading-[15px] before:list-outside before:list-none before:pointer-events-auto before:relative before:text-start before:indent-[0px] before:normal-case before:visible before:w-1.5 before:rounded-[375px] before:border-separate before:font-inter before:md:rounded-[1280px] hover:text-violet-500 hover:border-violet-500"
          >
            Customer Support
          </a>
        </li>
        <li className="box-border caret-transparent py-2.5">
          <a
            href="https://moosecheats.com/terms"
            className="text-white text-[15px] items-center box-border caret-transparent gap-x-[7.5px] flex leading-[15px] gap-y-[7.5px] before:accent-auto before:bg-[linear-gradient(to_right_top,rgb(139,96,255),rgb(81,96,210))] before:caret-transparent before:text-white before:block before:text-[15px] before:not-italic before:normal-nums before:font-normal before:h-1.5 before:tracking-[normal] before:leading-[15px] before:list-outside before:list-none before:pointer-events-auto before:relative before:text-start before:indent-[0px] before:normal-case before:visible before:w-1.5 before:rounded-[375px] before:border-separate before:font-inter before:md:rounded-[1280px] hover:text-violet-500 hover:border-violet-500"
          >
            Terms of Service
          </a>
        </li>
        <li className="box-border caret-transparent py-2.5">
          <a
            href="https://moosecheats.com/privacy"
            className="text-white text-[15px] items-center box-border caret-transparent gap-x-[7.5px] flex leading-[15px] gap-y-[7.5px] before:accent-auto before:bg-[linear-gradient(to_right_top,rgb(139,96,255),rgb(81,96,210))] before:caret-transparent before:text-white before:block before:text-[15px] before:not-italic before:normal-nums before:font-normal before:h-1.5 before:tracking-[normal] before:leading-[15px] before:list-outside before:list-none before:pointer-events-auto before:relative before:text-start before:indent-[0px] before:normal-case before:visible before:w-1.5 before:rounded-[375px] before:border-separate before:font-inter before:md:rounded-[1280px] hover:text-violet-500 hover:border-violet-500"
          >
            Privacy Policy
          </a>
        </li>
      </ul>
    </div>
  );
};
