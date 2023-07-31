import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Breadcrumbs, NoSsr, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { BreadCrumbImg } from "@/assets/svg";
import { encode } from "querystring";
import { string } from "yup";
import Link from "next/link";

type Props = {
  overlayHeader?: boolean;
  children: ReactNode;
};

interface defaultTextProps {
  breadCrumbList: string[];
}

export default function NextBreadcrumbs({ breadCrumbList }: any) {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      className="text-[#737373]"
      separator={<NavigateNextIcon color="inherit" />}
    >
      <Crumb href="/onboarding">
        <BreadCrumbImg />
      </Crumb>
      {breadCrumbList?.map((breadcrumb: any, idx: number) => (
        <Crumb
          {...breadcrumb}
          key={idx}
          last={idx === breadCrumbList.length - 1}
        />
      ))}
    </Breadcrumbs>
  );
}

interface crumbProps {
  text?: string;
  textGenerator?: any;
  href: string;
  last?: boolean;
  children?: any;
}

function Crumb({ href, last = false, text, children }: crumbProps) {
  if (last) {
    return (
      <Typography color="text.primary" className="capitalize">
        {text}
      </Typography>
    );
  }

  return (
    <Link
      color="inherit"
      href={href && href}
      className="capitalize hover:underline"
    >
      {text ? <p className="capitalize">{text}</p> : children}
    </Link>
  );
}
