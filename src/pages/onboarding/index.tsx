import { BuyIcon, SendIcon } from "@/assets/svg";
import CustomSearch from "@/components/input/CustomSearch";
import { getLayout as getAuthLayout } from "@/components/layouts/AuthLayout";
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

function Onboarding() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/dashboard");
  };
  return (
    <div className="shadow-lg mx-auto rounded-lg my-16 w-[48rem] px-8 py-12 space-y-7">
      <div className="image-container w-fit mx-auto">
        <Image
          src="/images/Katangwa.png"
          alt="app-logo"
          width={237}
          height={52}
        />
      </div>
      <div className="search w-auto max-w-xl mx-auto flex-grow h-[55px]">
        <CustomSearch placeholder="What item are you looking for?" />
      </div>
      <div className="font-medium text-lg flex flex-col items-center space-y-7">
        <p className="text-[#253B4B]">What do you want to do today?</p>
        <div className="flex space-x-10">
          <div className="bg-[#b36516] rounded-lg overflow-hidden relative">
            <Image
              src="/images/buy_image.png"
              alt="app-logo"
              width={288}
              height={271}
            />
            <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2">
              <Button
                color="primary"
                onClick={handleLogin}
                variant="contained"
                className="space-x-2 w-fit py-2.5 px-8 rounded-lg capitalize"
              >
                <SendIcon />
                <p>Sell</p>
              </Button>
            </div>
          </div>

          <div className="bg-[#b36516] rounded-lg overflow-hidden relative">
            <Image
              src="/images/sell_image.png"
              alt="app-logo"
              width={288}
              height={271}
            />
            <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2">
              <Button
                color="primary"
                variant="contained"
                className="space-x-2 w-fit py-2.5 px-8 rounded-lg capitalize"
              >
                <BuyIcon />
                <p>Sell</p>
              </Button>
            </div>
          </div>
        </div>
        <Button
          className="w-auto h-14 p-4 capitalize"
          color="secondary"
          disableElevation
          variant="outlined"
        >
          Request an Item/Service
        </Button>
      </div>
    </div>
  );
}

Onboarding.getLayout = getAuthLayout;
export default Onboarding;
