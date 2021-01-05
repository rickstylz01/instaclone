import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import postsData from '../PostIndex/postsData.json';
import PostIndex from '../PostIndex/PostIndex';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchTerm: '',
    };
  }

  getData() {
    this.setState({ data: postsData });
  }
  componentDidMount() {
    this.getData();
  }

  editSearchTerm = (query) => {
    this.setState({ searchTerm: query.target.value })
  }

  dynamicSearch = () => {
    debugger
    return this.state.data.filter(
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
        <PostIndex data={ this.dynamicSearch() } />
      </div>
    );
  }
}

export default SearchBar
