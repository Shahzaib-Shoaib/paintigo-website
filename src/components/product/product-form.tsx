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
    <div className="flex flex-col md:ml-6 sm:w-full md:w-[36rem] ">
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
