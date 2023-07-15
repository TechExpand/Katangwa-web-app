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
        <FormLabel>Item Name</FormLabel>
        <TextField
          placeholder="Tell us what you are looking for"
          className="w-full"
        />
      </FormControl>

      <FormControl className="w-full p-0 space-y-2">
        <FormLabel>Category</FormLabel>
        <TextField placeholder="Select Category" className="w-full" />
      </FormControl>

      <FormControl className="w-full p-0 space-y-2">
        <FormLabel>Condition</FormLabel>
        <TextField placeholder="Select Condition" className="w-full" />
      </FormControl>
      <FormControl className="w-full p-0 space-y-2">
        <FormLabel>Location</FormLabel>
        <TextField placeholder="Select Location" className="w-full" />
      </FormControl>

      <FormControl className="w-full p-0 space-y-2">
        <FormLabel>Item Description</FormLabel>
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
