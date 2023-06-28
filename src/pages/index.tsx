import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@mui/material";
import { BuyIcon, SendIcon } from "@/assets/svg";
import CustomSearch from "@/components/input/CustomSearch";
import { getLayout as getPageLayout } from "@/components/layouts/CorePageLayout";
import Login from "./login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Login />
    </>
  );
}
