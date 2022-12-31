import Image from "next/image";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaSnapchat,
  FaWhatsapp,
} from "react-icons/fa";
import cn from "classnames";
import { useTranslation } from "next-i18next";
const socialmediaFeed = [
  {
    id: 1,
    title: "text-instagram",
    slug: "/#",
    image: "/assets/images/social/262626.jpg",
    icon: (
      <FaInstagram className="text-white text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl transform opacity-0 scale-400 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100" />
    ),
  },
  {
    id: 2,
    title: "text-facebook",
    slug: "/#",
    image: "/assets/images/social/262626.jpg",
    icon: (
      <FaFacebook className="text-white text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl transform opacity-0 scale-400 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100" />
    ),
  },
  {
    id: 3,
    title: "text-snapchat",
    slug: "/#",
    image: "/assets/images/social/262626.jpg",
    icon: (
      <FaSnapchat className="text-white text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl transform opacity-0 scale-400 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100" />
    ),
  },
  {
    id: 4,
    title: "text-pinterest",
    slug: "/#",
    image: "/assets/images/social/262626.jpg",
    icon: (
      <FaPinterest className="text-white text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl transform opacity-0 scale-400 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100" />
    ),
  },
  {
    id: 5,
    title: "text-whatsapp",
    slug: "/#",
    image: "/assets/images/social/262626.jpg",
    icon: (
      <FaWhatsapp className="text-white text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl transform opacity-0 scale-400 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100" />
    ),
  },
  {
    id: 6,
    title: "text-discord",
    slug: "/#",
    image: "/assets/images/social/262626.jpg",
    icon: (
      <FaDiscord className="text-white text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl transform opacity-0 scale-400 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100" />
    ),
  },
];

interface Props {
  className?: string;
  variant?: "rounded";
  disableContainerBorderRadius?: boolean;
}
const SocialMedia: React.FC<Props> = ({
  className = "",
  variant,
  disableContainerBorderRadius = false,
}) => {
  const { t } = useTranslation("common");
  return (
    <>
    <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
    {t("text-socialmedia")}
  </h2>
    <div
      className={cn(
        "grid grid-cols-3 md:grid-cols-6 gap-0.5 sm:gap-1 overflow-hidden",
        {
          "rounded-md": !disableContainerBorderRadius,
        },
        className
      )}
    >
    
      {socialmediaFeed?.map((item) => (
        <a
          className="group flex justify-center text-center relative"
          href={item.slug}
          key={`instagram--key${item.id}`}
          target="_blank"
        >
          <Image
            src={item.image ?? "/assets/placeholder/instagram.svg"}
            alt={t(`${item.title}`) || t("text-instagram-thumbnail")}
            width={300}
            height={300}
            className={cn("bg-[#262626] object-cover", {
              "rounded-md": variant === "rounded",
            })}
          />
          <div
            className={cn(
              "absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-50",
              {
                "rounded-md": variant === "rounded",
              }
            )}
          />
          <div className="absolute top left h-full w-full flex items-center justify-center">
            {item.icon}
          </div>
        </a>
      ))}
    </div>
    </>
  );
};

export default SocialMedia;
