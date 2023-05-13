import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="bg-[#3F535E] text-white text-sm py-6 pt-16 flex flex-col gap-16">
          <div className="flex pl-[10%]  lg:pl-0 justify-center md:justify-around">
            <div className="flex flex-col justify-center gap-3 items-start w-96">
              <div className="uppercase md:text-2xl text-[#C5C5C5]">
                Address
              </div>
              <div className="text-[9px] md:text-xl w-10/12 md: leading-6">
                Sales office - Godrej Splendour, Feather Shuttlers, Balathur
                Main Rd, Whitefield- Hoskote Rd, Belathur , Bangalore- 560067
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start w-96">
              <div className="uppercase text-xs md:text-2xl text-[#C5C5C5] ">
                Call us
              </div>
              <div className="underline md:text-xl text-[9px] w-11/12 leading-5">
                Other Countries: +91-11-6657-5604
              </div>
            </div>
          </div>
          <div className="text-white text-center flex justify-around text-xs">
            <div>
              <img src="/godrej.png" alt="Godrej" className="w-24" />
            </div>
            <div className="text-[9px]">
              <p>Copyright © 2023. Godrej Properties</p>
            </div>
            <div className="text-[9px]">
              <p>Disclaimer</p>
            </div>
            <div className="text-[9px]">
              <p>Sitemap</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
