import { getLayout as getPageLayout } from "@/components/layouts/AuthLayout";
import Onboarding from "./onboarding";

export default function Home() {
  return (
    <>
      <Onboarding />
    </>
  );
}

Home.getLayout = getPageLayout;
