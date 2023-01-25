import Link from "@components/ui/link";
import Image from "next/legacy/image";
import { ROUTES } from "@utils/routes";

const BlogCard = ({ blog }: any) => {
  const { handle, title, excerpt } = blog.node;

  const { altText, url } = blog.node.image;

  return (
    <Link legacyBehavior href={`${ROUTES.BLOG}/${handle}`}>
      <div className="group">
        {/* <div className='w-full bg-gray-200 rounded-3xl overflow-hidden '>
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
        <p className='mt-1 text-sm text-gray-700'>{formatter.format(price)}</p> */}

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-product ">
          <img className="rounded-t-lg" src={url} alt={altText} />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 h-36 ">
              {title}{" "}
            </h5>
            {/* <p className="mb-3 font-normal text-gray-700 ">{excerpt}</p> */}
            <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#262626] rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none ">
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
