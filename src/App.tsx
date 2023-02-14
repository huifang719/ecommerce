import React from 'react';
import NavigationBar from './components /NavigationBar';
import ProductList from './components /ProductList';

const App: React.FC = () => {
  interface Product {
    id: number;
    name: string;
    author: string;
    price: number;
    imageUrl: string;
  }
  const products: Product[] = [{
    id: 1,
    name: "Harry Potter",
    author: "Rose p lin",
    price: 24.98,
    imageUrl:'https://images.unsplash.com/photo-1670272506152-6f2703532cd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}, 
    {
      id: 2,
      name: "Harry Potter 2",
      author: "Rose p lin",
      price: 25.98,
      imageUrl:'https://images.unsplash.com/photo-1670272506152-6f2703532cd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
      {
        id: 3,
        name: "Harry Potter 3",
        author: "Rose p lin",
        price: 25.98,
        imageUrl:'https://images.unsplash.com/photo-1670272506152-6f2703532cd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
        {
          id: 4,
          name: "Harry Potter 4",
          author: "Rose p lin",
          price: 25.98,
          imageUrl:'https://images.unsplash.com/photo-1670272506152-6f2703532cd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
        
];
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
      <ProductList products={products}/>
    </div>
  );
}

export default App;
