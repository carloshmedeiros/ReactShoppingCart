import "./Menu.css";
import CartContext from "../context/CartContext";
import { useContext } from "react";


export const Nav = () => {
  const { itemcarrinho, showHideCart } = useContext(CartContext);
  return (
    <nav>
      <div className='nav__left'>FRESHUIT</div>
      <div className='nev__middle'>
        <div className='input__wrapper'>
        </div>
      </div>
      <div className='nav__right'>
        <div className='cart__icon'>
        <i class="icon-shopping-cart" onClick={showHideCart}></i>
        {itemcarrinho.length > 0 && (
            <div className='item__count'>
              <span>{itemcarrinho.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

