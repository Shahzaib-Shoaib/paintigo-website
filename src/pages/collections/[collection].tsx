import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import {
  getCollections,
  getAllCollections,
  getProduct,
  getProductsOfSpecificCollection,
} from "@lib/shopify";
import ProductList from "@components/product/product-list";

export default function CollectionPage({ collection }: any) {

  return (
    <>
      <div className="min-h-screen py-12 sm:pt-20">
        <ProductList products={collection} />
      </div>
    </>
  );
}

CollectionPage.Layout = Layout;

export async function idk() {
  const collections = await getCollections();
  const paths = collections.map((item: any) => {
    const collection = String(item.node.handle);

    return {
      params: { collection },
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
  const collection = await getProductsOfSpecificCollection(
    params.collection,
    locale
  );

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
        "aboutus",
      ])),
      collection,
    },
  };
};
