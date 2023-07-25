import { Calendar, CategoryIcon, LocationBig } from "@/assets/svg";
import ProductCard from "@/components/cards/ProductCards";
import { getLayout as getPageLayout } from "@/components/layouts/CorePageLayout";
import Sidebar from "@/components/sidebar";
import RequestSidebar from "@/components/sidebar/RequestSidebar";
import {
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Products() {
  const [select, setSelect] = useState("none");

  const handleChange = (event: any) => {
    setSelect(event.target.value);
  };
  return (
    <div className="max-w-screen-2xl mx-auto py-20 px-4 md:px-10">
      <div className="flex-col flex md:flex-row space-y-10 md:space-y-0 md:space-x-10">
        <main className=" bg-white w-full md:flex-1 space-y-10">
          <div className="product-detail w-full">
            <img
              src="/images/big-image.jpg"
              alt="product-image"
              className="w-full"
              width={"100%"}
            />
          </div>

          <div className="space-y-5">
            <h1 className="text-2xl md:text-4xl font-normal">
              Nike Revolution
            </h1>

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
                Lorem ipsum dolor sit amet consectetur. Orci varius etiam
                tristique adipiscing tincidunt. Vulputate ante elit curabitur mi
                massa congue dignissim nullam magna. Dui nulla ultricies sit
                porta. Semper venenatis ullamcorper bibendum aliquam. Sed
                faucibus enim quis magnis facilisis. Pretium id tincidunt ut sit
                est. Ornare elit pellentesque viverra vestibulum nascetur nibh.
                Ut habitasse semper aliquam sed sodales ornare dolor massa
                turpis. Mattis suspendisse curabitur ut neque enim porttitor
                mauris ac turpis. Morbi sed viverra dignissim congue. Neque nisi
                nec dui non euismod aenean dignissim. Id nulla odio lacus cras
                purus vel aliquet ridiculus sodales. Mollis integer bibendum
                eget viverra lobortis porttitor elementum. Ut a augue quis
                commodo velit molestie libero dictumst urna. Pellentesque
                lobortis sed scelerisque facilisis quam volutpat. Risus vel
                convallis in eget non nibh quam leo quam. In facilisis dolor
                donec nunc ut aliquet ultricies. Condimentum etiam nunc
                condimentum ornare enim mauris odio elit bibendum. Facilisi est
                et mi ullamcorper. Augue gravida commodo at eget sagittis id
                amet pharetra. Lacinia nibh in lectus velit. Ultricies ligula ut
                sodales erat faucibus sit placerat sodales. Facilisi lorem mi
                suspendisse dignissim aliquam eget velit in et. Vitae non
                bibendum sed massa pharetra orci nulla tortor. Eu sit ac viverra
                luctus molestie aliquam sagittis felis commodo. Neque lacus amet
                duis senectus euismod viverra cras id. Dignissim at porttitor
                fames eget luctus cursus ut et vitae. Curabitur et vel egestas
                faucibus lectus semper non eget. Purus at amet arcu facilisis ac
                fermentum enim scelerisque. Ac urna sollicitudin natoque orci
                urna id rhoncus sed hac. Diam lacus nunc velit ut. Ut at dictum
                nisi vel in. Ullamcorper sed ac enim dui. Enim tincidunt ut a
                vulputate lorem interdum neque. Velit augue diam non curabitur
                facilisis amet nisi tempor. Erat id leo mi orci purus viverra
                viverra. Eget velit ac quam pellentesque eget. Pulvinar odio
                quisque nullam diam tortor. Euismod fermentum quisque egestas
                risus pellentesque pulvinar neque. Proin commodo sed malesuada
                pharetra odio donec nunc mauris. Turpis massa dolor facilisi
                faucibus pretium. Euismod hac metus sapien magnis commodo.
              </p>
            </div>
          </div>
          <Button className="w-full h-14" variant="contained" color="primary">
            Chat Seller
          </Button>
        </main>
        <div className="w-full md:w-[32%] md:space-y-4 tracking-wide text-[#253B4B] text-sm">
          <RequestSidebar />
        </div>
      </div>

      <section className="mt-16 space-y-8 py-10">
        <h1 className="text-4xl text-[#253B4B] font-normal">
          Other Listings by Seller
        </h1>
        <div className="content gap-3 lg:gap-y-8 grid grid-cols-2 lg:grid-cols-fluid mt-6">
          {Array.from([1, 1, 1, 1]).map((item, index) => (
            <Link
              href={`/product-details/${index}`}
              className="w-fit"
              key={index}
            >
              <ProductCard key={index} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

Products.getLayout = getPageLayout;

export default Products;
