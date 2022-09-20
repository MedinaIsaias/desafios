
const ItemCount = ({onAdd,count}) => {
    const AddToCart=()=>{
        onAdd(count+1);
};
const onRemove=()=>{
    if(count===0){
        return;
    }
    onAdd(count-1);
};  
  return (
         <div>
            <p>{count}</p>
             <button className="button" onClick={AddToCart}>+</button>
             <button className="button" onClick={onRemove}>-</button>
         </div>
    )
}

export default ItemCount