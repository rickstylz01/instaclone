import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";


function SearchBar() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchTerm: '',
  //   };
  // }

  // editSearchTerm = (query) => {
  //   this.setState({ searchTerm: query.target.value })
  // }

  // dynamicSearch = () => {
  //   return this.props.data.filter(
  //     postObject => postObject.username.toLocaleLowerCase().includes(
  //       this.state.searchTerm.toLocaleLowerCase()))
  // }
  const  [searchTerm, setSearchTerm]  = useState("")

  return (
    <Form className="ml-auto" inline>
      <FormControl 
      type="text" 
      placeholder="Search" 
      className="mr-sm-2"
      value={ searchTerm }
      onChange={ (query) => setSearchTerm(query.target.value) } 
      />

      <Button 
      variant="outline-success">
        Search
      </Button>
    </Form>
  );
  
}

export default SearchBar
