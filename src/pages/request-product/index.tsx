import { getLayout as getPageLayout } from "@/components/layouts/CorePageLayout";
import RequestItem from "@/components/requestItem";
import RequestService from "@/components/requestService";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function RequestProduct() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="max-w-screen-2xl md:py-20 px-6 md:px-12 mx-auto">
      <main className=" bg-white shadow-mlg w-full space-y-10 mb-10">
        <div className="space-y-5 pt-4 max-w-5xl mx-auto pb-10 md:pb-20 md:pt-14">
          <h1 className="text-4xl text-[#253B4B] font-semibold">
            {value === 1 ? "Request a Service" : "Request Special Item"}
          </h1>
          {value === 0 && (
            <p className="sub-text mt-3">
              Cant find what you are looking for? Someone here might have what
              you need, submit a request below.
            </p>
          )}
          <div className="space-y-4">
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  label="Special Item"
                  className="capitalize"
                  {...a11yProps(0)}
                />
                <Tab
                  label="Services"
                  className="capitalize"
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <RequestItem />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <RequestService />
            </CustomTabPanel>
          </div>
        </div>
      </main>
    </div>
  );
}

RequestProduct.getLayout = getPageLayout;

export default RequestProduct;
