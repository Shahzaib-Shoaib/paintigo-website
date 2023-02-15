import Image from "next/legacy/image";
import ProductForm from "./product-form";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, FreeMode, Thumbs } from "swiper";
import RecommendedList from "./recommended-list";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { IoExpand, IoExpandOutline } from "react-icons/io5";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

export default function ProductPageContent({ product }: any) {
  const images: any = [];
  const [isOpen, setIsOpen] = useState(false);

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
  const slidesGallery = product.images.edges?.map((image) => {
    return {
      src: image.node.originalSrc,
    };
  });

  return (
    <div>
      <div className="flex flex-col items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl md:w-11/12 mx-auto sm:w-full">
        <div className="w-full max-w-xl border bg-white rounded-xl overflow-hidden shadow-lg md:w-1/2">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mb-2 "
          >
            <div className={`absolute top-1 pe-5 z-10`}>
              <button type="button" onClick={() => setIsOpen(true)}>
                <IoExpandOutline className="text-3xl text-black font-bold" />
              </button>

              {isOpen && (
                <Lightbox
                  open={isOpen}
                  close={() => setIsOpen(false)}
                  slides={slidesGallery}
                  plugins={[
                    Captions,
                    Fullscreen,
                    Slideshow,
                    Thumbnails,
                    Video,
                    Zoom,
                  ]}
                />
              )}
            </div>
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
        <h2 className=" text-2xl text-[#262626] font-semibold">
          Product Description:
        </h2>
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
