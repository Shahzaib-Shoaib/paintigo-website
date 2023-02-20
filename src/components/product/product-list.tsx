import ProductCard from "./product-card";
import { useTranslation } from "next-i18next";

const ProductList = ({ products }: any) => {
  const { t } = useTranslation("common");

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
          {t("text-products")}
        </h2>
        {/* <div className="flex items-center"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-y-10 gap-x-6 xl:gap-x-8  ">
          {products.map((product: any) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProductList;
