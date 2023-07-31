import ProductCard from "@/components/cards/ProductCards";
import { getLayout as getPageLayout } from "@/components/layouts/CorePageLayout";
import RequestSidebar from "@/components/sidebar/RequestSidebar";
import productService from "@/reduxcontainer/services/produceService/productService";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";

function SellerPage() {
  const [select, setSelect] = useState("none");
  const router = useRouter();

  const { data: sellerProducts, isLoading: sellerListingLoading } = useQuery(
    ["products", router],
    () =>
      router.query.id && productService.getOtherProductsByUser(router.query.id),
    {
      keepPreviousData: true,

      enabled: !!router.query,
    }
  );

  const handleChange = (event: any) => {
    setSelect(event.target.value);
  };
  return (
    <div className="max-w-[90rem] mx-auto py-20 px-4 md:px-[3.75rem]">
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
        <div className="w-full md:w-[30%] space-y-4 tracking-wide text-[#253B4B] text-sm">
          <h3 className="font-normal uppercase">Seller Profile</h3>
          <RequestSidebar displayAbout={true} disableLink={true} />
        </div>
        <main className=" bg-white w-full md:flex-1 space-y-10">
          <h1 className="text-2xl text-[#253B4B] font-medium">Listings</h1>

          {sellerListingLoading ? (
            <div className="mx-auto w-fit mt-8">
              <CircularProgress />
            </div>
          ) : (
            <div className="content gap-3 lg:gap-y-8 place-items-center grid grid-cols-2 lg:grid-cols-fluid mt-6">
              {sellerProducts &&
                sellerProducts?.data?.map(
                  (product: any, index: number | string) => (
                    <Link
                      href={`/product-details/${product.id}`}
                      className="w-fit"
                      key={index}
                    >
                      <ProductCard key={product.id} product={product} />
                    </Link>
                  )
                )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

SellerPage.getLayout = getPageLayout;

export default SellerPage;
