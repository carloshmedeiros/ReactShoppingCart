import React from 'react'
import itens from '../database'
import { ItemCard } from '../components/ItemCard'
import './Home.css'

export const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="overlay">
          <div className="content">
            <h1>Frete grátis para compras acima de R$10,00!</h1>
            <p>Comprando acima de 10 reais em produtos da Freshuit o frete é gratuito!!</p>
          </div>
        </div>
      </div>
      <div className='itens_wrapper'>
        {itens.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}
