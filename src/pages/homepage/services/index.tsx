import { CategoryIcon, FilterIcon } from "@/assets/svg";
import NextBreadcrumbs from "@/components/BreadCrumb";
import BreadCrumb from "@/components/BreadCrumb";
import ProductCard from "@/components/cards/ProductCards";
import ServiceCard from "@/components/cards/ServiceCard";
import CustomSelect from "@/components/input/CustomSelect";
import { getLayout as getPageLayout } from "@/components/layouts/CorePageLayout";
import MobileFilter from "@/components/mobileMenu/MobileFilter";
import Sidebar from "@/components/sidebar";
import { setVisible } from "@/reduxcontainer/filterMenuSlice/filterMenuSlice";
import productService from "@/reduxcontainer/services/produceService/productService";
import { Button, FormControl, MenuItem, Select } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";

function Services() {
  const [select, setSelect] = useState("none");
  const [breadCrumbList, setBreadCrumbList] = useState<any>(null);
  const router = useRouter();

  const dispatch = useDispatch();
  const { showFilter } = useSelector((state: any) => state.filterMenuReducer);

  const handleToggleFilter = () => {
    dispatch(setVisible(!showFilter));
  };

  const { data: serviceData } = useQuery(
    ["products"],
    productService.getServices,
    {
      keepPreviousData: true,
      onSuccess: async (res) => {
        console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  useEffect(() => {

    const paths = router.asPath.split("/");
    router &&
      setBreadCrumbList([
        {
          text: paths[paths.length - 1],
        },
      ]);
  }, [router]);
  return (
    <div className="max-w-[90rem] mx-auto flex pb-32">
      <Sidebar />

      <main className=" bg-white w-full md:flex-1 py-3 px-4 md:pr-[4.375rem] md:pl-7">
        <div className="mt-8 flex items-center md:px-5 pb-5">
          <div className="hidden md:block">
            {!!breadCrumbList && breadCrumbList.length > 0 && (
              <NextBreadcrumbs
                breadCrumbList={breadCrumbList && [...breadCrumbList]}
              />
            )}
          </div>
          <div className="flex w-fit items-center mr-0 md:ml-auto space-x-2 bg-[#F9F9F9] border-[#c4c4c44e] border-[0.5px] p-2 md:p-2.5 rounded-full">
            <Button className="px-6 md:px-8 py-2 text-sm font-normal bg-white rounded-full shadow-md">
              <p className="text-xs font-medium text-[#253B4B]">Listed Items</p>
            </Button>
            <Button className="px-6 md:px-8 py-2 text-sm font-normal text-[#253B4B]">
              <p className="text-xs text-[#878787] font-medium">
                View Requests
              </p>
            </Button>
          </div>

          <div
            className="border border-[#C4C4C4] rounded-full p-2 mr-0 ml-auto md:hidden"
            onClick={handleToggleFilter}
          >
            <FilterIcon />
          </div>
        </div>
        <div className="sort-section hidden md:flex space-x-6 items-center bg-[#F9F9F9] px-4 md:px-10 rounded-md py-3">
          <p className="font-medium md:text-base text-sm text-black">
            Sort by:
          </p>

          <FormControl className="md:w-32">
            <CustomSelect placeholder="Popular" />
          </FormControl>
        </div>

        <div className="content gap-y-4 gap-x-2 md:gap-x-12 lg:gap-y-14 place-items-start grid grid-cols-2 lg:grid-cols-fluid mt-6">
          {serviceData &&
            serviceData?.data?.map((service: any) => (
              <Link
                className="w-full"
                href={`/product-details/${service.id}`}
                key={service.id}
              >
                <ServiceCard service={service} />
              </Link>
            ))}
        </div>
        {/* mobile menu */}
        <MobileFilter />
      </main>
    </div>
  );
}

Services.getLayout = getPageLayout;

export default Services;
