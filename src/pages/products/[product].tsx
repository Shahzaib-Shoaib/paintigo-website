import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { getAllProducts, getProduct } from "@lib/shopify";
import ProductPageContent from "@components/product/product-page-content";

export default function ProductPage({ product }: any) {
	console.log(product);
	
  return (
    <>
      <div className="min-h-screen py-12 sm:pt-20">
        <ProductPageContent product={product} />
      </div>
    </>
  );
}

ProductPage.Layout = Layout;

export async function idk() {
  const products = await getAllProducts();
  const paths = products.map((item: any) => {
    const product = String(item.node.handle);

    return {
      params: { product },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}: any) => {
  const product = await getProduct(params.product, locale);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
        "aboutus",
      ])),
      product,
    },
  };
};
