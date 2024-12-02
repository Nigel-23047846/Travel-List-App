import {useState} from 'react';
import Logo from './Logo';
import PackingList from './PackingList';
import Stats from './Stats';
import Form from './Form';

const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((PrevItems) => [...PrevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((prevItems) => prevItems.map((item) => 
      item.id === id ? {...item, packed: !item.packed} : item
    ));
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem}/>
      <PackingList 
        items={items} 
        handleDeleteItem={handleDeleteItem}
        handleUpdateItem={handleUpdateItem}/>
      <Stats items={items}/>
    </div>
  );
} 

export default App;
