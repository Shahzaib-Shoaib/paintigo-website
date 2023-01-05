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
import { NextSeo, OrganizationJsonLd } from "next-seo";

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
      <NextSeo
        title="Paintigo"
        description="Paintigo is a brand of acrylic paint pens that are used for art and craft projects. The pens are filled with water-based, non-toxic acrylic paint and are available in a range of colors. They can be used to create fine lines and detailed designs on various surfaces, including paper, wood, glass, and ceramic. Paintigo pens are popular among artists and crafters because they are easy to use and allow for precise control of the paint. They are also water-soluble, so the paint can be easily washed off of most surfaces with water. "
        openGraph={{
          type: "website",
          locale: "en_IE",
          site_name: "Paintigo",
        }}
        twitter={{
          handle: "@paintigo",
          site: "https://twitter.com/paintigo",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1 maximum-scale=1",
          },
          {
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            name: "theme-color",
            content: "#ffffff",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "apple-touch-icon",
            href: "icons/apple-icon-180.png",
          },
          {
            rel: "manifest",
            href: "/manifest.json",
          },
        ]}
      />
      <OrganizationJsonLd
        type="Corporation"
        logo="/assets/images/logo.png"
        legalName="Paintigo"
        name="Paintigo"
        address={{
          streetAddress: "",
          addressLocality: "",
          addressRegion: "GFD",
          postalCode: "95129",
          addressCountry: "UK",
        }}
        contactPoint={[
          {
            telephone: "",
            contactType: "customer service",
            email: "info@paintigo.com",
            areaServed: ["GB", "US"],
            availableLanguage: ["en", "fr", "es", "de", "it"],
          },
        ]}
        sameAs={[
          "https://www.facebook.com/PaintigoGlobal",
          "https://twitter.com/paintigo",
          "https://www.instagram.com/paintigoshop/?hl=en",
          "https://www.youtube.com/@paintigo9457",
          "https://www.pinterest.com/paintigoshop/",
        ]}
        url="https://paintigo.shop/"
      />
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
      <Subscription />
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
        "aboutus",
      ])),
      products,
    },
  };
};
