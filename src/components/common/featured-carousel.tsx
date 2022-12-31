import FeaturedCard from "@components/cards/featured-card";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide, Swiper } from "@components/ui/carousel/slider";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi";
import { IoChatbubblesOutline } from "react-icons/io5";

const data = [
  {
    id: 1,
    icon: <FaShippingFast />,
    title: "feature-title-one",
    description: "feature-description-one",
    href: "/",
  },
  {
    id: 2,
    icon: <AiOutlineHeart />,
    title: "feature-title-two",
    description: "feature-description-two",
    href: "/",
  },
  {
    id: 3,
    icon: <HiShieldCheck />,
    title: "feature-title-three",
    description: "feature-description-three",
    href: "/",
  },
  {
    id: 4,
    icon: <IoChatbubblesOutline />,
    title: "feature-title-four",
    description: "feature-description-four",
    href: "/",
  },
];

interface Props {
  className?: string;
}

const breakpoints = {
  "1536": {
    slidesPerView: 4,
  },
  "1280": {
    slidesPerView: 4,
  },
  "1024": {
    slidesPerView: 3,
  },
  "768": {
    slidesPerView: 2,
  },
  "640 ": {
    slidesPerView: 2,
  },
  "0": {
    slidesPerView: 1,
  },
};

const FeatureCarousel: React.FC<Props> = ({
  className = "mb-7 md:mb-10 bg-[#262626] ",
}) => {
  return (
    <div className={` ${className}`}>
      <Carousel
        autoplay={false}
        breakpoints={breakpoints}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        paginationVariant="circle"
        prevActivateId="featured-carousel-button-prev"
        nextActivateId="featured-carousel-button-next"
        className={"rounded-md border border-black/10 py-[2.5rem] sm:pb-[1.5rem] "}
      >
        <Swiper>
          {data?.map((item) => (
            <SwiperSlide key={`data-swiper-slide-${item.id}`}>
              <FeaturedCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Carousel>
    </div>
  );
};

export default FeatureCarousel;
