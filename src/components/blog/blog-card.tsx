import Link from "@components/ui/link";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import {ROUTES} from "@utils/routes";


import { formatter } from "@utils/helper";

const BlogCard = ({ blog }:any) => {
  
  const { handle, title } = blog.node;
	const router = useRouter();

  const { altText, url } = blog.node.image;

  // const price = blog.node.priceRange.minVariantPrice.amount;

  return (
    <Link legacyBehavior href={`${ROUTES.BLOG}/${handle}`}  >
      <div className='group'>
        <div className='w-full bg-gray-200 rounded-3xl overflow-hidden '>
          <div className='relative object-fill group-hover:opacity-75 h-72 '>
            <Image
              src={url}
              alt={altText}
              layout='fill'
              objectFit='cover'
              
            />
          </div>
        </div>
        <h3 className='mt-4 text-lg font-medium text-gray-900'>{title}</h3>
        {/* <p className='mt-1 text-sm text-gray-700'>{formatter.format(price)}</p> */}
      </div>
    </Link>
  );
};

export default BlogCard;