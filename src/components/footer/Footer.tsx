import { Button } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import PageNavbar from "../navbar/PageNavbar";

const Footer: FC = () => {
  return (
    <div className="bg-[#253B4B] overflow-hidden w-full text-white">
      <div className="max-w-screen-2xl mx-auto px-16">
        <div className="contact-section flex justify-between my-24">
          <div className="flex flex-col space-y-2">
            <h3 className="uppercase mb-2 font-medium">Company</h3>
            <p className="text-sm">About</p>
            <p className="text-sm">Privacy Policy</p>
            <p className="text-sm">Terms and Condition</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="uppercase mb-2 font-medium">Support and help</h3>
            <p className="text-sm">Safety Tips</p>
            <p className="text-sm">Disclainer</p>
            <p className="text-sm">FAQs</p>
            <p className="text-sm">Contact Us</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="uppercase mb-2 font-medium">Location</h3>
            <p className="text-sm">Lekki</p>
            <p className="text-sm">Marina</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="uppercase mb-2 font-medium">Socials</h3>
            <p className="text-sm">Linkedln</p>
            <p className="text-sm">Facebook</p>
            <p className="text-sm">Instagram</p>
          </div>
          <div className="flex flex-col space-y-4">
            <p>Join our Newsletter</p>
            <div className="newsletter-input w-[35.6rem] flex bg-white p-3 rounded-lg overflow-hidden space-x-3 text-black">
              <input
                type="text"
                placeholder="Email address"
                className="flex flex-grow leading-7 text-lg font-normal w-full outline-none"
              />
              <div className="w-24 h-[44px]">
                <Button
                  className="w-full h-14 p-4 bg-gradient-to-r rounded-lg font-bold capitalize from-[#126969] to-[#4BBB8B] flex items-center justify-center"
                  color="primary"
                  disableElevation
                  variant="contained"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright p-6 text-white flex justify-center items-center my-5 border-t-2 text-lg border-white">
          Katangwa @2023 All right reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
