import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import { FC, ReactElement } from "react";

export interface InputProps {
  placeholder?: string;
  icon?: ReactElement;
  type?: string;
}

const RequestService: FC = () => {
  return (
    <div className="space-y-5">
      <FormControl className="w-full p-0 space-y-2">
        <FormLabel>Type of Service</FormLabel>
        <TextField
          placeholder="Tell us what you are looking for"
          className="w-full"
        />
      </FormControl>

      <FormControl className="w-full p-0 space-y-2">
        <FormLabel>Rate</FormLabel>
        <TextField placeholder="Input hourly rate" className="w-full" />
      </FormControl>

      <FormControl className="w-full p-0 space-y-2">
        <FormLabel>Location</FormLabel>
        <TextField placeholder="Select Category" className="w-full" />
      </FormControl>

      <FormControl className="w-full p-0 space-y-2">
        <FormLabel>Frequency</FormLabel>
        <div className="rounded-full w-fit border flex p-2">
          <div className="bg-[#70A300] cursor-pointer rounded-full px-3 py-2 text-xs">
            One Off
          </div>
          <div className="rounded-full cursor-pointer px-3 py-2 text-xs">
            Recurring
          </div>
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
