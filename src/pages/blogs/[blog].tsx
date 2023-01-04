import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { getAllBlogs, getAllProducts, getBlog, getProduct } from "@lib/shopify";
import ProductPageContent from "@components/product/product-page-content";
import BlogPageContent from "@components/blog/blog-page-content";
import { NextSeo } from "next-seo";
import { ArticleJsonLd } from "next-seo";

export default function BlogPage({ blog }: any) {
  return (
    <>
      <NextSeo title={`${blog.title}`} />
      <ArticleJsonLd
        type="BlogPosting"
        url={`https://paintigo.shop/blogs/${blog.handle}`}
        title={`${blog.title}`}
        images={[`${blog.image.url}`]}
        datePublished={`${blog.publishedAt}`}
        authorName={`${blog.author.name}`}
        description="This is a mighty good description of this blog."
      />
      <div className="min-h-screen py-12 sm:pt-20">
        <BlogPageContent blog={blog} />
      </div>
    </>
  );
}

BlogPage.Layout = Layout;

export async function idk() {
  const blogs = await getAllBlogs();

  const paths = blogs.map((item: any) => {
    const blog = String(item.node.handle);

    return {
      params: { blog },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

idk();

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}: any) => {
  const blog = await getBlog(params.blog);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
        "aboutus",
      ])),
      blog,
    },
  };
};
