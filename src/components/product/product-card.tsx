import Link from "@components/ui/link";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { ROUTES } from "@utils/routes";

import { formatter } from "@utils/helper";

const ProductCard = ({ product }: any) => {
  const { handle, title } = product.node;
  const router = useRouter();

  const { altText, originalSrc } = product.node.images.edges[0].node;

  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <Link legacyBehavior href={`${ROUTES.PRODUCT}/${handle}`}>
      <div className="group">
        <div className="w-full bg-white rounded overflow-hidden ">
          <div className="relative object-fill group-hover:opacity-75 h-72 ">
            <Image
              priority={true}
              src={originalSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-700">{formatter.format(price)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
