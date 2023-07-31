import { Calendar, CategoryIcon, LocationBig } from "@/assets/svg";
import NextBreadcrumbs from "@/components/BreadCrumb";
import ProductCard from "@/components/cards/ProductCards";
import { getLayout as getPageLayout } from "@/components/layouts/CorePageLayout";
import RequestSidebar from "@/components/sidebar/RequestSidebar";
import { getCategories } from "@/reduxcontainer/productSlice/productSlice";
import productService from "@/reduxcontainer/services/produceService/productService";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Query, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const [select, setSelect] = useState("none");
  const [userId, setUserId] = useState(null);
  const [breadCrumbList, setBreadCrumbList] = useState<any>(null);

  const router = useRouter();
  const dispatch = useDispatch<any>();
  const { data: category } = useSelector((state: any) => state.categoryReducer);

  const generateCategory = (chosen: number | string) => {
    const selectedCategory = category.filter((item: any) => item.id === chosen);
    return selectedCategory[0]?.name;
  };
  const { data: productData } = useQuery(
    ["products", router],
    () => router.query?.id && productService.getProductById(router.query.id),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setUserId(data?.data?.userId);
      },
      onError: (err) => {
        console.log(err);
      },
      enabled: !!router.query,
    }
  );

  useEffect(() => {
    if (!category.length) {
      dispatch(getCategories());
    }
  }, []);

  useEffect(() => {
    console.log(productData, category);
    if (productData && category.length > 0) {
      setBreadCrumbList([
        {
          href: `/hompage/${generateCategory(productData?.data?.categoryId)}`,
          text: `${generateCategory(productData?.data?.categoryId)}`,
        },
        {
          href: `/homepage/${productData?.data?.name}`,
          text: `${productData?.data?.name}`,
        },
      ]);
    }
  }, [productData, category]);

  const { data: otherProducts } = useQuery(
    ["products", userId],
    () => router.query?.id && productService.getOtherProductsByUser(userId),
    {
      keepPreviousData: true,

      enabled: !!userId,
    }
  );

  const handleChange = (event: any) => {
    setSelect(event.target.value);
  };
  return (
    <div className="max-w-[90rem] mx-auto py-20 px-4 md:px-[3.75rem]">
      <div className="flex-col flex md:flex-row space-y-16 md:space-y-0 md:space-x-10">
        <main className=" bg-white w-full md:flex-1 space-y-10">
          <div className="hidden md:block">
            <NextBreadcrumbs
              breadCrumbList={breadCrumbList && breadCrumbList}
            />
          </div>
          <div className="product-detail w-full">
            <img
              src={
                (productData && productData.data?.image?.displayImage) ||
                "/images/big-image.jpg"
              }
              alt="product-image"
              className="w-full"
              width={"100%"}
            />
          </div>

          <div className="flex space-x-4">
            {productData &&
              productData?.data.image.images.map(
                (singleImg: string, index: number) => (
                  <div className="w-[8rem] h-[4.6875rem] cursor-pointer">
                    <img
                      src={singleImg}
                      alt=""
                      key={index}
                      width="112.5px"
                      height="75px"
                    />
                  </div>
                )
              )}
          </div>

          <div className="space-y-5">
            <div className="flex justify-between">
              <h1 className="text-2xl md:text-s3xl font-medium capitalize">
                {productData && productData?.data?.name}
              </h1>
              <h1 className="text-2xl md:text-s3xl font-medium capitalize">
                &#8358;{productData && productData?.data?.price}
              </h1>
            </div>

            <div className="flex space-x-6">
              <div className="inline-flex items-center space-x-1">
                <LocationBig />
                <p className="text-[#737373] text-sm">Lekki, Lagos</p>
              </div>
              <div className="inline-flex items-center space-x-1">
                <Calendar />

                <p className="text-[#737373] text-sm">Posted: June 10, 2023</p>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl">Description</h2>
              <p className="text-[#253B4B] text-sm leading-5 tracking-wide">
                {productData?.data?.description}
              </p>
            </div>
          </div>
          <Button className="w-full h-14" variant="contained" color="primary">
            Chat Seller
          </Button>
        </main>
        <div className="w-full md:w-[32%] md:space-y-4 tracking-wide text-[#253B4B] text-sm">
          <RequestSidebar
            userData={productData?.data?.user}
            userId={productData?.data?.userId}
          />
        </div>
      </div>

      <section className="mt-8 md:mt-16 space-x-4 md:space-y-8 py-10">
        <h1 className="text-2xl md:text-3xl text-[#253B4B] font-normal">
          Other Listings by Seller
        </h1>
        <div className="content flex space-x-4 md:space-x-[3.0625rem] py-2 overflow-x-auto mt-6">
          {otherProducts?.data
            ?.filter((product: any) => product.id !== productData?.data?.id)
            .map((product: any, index: number | string) => (
              <Link
                href={`/product-details/${product.id}`}
                className="w-fit"
                key={index}
              >
                <ProductCard key={product.id} product={product} />
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}

Products.getLayout = getPageLayout;

export default Products;
