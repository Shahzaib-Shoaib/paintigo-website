import { Fragment, useContext, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import Image from "next/legacy/image";
import Link from "next/link";
import { CartContext } from "@contexts/shopContext";
import { formatter } from "@utils/helper";
import Scrollbar from "@components/common/scrollbar";
import { useTranslation } from "next-i18next";

export default function MiniCart({ cart }: any) {
  const cancelButtonRef = useRef<HTMLButtonElement>(null);
  const { cartOpen }: any = useContext(CartContext);
  const { setCartOpen }: any = useContext(CartContext);
  const { checkoutUrl }: any = useContext(CartContext);
  const { removeCartItem }: any = useContext(CartContext);
  const { t } = useTranslation("common");

  let cartTotal = 0;
  cart.map((item: any) => {
    cartTotal += item?.variantPrice * item?.variantQuantity;
  });

  return (
    <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog
        initialFocus={cancelButtonRef}
        as="div"
        className="fixed z-50 inset-0 overflow-auto"
        onClose={() => {
          setCartOpen(!cartOpen);
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6 mr-8 md:mr-4">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        {t("text-shopping-cart")}
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          ref={cancelButtonRef}
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => setCartOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <Scrollbar className="cart-scrollbar w-full flex-grow">
                      <div className="mt-8">
                        <div className="flow-root">
                          {cart.length > 0 ? (
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cart.map((product: any) => (
                                <li key={product.id} className="py-6 flex">
                                  <div className="relative flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                    <Image
                                      src={product.image}
                                      alt={product.title}
                                      layout="fill"
                                      objectFit="cover"
                                    />
                                  </div>

                                  <div className="ml-4 flex-1 flex flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <Link
                                            legacyBehavior
                                            href={`/products/${product.handle}`}
                                            passHref
                                          >
                                            <a
                                              onClick={() => setCartOpen(false)}
                                            >
                                              {product.title}
                                            </a>
                                          </Link>
                                        </h3>
                                        <p className="ml-4">
                                          {formatter.format(
                                            product.variantPrice
                                          )}
                                        </p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {product.variantTitle}
                                      </p>
                                    </div>
                                    <div className="flex-1 flex items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        Qty {product.variantQuantity}
                                      </p>

                                      <div className="flex">
                                        <button
                                          onClick={() =>
                                            removeCartItem(product.id)
                                          }
                                          type="button"
                                          className="font-medium text-gray-500 hover:text-gray-800"
                                        >
                                          {t("text-remove")}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <div className="">
                              <p> {t("text-cart-empty")}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </Scrollbar>
                  </div>
                  {cart.length > 0 ? (
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6 mr-8 md:mr-4">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p> {t("text-subtotal")}</p>
                        <p>{formatter.format(cartTotal)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        {t("text-checkout-instruction")}
                      </p>
                      <div className="mt-6">
                        <a
                          href={checkoutUrl}
                          className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800"
                        >
                          {t("text-checkout")}
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="font-medium hover:text-gray-800"
                            onClick={() => setCartOpen(false)}
                          >
                            {t("text-continue-shopping")}
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
