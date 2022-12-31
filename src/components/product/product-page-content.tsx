import Image from "next/legacy/image";
import Link from "next/link";
import ProductForm from "./product-form";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import RecommendedList from "./recommended-list";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

export default function ProductPageContent({ product }: any) {
  const images: any = [];

  product.images.edges.map((image: any, i: any) => {
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <Image
          src={image.node.originalSrc}
          alt={image.node.altText}
          layout="fill"
          objectFit="contain"
        />
      </SwiperSlide>
    );
  });

  SwiperCore.use([Navigation, Pagination]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        <div className="w-full max-w-md border bg-white rounded-2xl overflow-hidden shadow-lg md:w-1/2">
          <div className="relative h-96 w-full">
            <Swiper
              navigation
              // pagination={{ clickable: true }}
              className="h-96 rounded-2xl text-[#262626]"
              loop={true}
            >
              {images}
            </Swiper>
          </div>
        </div>
        <ProductForm product={product} />
      </div>

      <div className="pt-16 space-y-8 md:space-x-4 lg:space-x-8 max-w-3xl w-11/12 mx-auto">
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
        />

      </div>

      <RecommendedList
        current={product.id}
        products={product.collections.edges[0].node.products.edges}
      />
    </div>
  );
}
