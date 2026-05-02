import React,{useState} from "react";
import ItemList from "./components/jsx-rendering/ItemList";

export default function App() {

   const [items,setItems] = useState([
      {id:1,name: "Laptop", price: 800, inStock: true},
      {id:2,name: "Smartphone", price: 600, inStock: false},
      {id:3,name: "Headphones", price: 150, inStock: true},
      {id:4,name: "Smartwatch", price: 200, inStock: false},
   ])


  return (
    <div style={{ padding: "20px" }}>
      <h1>JSX List Rendering Demo</h1>

       <button onClick={() => setItems([])}>Clear List</button> 

      <button onClick={() => setItems([
      {id:1,name: "Laptop", price: 800, inStock: true},
      {id:2,name: "Smartphone", price: 600, inStock: false},
      {id:3,name: "Headphones", price: 150, inStock: true},
      {id:4,name: "Smartwatch", price: 200, inStock: false}])}>
      Reset List</button>

      <ItemList items={items} />
    </div>
  );
}