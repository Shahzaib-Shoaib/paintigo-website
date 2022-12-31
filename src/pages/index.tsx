import dynamic from "next/dynamic";
import Head from "next/head";
import { getProductsInCollection, getAllBlogs, getBlog } from "@lib/shopify";
import ProductList from "@components/product/product-list";
import { HomePage } from "@framework/static/banner";
import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import CollectionBlock from "@containers/collection-block";
import { collectionData as collection } from "@framework/static/collection";
import Container from "@components/ui/container";
import Divider from "@components/ui/divider";
import { useUI } from "@contexts/ui.context";
import { useEffect } from "react";
import Subscription from "@components/common/subscription";

const HeroSlider = dynamic(() => import("@containers/hero-slider"), {
  ssr: false,
});

const FeatureCarousel = dynamic(
  () => import("@components/common/featured-carousel"),
  { ssr: false }
);

export default function Home({ products }: any) {
  const sectionCommonStyle = "mb-7 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-[75px]";

  const { openModal, setModalView } = useUI();
  useEffect(() => {
    setModalView("NEWSLETTER_VIEW");
    console.log("done");

    setTimeout(() => {
      openModal();
    }, 1000);
  }, []);
  return (
    <>
      <HeroSlider
        data={HomePage}
        variantRounded="default"
        variant="fullWidth"
        // className={sectionCommonStyle}
        buttonGroupClassName="hidden"
      />
      <FeatureCarousel />

      <ProductList products={products} />
      <Divider />
      <Container>
        <CollectionBlock data={collection} />
      </Container>
      <Subscription/>
    </>
  );
}
Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const products = await getProductsInCollection(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
      ])),
      products,
    },
  };
};
