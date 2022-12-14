import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom";

const ItemDetail = () => {
  const [count,setCount] = useState(0);
  
  const onAdd= (cantidad)=> {
    setCount(cantidad)
  } 

  return (
    <div >
       <h1>detalle del producto</h1>
       <img src="https://picsum.photos/200/300" alt="carrito"/>
       <h2>precio:9552</h2>
       <ItemCount onAdd={onAdd} count={count}/>
       
       <Link to={'/cart'} onClick={handleClick}>
        ir al carrito
       </Link>
    </div>
  )
}

export default ItemDetail