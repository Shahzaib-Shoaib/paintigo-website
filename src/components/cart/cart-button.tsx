import CartIcon from "@components/icons/cart-icon";
import { useUI } from "@contexts/ui.context";
import { useContext } from "react";
import { CartContext } from "@contexts/shopContext";

import MiniCart from "./minicart";
const CartButton = () => {
  const { cart }: any = useContext(CartContext);
  const { cartOpen }: any = useContext(CartContext);
  const { setCartOpen }: any = useContext(CartContext);
  let cartQuantity = 0;
  cart.map((item: any) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <>

      <button
        className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
        onClick={() => setCartOpen(!cartOpen)}
        aria-label="cart-button"
      >
        
        <MiniCart cart={cart} />
        <CartIcon />

        <span className="cart-counter-badge flex items-center justify-center text-white absolute -top-2.5 xl:-top-3 -end-2.5 xl:-end-3 rounded-full font-bold bg-[#262626]">
          {cartQuantity}
        </span>
      </button>
    </>
  );
};

export default CartButton;
