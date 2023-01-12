import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ROUTES } from "@utils/routes";
import { GetStaticProps } from "next";
import ProductList from "@components/product/product-list";
import CollectionList from "@components/collection/collection-list";
import { getAllCollections } from "@lib/shopify";
import SocialMedia from "@components/common/socialmedia";

export default function Collections({ collections }: any) {
  console.log(collections);

  const { t } = useTranslation("common");

  return (
    <>
      {/* <ProductList products={products} /> */}
      <CollectionList collections={collections} />
      <Container>
        <SocialMedia />
      </Container>
    </>
  );
}

Collections.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const collections = await getAllCollections(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
        "aboutus",
      ])),
      collections,
    },
  };
};
