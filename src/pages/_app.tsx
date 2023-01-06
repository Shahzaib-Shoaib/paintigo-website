// Base CSS File
import "@styles/globals.css";
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/satisfy";
import "@styles/scrollbar.css";
import "@styles/tailwind.css";
import "@styles/swiper-carousel.css";
import "@styles/custom-plugins.css";
import "@styles/themes.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

// Other Files
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import ManagedModal from "@components/common/modal/managed-modal";
import { Analytics } from "@vercel/analytics/react";
import { ManagedUIContext } from "@contexts/ui.context";
import { getDirection } from "@utils/get-direction";
import { appWithTranslation } from "next-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRef } from "react";
import Head from "next/head";

type Props = {
  children?: React.ReactNode;
};

const Noop: React.FC<Props> = ({ children }) => <>{children}</>;

const CustomApp = ({ Component, pageProps, router }: AppProps) => {
  const queryClientRef = useRef<any>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const dir = getDirection(router.locale);
  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <QueryClientProvider client={queryClientRef.current}>
        <ManagedUIContext>
          <Layout pageProps={pageProps} language={router.locale}>
            <Component {...pageProps} language={router.locale} />
            <Analytics />
          </Layout>
          <ManagedModal />
        </ManagedUIContext>
      </QueryClientProvider>
    </>
  );
};

export default appWithTranslation(CustomApp);
