import React from "react";
import Link from "@components/ui/link";
import Image from "next/legacy/image";
import { useTranslation } from "next-i18next";

interface ImgItem {
  imgWidth: number;
  imgHeight: number;
  imgSrc: string;
}
interface MenuItem {
  id: number | string;
  path: string;
  label: string;
  columnItemItems?: MenuItem[];
  img?: ImgItem[];
}

type MegaMenuProps = {
  columns: {
    id: number | string;
    columnItems: MenuItem[];
  }[];
};

const MegaMenu: React.FC<MegaMenuProps> = ({ columns }) => {
  const { t } = useTranslation("menu");

  return (
    <div className="absolute bg-gray-200 megaMenu shadow-header left-28 xl:start-0">
      <div className="grid grid-cols-4">
        {columns?.map((column) => (
          <ul
            className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7"
            key={column.id}
          >
            {column?.columnItems?.map((columnItem) => (
              <React.Fragment key={columnItem.id}>
                <li className="mb-1.5">
                  <Link
                    href={columnItem.path}
                    className="block text-sm py-1.5 text-black font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                  >
                    {t(columnItem.label)}
                  </Link>
                </li>
                {columnItem?.columnItemItems?.map((item: any) => (
                  <li
                    key={item.id}
                    className={
                      columnItem?.columnItemItems?.length === item.id
                        ? "border-b border-gray-300 pb-3.5 mb-3"
                        : ""
                    }
                  >
                    <Link
                      href={item.path}
                      className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                    >
                      {t(item.label)}

                      {item?.img?.map((item: any) => (
                          <Image
                            src={item?.imgSrc}
                            key={item.imgSrc}                            alt=""
                            width={item.imgWidth}
                            height={item.imgHeight}
                          />
                      ))}
                    </Link>
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;

// column => column => columnItems => columnItemItems
