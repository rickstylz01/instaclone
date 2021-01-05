import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [
        'Rick',
        'Vitals',
        'Gino',
        'Mike',
        'Al',
        'Randy',
        'Rich',
        'Matt',
        'Franky',
        'Ramon',
      ],
      searchTerm: ''
    };
  }

  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  dynamicSearch = () => {
    return this.state.names.filter(name => name.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase()))
  }

  render() {
    return (
      <Form className="ml-auto" inline>
        <FormControl 
        type="text" 
        placeholder="Search" 
        className="mr-sm-2"
        value={this.state.searchTerm}
        onChange={this.editSearchTerm} />

        <Button variant="outline-success">Search</Button>
      </Form>
    );
  }
}

export default SearchBar
