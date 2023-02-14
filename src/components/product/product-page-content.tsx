import Image from "next/legacy/image";
import ProductForm from "./product-form";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, FreeMode, Thumbs } from "swiper";
import RecommendedList from "./recommended-list";
import { useState } from "react";

export default function ProductPageContent({ product }: any) {
  const images: any = [];

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  product.images.edges.map((image: any, i: any) => {
    images.push(
      <SwiperSlide key={`slide-${i}`}>
       <Image
          src={image.node.originalSrc}
          alt={image.node.altText}
          // layout="fill"
          // objectFit="contain"
          width={600}
          height={600}
        />
      </SwiperSlide>
    );
  });

  SwiperCore.use([Navigation, Pagination]);

  return (
    <div>
      <div className="flex flex-col items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        <div className="w-full max-w-xl border bg-white rounded-2xl overflow-hidden shadow-lg md:w-1/2">
          <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}

              modules={[FreeMode, Navigation, Thumbs]}
              className="mb-2 rounded"
            >
              {images}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className=" "
            >
              {" "}
              {images}
            </Swiper>
        </div>
        <ProductForm product={product} />
      </div>

      <div className="pt-16 space-y-8 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        <h2 className=" text-2xl text-[#262626] font-semibold">Product Description:</h2>
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
