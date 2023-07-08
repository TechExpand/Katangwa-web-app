import { BuyIcon, SendIcon } from "@/assets/svg";
import CustomSearch from "@/components/input/CustomSearch";
import { getLayout as getPageLayout } from "@/components/layouts/CorePageLayout";
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

function Onboarding() {
  const router = useRouter();

  return (
    <div
      className="w-full py-16"
      style={{
        backgroundImage: `url(/images/BG.png)`,
        width: "100vw",
        height: "100%",
      }}
    >
      <div className="shadow-mlg mx-auto rounded-lg w-full bg-white md:w-[48rem] px-4 md:px-8 py-12 space-y-7">
        <div className="image-container relative w-[167px] md:w-fit ml-16 mr-auto md:mx-auto">
          <Image
            src="/images/logoKat.png"
            alt="app-logo"
            width={237}
            height={52}
          />
          <div className="italic font-bold text-xs absolute bottom-0 -right-28">
            Exchange with connections
          </div>
        </div>
        <div className="search w-auto max-w-xl mx-auto flex-grow h-[48px] md:h-[55px]">
          <CustomSearch placeholder="What item are you looking for?" />
        </div>
        <div className="font-medium text-lg flex flex-col items-center space-y-7">
          <p className="text-[#253B4B]">What do you want to do today?</p>
          <div className="space-y-5 md:flex md:space-x-10">
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
                  onClick={() => router.push("/login")}
                  variant="contained"
                  className="space-x-2 w-fit py-2.5 px-8 rounded-lg capitalize"
                >
                  <SendIcon />
                  <p className="text-white">Sell</p>
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
                  onClick={() => router.push("/homepage")}
                  className="space-x-2 w-fit py-2.5 px-8 rounded-lg capitalize"
                >
                  <BuyIcon />
                  <p className="text-white">Buy</p>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <Button
              className="w-60 h-[3.3rem] p-4 capitalize"
              color="primary"
              disableElevation
              variant="contained"
            >
              View Requests
            </Button>
            <Button
              className="w-60 h-[3.3rem] p-4 capitalize"
              color="primary"
              disableElevation
              variant="outlined"
            >
              Request an Item/Service
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Onboarding.getLayout = getPageLayout;
export default Onboarding;
