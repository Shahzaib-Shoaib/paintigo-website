import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ROUTES } from "@utils/routes";
import { GetStaticProps } from "next";
import BlogList from "@components/blog/blog-list";
import { getAllBlogs } from "@lib/shopify";
import { NextSeo } from "next-seo";

export default function Blogs({ blogs }: any) {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo title="Blogs" description="Read Paintigo's latest post on Art & Craft."  />

      <BlogList blogs={blogs} />
    </>
  );
}

Blogs.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const blogs = await getAllBlogs();

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
        "aboutus",
      ])),
      blogs,
    },
  };
};
