import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { Box, Breadcrumbs, NoSsr, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { BreadCrumbImg } from "@/assets/svg";

type Props = {
  overlayHeader?: boolean;
  children: ReactNode;
};

export default function BreadCrumb() {
  const { pathname } = useRouter();
  return (
    <Breadcrumbs
      className="text-[#737373]"
      aria-label="breadcrumb"
      separator={<NavigateNextIcon color="inherit" />}
    >
      <BreadCrumbImg />
      <Typography>Home</Typography>
    </Breadcrumbs>
  );
}
