import Layout from "@components/layout/layout";
import Container from "@components/ui/container";
import { returnPolicy } from "@settings/return-policy-settings";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import PageHeader from "@components/ui/page-header";
import { NextSeo } from "next-seo";

export default function RefundPage() {
  const { t } = useTranslation("policy");
  return (
    <>
    <NextSeo title="Return Policy" description="At Paintigo, customer satisfaction is our top priority. On our return policy page, you'll find all the details you need to know about returning products. From how to initiate a return, to time frames and conditions for acceptance, everything you need to know is here."/>
      <PageHeader pageHeader="text-page-return-policy" />

      <div className="py-12 lg:py-16 2xl:py-20">
        <Container>
          <div className="w-full mx-auto">
            {returnPolicy?.map((item) => (
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
