import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  editSearchTerm = (query) => {
    this.setState({ searchTerm: query.target.value })
  }

  dynamicSearch = () => {
    return this.props.data.filter(
      postObject => postObject.username.toLocaleLowerCase().includes(
        this.state.searchTerm.toLocaleLowerCase()))
  }

  render() {
    return (
      <div>
        <Form className="ml-auto" inline>
          <FormControl 
          type="text" 
          placeholder="Search" 
          className="mr-sm-2"
          value={this.state.searchTerm}
          onChange={this.editSearchTerm} />

          <Button 
          variant="outline-success">
            Search
          </Button>
        </Form>
        
      </div>
    );
  }
}

export default SearchBar
