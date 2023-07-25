"use client";
import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import { FC, ReactElement } from "react";

export interface InputProps {
  placeholder?: string;
  icon?: ReactElement;
  type?: string;
}

const RequestItem: FC = () => {
  return (
    <div className="space-y-5">
      <FormControl className="w-full p-0 space-y-2">
        <FormLabel>
          <p className="form-label">Item Name</p>
        </FormLabel>
        <TextField
          placeholder="Tell us what you are looking for"
          className="w-full rounded-xl"
        />
      </FormControl>

      <FormControl className="w-full p-0 space-y-2">
        <FormLabel>
          <p className="form-label">Category</p>
        </FormLabel>
        <TextField
          placeholder="Select Category"
          className="w-full rounded-xl"
        />
      </FormControl>

      <FormControl className="w-full p-0 space-y-2">
        <FormLabel>
          <p className="form-label">Condition</p>
        </FormLabel>
        <TextField
          placeholder="Select Condition"
          className="w-full rounded-xl"
        />
      </FormControl>
      <FormControl className="w-full p-0 space-y-2">
        <FormLabel>
          <p className="form-label">Location</p>
        </FormLabel>
        <TextField
          placeholder="Select Location"
          className="w-full rounded-xl"
        />
      </FormControl>

      <FormControl className="w-full p-0 space-y-2">
        <FormLabel>
          <p className="form-label">Item Description</p>
        </FormLabel>
        <TextField
          placeholder="Add a short description of the product"
          multiline
          rows={2}
          className="p-0"
          maxRows={4}
        />
      </FormControl>
      <div className="py-8">
        <Button className="w-full h-14" variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default RequestItem;
