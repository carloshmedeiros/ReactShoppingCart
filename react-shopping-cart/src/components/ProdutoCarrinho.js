import { useContext } from "react";
import "./ProdutoCarrinho.css";
import CartContext from "../context/CartContext";

const ProdutoCarrinho = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <li className='ProdutoCarrinho__item'>
      <img src={item.image} alt='' />
      <div>
        {item.name} R${(`${item.price}`)}
      </div>
      <button className='ProdutoCarrinho__button' onClick={() => removeItem(item._id)}>
      <i class="icon-trash "></i>
      </button>
    </li>
  );
};

export default ProdutoCarrinho;