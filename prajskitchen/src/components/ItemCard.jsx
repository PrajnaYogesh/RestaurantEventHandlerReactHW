import React from 'react'
import './ItemCard.css'

function ItemCard({selectedItem}) {
  return (
    <>
    {

    selectedItem.map((item,index) => (
            
        <div className='cardContainer'  key={index}>
        <img className='itemImage' src={item.image} alt={item.name} />

<div className="itemDesc">
    <div className="info">
        <p>{item.name}</p>
        <p>{item.price}</p>
    </div>
    <p>{item.description}</p>
</div>
</div>
))}


    </>   
  )
}

export default ItemCard