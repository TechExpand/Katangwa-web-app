"use client";
import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import { FC, ReactElement } from "react";

export interface InputProps {
  placeholder?: string;
  icon?: ReactElement;
  type?: string;
}

const RequestService: FC = () => {
  return (
    <div className="space-y-7">
      <FormControl className="w-full p-0 space-y-2">
        <p className="form-label">Type of Service</p>
        <TextField
          placeholder="Tell us what you are looking for"
          className="w-full"
        />
      </FormControl>

      <FormControl className="w-full p-0 space-y-2">
        <p className="form-label">Rate</p>
        <TextField placeholder="Input hourly rate" className="w-full" />
      </FormControl>

      <FormControl className="w-full p-0 space-y-2">
        <p className="form-label">Location</p>
        <TextField placeholder="Select Category" className="w-full" />
      </FormControl>

      <FormControl className="w-full p-0 space-y-2">
        <p className="form-label">Frequency</p>
        <div className="rounded-full w-fit border flex p-2">
          <p className="bg-[#70A300] text-white font-medium cursor-pointer rounded-full px-2.5 py-2 text-sm">
            One-Off
          </p>
          <p className="rounded-full text-[#5F5F5F] font-medium cursor-pointer px-3 py-2 text-sm">
            Recurring
          </p>
        </div>
      </FormControl>
      <div className="py-4">
        <Button className="w-full h-14" variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default RequestService;
