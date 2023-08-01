import { BuyIcon, SendIcon } from "@/assets/svg";
import CustomSearch from "@/components/input/CustomSearch";
import { getLayout as getPageLayout } from "@/components/layouts/CorePageLayout";
import { Button } from "@mui/material";
import { Storage } from "../../auth/api";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function Onboarding() {
  const router = useRouter();

  const { isAuthenticated } = useSelector((state: any) => state.authReducer);

  return (
    <div
      className="w-full py-16 px-4"
      style={{
        backgroundImage: `url(/images/BG.png)`,
        width: "100vw",
        height: "100%",
      }}
    >
      <div className="shadow-mlg mx-auto rounded-s-3xl w-full bg-white md:w-[48.1875rem] px-4 md:px-16 py-7 space-y-3">
        <div className="image-container relative w-[167px] md:w-fit ml-[10%] mr-auto md:mx-auto">
          <Image
            src="/images/logoKat.png"
            alt="app-logo"
            width={237}
            height={52}
          />
          <div className="italic font-semibold text-xs text-black md:-right-28 absolute -bottom-1.5 md:-bottom-0 -right-32">
            Exchange with connections
          </div>
        </div>
        <div className="search w-auto max-w-[35.4375rem] mx-auto flex-grow h-[48px] md:h-[55px]">
          <CustomSearch placeholder="What item are you looking for?" />
        </div>
        <div className="font-medium text-lg flex py-10 flex-col items-center space-y-7">
          <p className="text-[#253B4B] text-lg font-medium">
            What do you want to do today?
          </p>
          <div className="space-y-5 md:space-y-0 w-[70%] md:w-full md:flex md:space-x-10">
            <div className="bg-[#b36516] rounded-xl overflow-hidden relative">
              <Image
                src="/images/buy_image.png"
                alt="app-logo"
                width={288}
                height={238}
              />
              <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2">
                <Button
                  color="primary"
                  onClick={() =>
                    isAuthenticated
                      ? router.push("/homepage/products")
                      : router.push("/login")
                  }
                  variant="contained"
                  className="space-x-2 w-fit py-2.5 px-8 rounded-lg capitalize"
                >
                  <SendIcon />
                  <p className="text-white">Sell</p>
                </Button>
              </div>
            </div>

            <div className="bg-[#b36516] rounded-xl overflow-hidden relative">
              <Image
                src="/images/sell_image.png"
                alt="app-logo"
                width={288}
                height={238}
              />
              <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => router.push("/homepage/products")}
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
              className="w-[248px] h-12 px-5 py-2.5 capitalize"
              color="primary"
              disableElevation
              variant="contained"
            >
              View Requests
            </Button>

            <Button
              className="w-[248px] h-12 px-5 py-2.5 capitalize"
              color="primary"
              disableElevation
              variant="outlined"
              onClick={() => router.push("/request-product")}
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
