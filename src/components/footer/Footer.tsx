import { Button } from "@mui/material";
import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="bg-[#253B4B] overflow-hidden w-full text-white">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16">
        <div className="my-24 md:flex md:space-x-14 lg:space-x-28 justify-between">
          <div className="contact-section flex-1 grid md:space-x-5 grid-cols-2 gap-8 md:flex justify-between">
            <div className="flex flex-col space-y-2">
              <h3 className="uppercase mb-2 font-medium tracking-wide">
                Company
              </h3>
              <p className="text-sm text-white">About</p>
              <p className="text-sm text-white">Privacy Policy</p>
              <p className="text-sm text-white">Terms and Condition</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="uppercase mb-2 font-medium tracking-wide">
                Support and help
              </h3>
              <p className="text-sm text-white">Safety Tips</p>
              <p className="text-sm text-white">Disclaimer</p>
              <p className="text-sm text-white">FAQs</p>
              <p className="text-sm text-white">Contact Us</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="uppercase mb-2 font-medium tracking-wide">
                Features
              </h3>
              <p className="text-sm text-white">Buy</p>
              <p className="text-sm text-white">Sell</p>
              <p className="text-sm text-white">Request</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="uppercase mb-2 font-medium tracking-wide">
                Socials
              </h3>
              <p className="text-sm text-white">Linkedln</p>
              <p className="text-sm text-white">Facebook</p>
              <p className="text-sm text-white">Instagram</p>
            </div>
          </div>
          <div className="flex flex-col md:w-[40%] space-y-5 mt-6 md:m-0">
            <p className="text-white">Join our Newsletter</p>
            <div className="newsletter-input w-full max-w-[35.6rem] h-14 md:h-[4.8125rem] flex items-center bg-white p-2 md:p-4 rounded-lg overflow-hidden space-x-2 md:space-x-3 text-black">
              <input
                type="text"
                placeholder="Email address"
                className="flex flex-grow leading-7 text-lg font-normal w-full bg-white outline-none"
              />

              <Button
                className="h-10 md:h-12 text-sm md:text-base px-4 md:px-5 py-2 md:py-3 rounded-lg font-semibold capitalize bg-[#70A300] hover:bg-[#70A300] hover:opacity-75"
                color="primary"
                disableElevation
                variant="contained"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className="copyright p-6 text-white flex text-center justify-center items-center my-5 border-t-2 text-lg border-white">
          Katangwa @2023 All right reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
