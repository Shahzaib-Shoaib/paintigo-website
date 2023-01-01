import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ROUTES } from "@utils/routes";
import { GetStaticProps } from "next";
import ProductList from "@components/product/product-list";
import { getProductsInCollection } from "@lib/shopify";
import SocialMedia from "@components/common/socialmedia";



export default function Products({ products }: any) {
  const { t } = useTranslation("common");
  
  return (
    <>
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
