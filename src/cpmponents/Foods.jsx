import React from 'react'
import { foodlist } from '../../public/foodlist'

const Foods = () => {
  return (
    <>
   {
    foodlist.map(( food,id)=>{
  return (
    <div key={id}>
      <div>
        <img src={food.image} alt="imaga"  />
      </div>
      <h2>{food.title}</h2>
      <p>{food.description}</p>
      <h2>${food.price}</h2>

    </div>
  )

    })
   }
      
    </>
  )
}




export default Foods
