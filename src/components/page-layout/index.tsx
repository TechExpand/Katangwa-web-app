import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { Box, NoSsr } from "@mui/material";

type Props = {
  overlayHeader?: boolean;
  children: ReactNode;
};

export default function Layout({ children, overlayHeader }: Props) {
  const { pathname } = useRouter();
  return (
    <Box component={"div"}>
      <NoSsr>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* <Header overlay={overlayHeader} /> */}
          <Box
            sx={{
              flex: 1,
              marginTop: pathname !== "/" ? "100px" : "0px",
            }}
            component={"main"}
          >
            {children}
          </Box>
          {/* <Footer /> */}
        </Box>
      </NoSsr>
    </Box>
  );
}
