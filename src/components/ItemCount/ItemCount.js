


const ItemCount = ({setCount,count}) => {
    const onAdd=()=>{
        setCount(count+1);
};
const onRemove=()=>{
    if(count===0){
        return;
    }
    setCount(count-1);
};  
  return (
         <div>
            <p>{count}</p>
             <button className="button" onClick={onAdd}>+</button>
             <button className="button" onClick={onRemove}>-</button>
         </div>
    )
}

export default ItemCount