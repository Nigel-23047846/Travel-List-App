import Item from "./Item";

export default function PackingList({items, handleUpdateItem ,handleDeleteItem}) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} handleUpdateItem={handleUpdateItem} handleDeleteItem={handleDeleteItem}/>
          ))}
        </ul>
      </div>
    );
  }