import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ROUTES } from "@utils/routes";
import { GetStaticProps } from "next";
import ProductList from "@components/product/product-list";
import { getProductsInCollection } from "@lib/shopify";
import SocialMedia from "@components/common/socialmedia";
import { NextSeo, OrganizationJsonLd } from "next-seo";
import Head from "next/head";
export default function Products({ products }: any) {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
        ]}
        title="Products"
        description="Paintigo Products are dedicated to giving you the very best of experience, with a focus on quality, pigment, color vibrancy, and long-lasting painting results."
        openGraph={{
          url: "",
          title: "Products",
          description:
            "Paintigo Products are dedicated to giving you the very best of experience, with a focus on quality, pigment, color vibrancy, and long-lasting painting results.",
          images: [
            {
              url: "",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
          ],
        }}
      />
      <OrganizationJsonLd
        type="Corporation"
        logo="/assets/images/logo.png"
        legalName="Paintigo"
        name="Paintigo Shop"
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
          "https://www.instagram.com/paintigoworld/?hl=en",
          "https://www.youtube.com/@paintigo9457",
          "https://www.pinterest.com/paintigoshop/",
        ]}
        url="https://paintigo.shop/"
      />

      <ProductList products={products} />
      <Container>
        <SocialMedia />
      </Container>
    </>
  );
}

Products.Layout = Layout;

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
