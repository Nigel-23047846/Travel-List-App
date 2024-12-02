export default function Stats({items}) {
    const numItems = items.length;
    const numPackedItems = items.filter((item) => item.packed).length;
    const percentPacked = numItems === 0 ? 0 : numPackedItems / numItems * 100;
  
    return (
      <footer className="stats">
        <em>
          {percentPacked === 100
          ? "You got everything!"
          : `You have ${numPackedItems} items in the list ${numItems} packed, ${percentPacked.toFixed(0)}%`}
        </em>
      </footer>
    );
  }
  
  