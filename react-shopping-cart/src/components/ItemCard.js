import React, { useContext } from 'react'
import './ItemCard.css';
import CartContext from '../context/CartContext';

export const ItemCard = ({ item }) => {
    const { addToCart } = useContext(CartContext)
    
  return (
    
    <div className='itemCard__wrapper'>
        <div>
            <img className='itemCard__img' src={item.image} alt=''/>
            <h4>{item.name}</h4>
            <div className='itemCard__price'>
                <h5>R$: {item.price}</h5>
            </div>
            <button className='ItemCard__button' onClick={()=> {addToCart(item)}}>Adicionar ao carrinho</button>
        </div>
    </div>
  )
}
