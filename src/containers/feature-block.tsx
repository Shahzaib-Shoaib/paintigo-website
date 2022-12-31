import TextInformation from "@components/common/text-information";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi";
import {IoChatbubblesOutline, } from "react-icons/io5";

const data = [
  {
    id: 1,
    icon:   <FaShippingFast/>,
    title: "feature-title-one",
    description: "feature-description-one",
  },
  {
    id: 2,
    icon: <AiOutlineHeart/>,
    title: "feature-title-two",
    description: "feature-description-two",
  },
  {
    id: 3,
    icon: <HiShieldCheck/>,
    title: "feature-title-three",
    description: "feature-description-three",
  },
  {
    id: 4,
    icon:<IoChatbubblesOutline />,
    title: "feature-title-four",
    description: "feature-description-four",
  },
];

interface Props {
  className?: string;
}

const FeatureBlock: React.FC<Props> = ({
  className = "mb-12 md:mb-14 xl:mb-16 font-segoe",
}) => {
  return (
    <div
      className={`${className} bg-[#262626] w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-12 xl:gap-0 overflow-hidden py-12 xl:py-0 sm:px-4 md:px-8 lg:px-16 xl:px-0 mt-0`}
    >
      {data?.map((item) => (
        <TextInformation item={item} key={item.id} />
      ))}
    </div>
  );
};

export default FeatureBlock;
