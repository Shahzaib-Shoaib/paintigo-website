 <div>
      <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        <div className="w-full max-w-md border bg-white rounded-2xl overflow-hidden shadow-lg md:w-1/2">
          {/* <div className="relative h-96 w-full">
            <Swiper
              navigation
              // pagination={{ clickable: true }}
              className="h-96 rounded-2xl text-[#262626]"
              loop={true}
            >
              {images}
            </Swiper>
          </div> */}
          <div className="col-span-5 xl:col-span-5 overflow-hidden mb-6 md:mb-8 lg:mb-0">
            {!!product?.images?.edges?.length ? (
              <ThumbnailCarousel
                gallery={product?.images?.edges}
                thumbnailClassName="xl:w-[700px] 2xl:w-[850px]"
                galleryClassName="xl:w-[100px] 2xl:w-[120px]"
              />
            ) : (
              // <div className="w-auto flex items-center justify-center">
              //   <Image
              //     src={data?.image?.original ?? "/product-placeholder.svg"}
              //     alt={data?.name!}
              //     width={900}
              //     height={680}
              //   />
              // </div>
              <></>
            )}
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


    ////////////////////////////////////////////////////////////////////////




import {
  Swiper,
  SwiperSlide,
  SwiperOptions,
  Navigation,
  Thumbs,
} from "./slider";
import Image from "next/image";
import { useRef, useState } from "react";
import cn from "classnames";
import { getDirection } from "@utils/get-direction";
import { useRouter } from "next/router";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { productGalleryPlaceholder } from '@assets/placeholders';

interface Props {
  gallery: any[];
  thumbnailClassName?: string;
  galleryClassName?: string;
}

// product gallery breakpoints
const galleryCarouselBreakpoints = {
  1280: {
    slidesPerView: 4,
    direction: "vertical",
  },
  0: {
    slidesPerView: 3,
  },
};

const swiperParams: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 0,
};

const ThumbnailCarousel: React.FC<Props> = ({
  gallery,
  thumbnailClassName = "xl:w-[480px] 2xl:w-[650px]",
  galleryClassName = "xl:w-[100px] 2xl:w-[120px]",
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const { locale } = useRouter();
  const dir = getDirection(locale);
  return (
    <div className="w-full xl:flex xl:flex-row-reverse">
      <div
        className={cn(
          "w-full flex items-center xl:ms-5 overflow-hidden rounded-md relative",
          thumbnailClassName
        )}
      >
        <Swiper
          id="productGallery"
          // thumbs={{ swiper: thumbsSwiper }}
          thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}

          modules={[Navigation, Thumbs]}
          navigation={{
            prevEl: prevRef.current!, // Assert non-null
            nextEl: nextRef.current!, // Assert non-null
          }}
          {...swiperParams}
        >
          {gallery?.map((item: any) => (
            <SwiperSlide
              key={`product-gallery-${item?.node?.altText}`}
              className="flex items-center justify-center"
            >
              <Image
                src={item?.node?.originalSrc ?? productGalleryPlaceholder}
                alt={`Product gallery ${item?.node?.altText}`}
                width={650}
                height={590}
                className="rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-between w-full absolute top-2/4 z-10 px-2.5">
          <div
            ref={prevRef}
            className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl flex items-center cursor-pointer justify-center rounded-full bg-skin-fill transition duration-300 hover:bg-skin-primary hover:text-skin-inverted focus:outline-none transform -translate-y-1/2 shadow-navigation"
          >
            {dir === "rtl" ? <IoIosArrowForward /> : <IoIosArrowBack />}
          </div>
          <div
            ref={nextRef}
            className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl flex items-center justify-center cursor-pointer rounded-full bg-skin-fill  transition duration-300 hover:bg-skin-primary hover:text-skin-inverted focus:outline-none transform -translate-y-1/2 shadow-navigation"
          >
            {dir === "rtl" ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </div>
        </div>
      </div>
      {/* End of product main slider */}

      <div className={`flex-shrink-0 ${galleryClassName}`}>
        <Swiper
          id="productGalleryThumbs"
          onSwiper={setThumbsSwiper}
          spaceBetween={15}
          watchSlidesProgress={true}
          freeMode={true}
          effect={"slide"}
          breakpoints={{
            1280: {
              slidesPerView: 4,
              direction: "vertical",
            },
            767: {
              slidesPerView: 4,
              direction: "horizontal",
            },
            0: {
              slidesPerView: 3,
              direction: "horizontal",
            },
          }}
        >
          {gallery?.map((item: any) => (
            <SwiperSlide
              key={`product-thumb-gallery-${item?.node?.altText}`}
              className="flex items-center justify-center cursor-pointer rounded overflow-hidden border border-skin-base transition hover:opacity-75"
            >
              <Image
                src={item?.node?.originalSrc ?? productGalleryPlaceholder}
                alt={`Product thumb gallery ${item?.node?.altText}`}
                width={170}
                height={170}
              />
             </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ThumbnailCarousel;
