// razor
import Link from '@components/ui/link';
import cn from 'classnames';
import { LinkProps } from 'next/link';
import { useTranslation } from 'next-i18next';
import Text from "@components/ui/text";

interface ItemProps {
  icon: JSX.Element;
  title: string;
  href: LinkProps['href'];
}

interface Props {
  className?: string;
  item: ItemProps;
}

const FeaturedCard: React.FC<Props> = ({ item, className }) => {
  const { t } = useTranslation('common');
  // @ts-ignore
  const { icon, title, href, description } = item;
  return (
    <Link href={href} className="w-full ">
      <div
        className={cn('group px-5 xl:px-5 2xl:px-8  flex items-center justify-center border-r xl:py-8 lg:py-6 md:py-4 border-black/10', className)}
      >
        <div className="flex flex-shrink-0 items-center justify-center text-[20px]">
          {icon}
        </div>
        <div className="ps-4">
          <h3 className='text-[15px] font-medium text-white '>
            {t(title)}
            </h3>
          <Text>{t(description)}</Text>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
