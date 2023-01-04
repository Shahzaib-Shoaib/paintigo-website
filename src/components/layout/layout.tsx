import React from "react";
import Footer from "@components/layout/footer/footer";
import BannerTop from "@components/common/banner-top";
import Header from "@components/layout/header/header";
// import Search from "@components/common/search";
import MobileNavigation from "@components/layout/mobile-navigation/mobile-navigation";
import { NextSeo } from "next-seo";

const Layout: React.FC = ({ children,language }:any) => {
  
  return (
    <div className="flex flex-col min-h-screen">
    {/* <NextSeo
				additionalMetaTags={[
					{
						name: "viewport",
						content: "width=device-width, initial-scale=1.0",
					},
				]}
				title="Paintigo.."
				description="Paintigo is dedicated to giving you the very best of Art Supplies, with a focus on quality, pigment, color vibrancy, and long-lasting painting results."
				canonical=""
				openGraph={{
					url: "",
					title: "Paintigo",
					description:
						"Paintigo is dedicated to giving you the very best of Art Supplies, with a focus on quality, pigment, color vibrancy, and long-lasting painting results.",
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
			/> */}
      <Header />
      <main
        className="relative flex-grow"
        style={{
          minHeight: "-webkit-fill-available",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </main>{" "}
      <Footer />
      <MobileNavigation />


    </div>
  );
}
export default Layout;
