import Link from "@components/ui/link";
import Image from "next/legacy/image";
import { ROUTES } from "@utils/routes";


const CollectionCard = ({ collection }: any) => {
    console.log(collection);
    
  const { handle, title } = collection.node;

  const { altText, url } = collection.node.image;

  return (
    <Link legacyBehavior href={`collections/${handle}`}>
      <div className="group">
        <div className="w-full bg-white rounded overflow-hidden ">
          <div className="relative object-fill group-hover:opacity-75 h-72 ">
            <Image
              priority={true}
              src={url}
              alt={title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      </div>
     </Link>
  );
};

export default CollectionCard;
