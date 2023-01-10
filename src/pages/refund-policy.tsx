import Layout from "@components/layout/layout";
import Container from "@components/ui/container";
import { refundPolicy } from "@settings/refund-policy-settings";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import PageHeader from "@components/ui/page-header";
import { NextSeo } from "next-seo";

export default function RefundPage() {
  const { t } = useTranslation("policy");
  return (
    <>
      <NextSeo title="Refund Policy" description="Get familiar with Paintigo's refund policy. On this page, you'll find all the details you need to know about returns, exchanges, and refunds for our products. Make sure to read this before making a purchase." />
      <PageHeader pageHeader="text-page-refund-policy" />

      <div className="py-12 lg:py-16 2xl:py-20">
        <Container>
          <div className="w-full mx-auto">
            {refundPolicy?.map((item) => (
              // @ts-ignore
              <div key={item.title} className="mb-8 lg:mb-12 last:mb-0">
                <h2 className="mb-4 lg:mb-6 text-black font-bold text-xl">
                  {t(item.title)}
                </h2>
                <div
                  className="text-sm lg:text-15px leading-7 space-y-5"
                  dangerouslySetInnerHTML={{
                    __html: t(item.description),
                  }}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

RefundPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
        "aboutus",
        "policy",
      ])),
    },
  };
};
