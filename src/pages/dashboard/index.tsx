import { CategoryIcon } from "@/assets/svg";
import { getLayout as getPageLayout } from "@/components/layouts/CorePageLayout";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  TextField,
} from "@mui/material";

function Dashboard() {
  return (
    <div className="max-w-screen-2xl mx-auto flex">
      <div className="sidebar w-[20.625rem] min-h-screen bg-[#F9F9F9] py-16 px-8 space-y-8">
        <div className="flex justify-between">
          <h4>Category</h4>
          <CategoryIcon />
        </div>

        <div className="space-y-4 text-sm">
          <FormControl className="w-full">
            <FormLabel className="text-sm">LABEL</FormLabel>

            <Select
              type="text"
              placeholder="Select Category"
              variant="outlined"
              className="w-full h-12"
            ></Select>
          </FormControl>
          <Select
            type="text"
            placeholder="Select Sub Category"
            variant="outlined"
            className="w-full h-12"
          ></Select>
        </div>
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="text-sm font-normal">Condition</p>
            <Select
              type="text"
              placeholder="Select Sub Category"
              variant="outlined"
              className="w-full h-12"
            ></Select>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-normal">Location</p>
            <Select
              type="text"
              placeholder="Select Sub Category"
              variant="outlined"
              className="w-full h-12"
            ></Select>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-normal">Price Range</p>
          <div className="space-y-1">
            <Select
              type="text"
              placeholder="Select Sub Category"
              variant="outlined"
              className="w-full h-12"
            ></Select>
          </div>
          <div className="space-y-1">
            <Select
              type="text"
              placeholder="Select Sub Category"
              variant="outlined"
              className="w-full h-12"
            ></Select>
          </div>
        </div>
        <div className="flex space-x-3 justify-between">
          <Button
            color="primary"
            variant="outlined"
            className="w-32 h-12 capitalize"
          >
            Reset
          </Button>
          <Button
            color="primary"
            variant="contained"
            className="w-32 h-12 capitalize"
          >
            Filter
          </Button>
        </div>
      </div>

      <main className=" bg-white w-full py-3 px-6">
        <div className="sort-section flex space-x-6 items-center bg-[#F9F9F9] px-10 rounded-md py-3">
          <h3 className="font-medium">Sort by:</h3>
          <Select
            type="text"
            placeholder="Select Sub Category"
            variant="outlined"
            className="w-36 h-12"
          ></Select>
        </div>
      </main>
    </div>
  );
}

Dashboard.getLayout = getPageLayout;

export default Dashboard;
