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


# ///////////////////////////////////////////////////////////////////////////////////////////////////////////////



import { useState, useContext } from "react";
import { formatter } from "@utils/helper";
import ProductOptions from "./product-options";
import { CartContext } from "@contexts/shopContext";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

export default function ProductForm({ product }: any) {
  const { addToCart }: any = useContext(CartContext);

  const allVariantOptions = product.variants.edges?.map((variant: any) => {
    const allOptions: any = {};

    variant.node.selectedOptions.map((item: any) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues: any = {};
  product.options.map((item: any) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name: any, value: any) {
    setSelectedOptions((prevState: any) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item: any) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  return (
    <div className="flex flex-col w-[36rem] ml-6">
      <div className="">
        <h2 className="text-3xl font-normal font-razor mt-2">{product.title}</h2>
        <div className="flex flex-row my-7">
          {" "}
          <a
            href={`//www.facebook.com/sharer.php?u=https://paintigo.shop/products/${product.handle}`}
          >
            <FaFacebook className="text-3xl text-blue-700 mr-2" />
          </a>
          <a
            href={`//twitter.com/share?text=${product.title}&url=https://paintigo.shop/products/${product.handle}`}
          >
            <FaTwitter className="text-3xl text-blue-400 mx-2" />
          </a>
          <a
            href={`//pinterest.com/pin/create/button/?url=https://paintigo.shop/products/${product.handle}&description=${product.title}`}
          >
            <FaPinterest className="text-3xl text-red-600 mx-2" />
          </a>
        </div>
        <span className=" my-7 text-xl font-semibold">
          {formatter.format(product.variants.edges[0].node.priceV2.amount)}
        </span>
        {product.options.map(({ name, values }: any) => (
          <ProductOptions
            key={`key-${name}`}
            name={name}
            values={values}
            selectedOptions={selectedOptions}
            setOptions={setOptions}
          />
        ))}
        <div className="flex flex-col my-14">
          <button
            onClick={() => {
              addToCart(selectedVariant);
            }}
            className="bg-black rounded-lg text-white px-2 py-3 mt-3 hover:bg-gray-800"
          >
            Add To Cart
          </button>
          <button className="bg-black rounded-lg text-white px-2 py-3 mt-[14px] hover:bg-gray-800 ">
            <a href="https://www.amazon.co.uk/PAINTIGO-Acrylic-Painting-Ceramic-Supplies/dp/B09S2JQMJZ?maas=maas_adg_D02BC4919C61519E3F13F81C3D243AAB_afap_abs&ref_=aa_maas&tag=maas">
              {" "}
              Buy from Amazon{" "}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
