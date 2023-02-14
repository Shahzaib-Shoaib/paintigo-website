import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { getAllProducts, getProduct } from "@lib/shopify";
import ProductPageContent from "@components/product/product-page-content";
import { NextSeo, ProductJsonLd } from "next-seo";

export default function ProductPage({ product }: any) {
  // console.log(product);

  return (
    <>
      <NextSeo
        title={`${product.title}`}
        description={`${product.description}`}
      />
      <ProductJsonLd
        productName={`${product.title}`}
        images={[
          `${product.images.edges[0].node.originalSrc}`,
          `${product.images.edges[1].node.originalSrc}`,
        ]}
        description={`${product.description}`}
        brand="Paintigo"
        color="Multicolor"
        manufacturerName="Paintigo"
        manufacturerLogo="/assets/images/logo.png"
        material="Acrylic"
        slogan="Paintigo is dedicated to giving you the very best of Art Supplies, with a focus on quality, pigment, color vibrancy, and long-lasting painting results.."
        disambiguatingDescription={`${product.title}, Perfect for Artists like you`}
        reviews={[
          {
            author: "Jim",
            datePublished: "2022-01-06T03:37:40Z",
            reviewBody: "This is my favorite product yet! ",
            name: "So awesome!!!",
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
            publisher: {
              type: "Organization",
              name: "TwoVit",
            },
          },
        ]}
        aggregateRating={{
          ratingValue: "4.4",
          reviewCount: "89",
        }}
        // offers={[
        //   {
        //     price: `${product.variants.edges[0].node.priceV2.amount}`,
        //     priceCurrency: "GBP",
        //     itemCondition: "https://schema.org/NewCondition",
        //     availability: "https://schema.org/InStock",
        //     url: `https://paintigo.shop/products/${product.handle}`,
        //     seller: {
        //       name: "Paintigo",
        //     },
        //   },
        // ]}
      />
      <div className="min-h-screen py-12 mx-9 sm:pt-20">
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
