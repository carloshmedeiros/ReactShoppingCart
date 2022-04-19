import { useContext } from "react";
import "./Carrinho.css";
import CartContext from "../context/CartContext";
import ProdutoCarrinho from "./ProdutoCarrinho";

const Carrinho = () => {
    const { showCart, itemcarrinho, showHideCart } = useContext(CartContext);

    return (
        <>
            {showCart && (
                <div className='cart__wrapper'>
                    <div style={{ textAlign: "right" }}>
                        <i
                            style={{ cursor: "pointer" }}
                            className='fa fa-times-circle'
                            aria-hidden='true'
                            onClick={showHideCart}
                        ></i>
                    </div>
                    <div className='cart__innerWrapper'>
                        {itemcarrinho.length === 0 ? (
                            <h4>Carrinho vazio!</h4>
                        ) : (
                            <ul>
                                {itemcarrinho.map((item) => (
                                    <ProdutoCarrinho key={item._id} item={item} />
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='Cart__cartTotal'>
                        <div>Total</div>
                        <div>{itemcarrinho.reduce((amount, item) => item.price + amount , 0) > 9.99 && (
                            <div className='Cart__frete'>
                                <span>FRETE GRATIS</span>
                            </div>
                        )}</div>
                        <div style={{ marginLeft: 5 }}>R$:
                            {(
                                itemcarrinho.reduce((amount, item) => item.price + amount, 0).toFixed(2)
                            )}
                        </div>
                        
                    </div>
                </div>
            )}
        </>
    );
};

export default Carrinho;

