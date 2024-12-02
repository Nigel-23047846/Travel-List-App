export default function Item({ item,handleUpdateItem, handleDeleteItem}) {
    return (
      <li style={{textDecoration: item.packed?"line-through":"none"}}>
        {item.description} ({item.quantity})
        
        <input type='checkbox'
        checked={item.packed}
        onChange={() => handleUpdateItem(item.id)}/>
  
        <button onClick={() => handleDeleteItem(item.id)}>🗑️</button>
      </li>
    );
  }