import { IoLogoPinterest } from "react-icons/io";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoTiktok,
} from "react-icons/io5";

export const footer = {
  widgets: [
    {
      id: 1,
      widgetTitle: "widget-title-social",
      lists: [
        {
          id: 1,
          title: "link-instagram",
          path: "https://www.instagram.com/paintigoshop/",
          icon: <IoLogoInstagram />,
        },
        {
          id: 2,
          title: "link-twitter",
          path: "https://twitter.com/paintigo",
          icon: <IoLogoTwitter />,
        },
        {
          id: 3,
          title: "link-facebook",
          path: "https://www.facebook.com/PaintigoGlobal/",
          icon: <IoLogoFacebook />,
        },
        {
          id: 4,
          title: "link-youtube",
          path: "https://www.youtube.com/@paintigo9457",
          icon: <IoLogoYoutube />,
        },
        {
          id: 5,
          title: "link-pinterest",
          path: "https://www.pinterest.com/paintigoshop/",
          icon: <IoLogoPinterest />,
        },
        {
          id: 6,
          title: "link-tiktok",
          path: "https://www.tiktok.com/@MS4wLjABAAAA92YYu4jSMDOPTX13LMPP2dbFkXQHZi7pfz7gk6vxV8R6p05B_vejYNQqmmtD6Bj3",
          icon: <IoLogoTiktok />,
        },
      ],
    },
    {
      id: 2,
      widgetTitle: "widget-title-contact",
      lists: [
        {
          id: 1,
          title: "link-contact-us",
          path: "/contact-us",
        },
        {
          id: 2,
          title: "link-email",
          path: "mailto:shop@paintigo.com",
        },
        {
          id: 3,
          title: "link-email-two",
          path: "mailto:info@paintigo.com",
        },
        {
          id: 4,
          title: "link-phone",
          path: "tel:+1 254 568-5479",
        },
      ],
    },
    {
      id: 3,
      widgetTitle: "widget-title-about",
      lists: [
        {
          id: 1,
          title: "link-about-us",
          path: "/about-us",
        },
        {
          id: 2,
          title: "link-site-map",
          path: "/sitemap-0.xml",
        },
      ],
    },
    {
      id: 4,
      widgetTitle: "widget-title-customer-care",
      lists: [
        {
          id: 1,
          title: "link-faq",
          path: "/faq",
        },
        {
          id: 2,
          title: "link-return-policy",
          path: "/return-policy",
        },
        {
          id: 3,
          title: "link-refund-policy",
          path: "/refund-policy",
        },
      ],
    },
    {
      id: 5,
      widgetTitle: "widget-title-our-stores",
      lists: [
        {
          id: 1,
          title: "link-amazon-global",
          path: "https://www.amazon.com/stores/Paintigo/Homepage/page/AF111FC8-5FD9-4249-A960-58749715DBE6",
        },
        {
          id: 2,
          title: "link-amazon-uk",
          path: "https://www.amazon.co.uk/stores/PAINTIGO/Homepage/page/48CC385B-F8FF-4376-AAB1-E26C16076F44",
        },
        {
          id: 3,
          title: "link-amazon-canada",
          path: "/terms-of-service",
        },
        {
          id: 4,
          title: "link-amazon-germany",
          path: "/terms-of-service",
        },
        {
          id: 5,
          title: "link-amazon-france",
          path: "/terms-of-service",
        },
        {
          id: 6,
          title: "link-amazon-italy",
          path: "/terms-of-service",
        },
        {
          id: 7,
          title: "link-amazon-spain",
          path: "/terms-of-service",
        },
        {
          id: 8,
          title: "link-amazon-poland",
          path: "/terms-of-service",
        },
      ],
    },
  ],
  payment: [
    {
      id: 1,
      path: "/",
      image: "/assets/images/payment/mastercard.svg",
      name: "payment-master-card",
      width: 34,
      height: 20,
    },
    {
      id: 2,
      path: "/",
      image: "/assets/images/payment/visa.svg",
      name: "payment-visa",
      width: 50,
      height: 20,
    },
    {
      id: 3,
      path: "/",
      image: "/assets/images/payment/paypal.svg",
      name: "payment-paypal",
      width: 76,
      height: 20,
    },
    {
      id: 4,
      path: "/",
      image: "/assets/images/payment/jcb.svg",
      name: "payment-jcb",
      width: 26,
      height: 20,
    },
    {
      id: 5,
      path: "/",
      image: "/assets/images/payment/skrill.svg",
      name: "payment-skrill",
      width: 39,
      height: 20,
    },
    {
      id: 6,
      path: "/",
      image: "/assets/images/payment/amazon.svg",
      name: "payment-amazon",
      width: 100,
      height: 0,
    },
    {
      id: 7,
      path: "/",
      image: "/assets/images/payment/amex.svg",
      name: "payment-amex",
      width: 70,
      height: 0,
    },
  ],
};
