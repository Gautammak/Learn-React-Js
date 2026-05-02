import React from "react";

export default function ItemList({ items }) {
  return (
    <div>
      <h2>📦 Product List</h2>

        {(items.length === 0) ? (
            <p>No Items Available</p>
        )  : (
            <ul>
               {items.map((item) => (
            <li key = {item.id} style={{color:item.inStock  ? "green" : "red"}}>
                  {item.name} - ₹{item.price}

                  {item.inStock ? <span> ✅ In Stock</span> : <span> ❌ Out of Stock</span>}

                  {item.price > 500 && <span style={{color:"red"}}> 💰 Premium</span>}
            </li>
          ))}
            </ul> 
        )}
    </div>
  );
}


