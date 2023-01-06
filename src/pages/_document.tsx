import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import Script from "next/dist/client/script";
import { i18n } from "next-i18next";
import { getDirection } from "@utils/get-direction";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    const { locale } = this.props.__NEXT_DATA__;
    // if (process.env.NODE_ENV !== "production") {
    // 	i18n!.reloadResources(locale);
    // }
    return (
      <Html dir={getDirection(locale)} style={{ overflow: "auto" }}>
        <Head>
          {" "}
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KBP463R');`,
            }}
          ></Script>
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KBP463R"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          ></noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
