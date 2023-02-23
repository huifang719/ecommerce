import React, { useState } from "react";
import {  Form, FormControl, Button } from "react-bootstrap";
// import { useNavigate } from 'react-router-dom';

const NavSearch: React.FC = () => {
  
    const [query, setQuery] = useState('');
    const [searchBooks, setSearchBooks] = useState([]);
    // const navigate = useNavigate();
   
    const handleSearch =  () => {
      fetch(`http://openlibrary.org/search.json?q=${query}`)
        .then(res => res.json())
        .then(res => {
          // get the book information
          console.log(res.docs)
          setSearchBooks(res.docs)
        })
        setQuery('')
        // navigate ('/searchresults');
  } 

  return (
    <div>
      <Form className="d-inline-flex search">
      <FormControl 
        type="text" 
        placeholder="Search" 
        className="mr-sm-2" 
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <Button 
        variant="outline-success" 
        onClick={handleSearch}>Search</Button>
       </Form>

    </div>
    
  )
}
export default NavSearch; 