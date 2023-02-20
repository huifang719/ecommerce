const Products: Product[] = [
  {
    OLID: "OL26992991M",
    name: "A Court of Mist and Fury",
    author: "Sarah J. Maas",
    price: 37.97,
    imageUrl:'https://covers.openlibrary.org/b/id/13316297-L.jpg'}, 
  {
    OLID: "OL7826547M",
    name: "A Game of Thrones",
    author: "George R. R. Martin",
    price: 45.98,
    imageUrl:'https://covers.openlibrary.org/b/id/11291394-L.jpg'},
  {
    OLID: "OL24896701M",
    name: "Thinking, fast and slow",
    author: "Daniel Kahneman",
    price: 25.98,
    imageUrl:'https://covers.openlibrary.org/b/id/7089298-L.jpg'
  },
  {
    OLID: "OL38010863M",
    name: "Twisted Lies",
    author: "Ana Huang",
    price: 27.58,
    imageUrl:'https://covers.openlibrary.org/b/id/12816871-L.jpg'
  },
  {
    OLID: "OL25418184M",
    name: "Men are from Mars, women are from Venus",
    author: "John Gray",
    price: 20.99,
    imageUrl:'https://covers.openlibrary.org/b/id/9449958-L.jpg'
  }, 
  {
    OLID: "OL29412746M",
    name: "The Psychology of Money",
    author: "Morgan Housel",
    price: 18.58,
    imageUrl:'https://covers.openlibrary.org/b/id/12824425-L.jpg'
  },
  {
    OLID: "OL25439048M",
    name: "Ignite Me",
    author: "Tahereh Mafi",
    price: 15.99,
    imageUrl:'https://covers.openlibrary.org/b/id/7272906-L.jpg'
  },
  {
    OLID: "OL38061727M",
    name: "It Ends with Us, It Starts with Us",
    author: "Colleen Hoover",
    price: 34.25,
    imageUrl:'https://covers.openlibrary.org/b/id/12920899-L.jpg'
  },
  {
    OLID: "OL32532952M",
    name: "Better Than the Movies",
    author: "Lynn Painter",
    price: 22.99,
    imageUrl:'https://covers.openlibrary.org/b/id/11182600-L.jpg'
  },  
];

interface Product {
  OLID: string;
  name: string;
  author: string;
  price: number;
  imageUrl: string;
}

export default Products