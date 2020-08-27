import React, { Component } from 'react';
import { Form, Button, List } from 'semantic-ui-react';
import Data from '../../util/getDataSource';
import ResultInfo from '../resultInfo';
import './searchHome.css';

class SearchHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      searchQuery: '',
      searchResults: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSearchPress = this.onSearchPress.bind(this);
  }

  async componentDidMount() {
    await Data.loadData();
    this.setState({ data: Data.getItems() });
  }

  onSearchPress() {
    const query = this.state.searchQuery.trim().toLowerCase();
    if (!this.state.data.has(query)) {
      alert("No mathing data in the database now! Please try another query!");
    } else {
      const infoArray = this.state.data.get(query);
      this.setState({ searchResults: infoArray });
    }
  }

  handleChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    return (
      <div className="home">
        <div className="title"> 
          <h2> ACME Search </h2>
        </div>
        <Form>
          <Form.Field>
            <input
              className="searchInput"
              id="input"
              placeholder="Please input your search query here"
              type="text"
              name="searchQuery"
              value={this.state.searchQuery}
              onChange={this.handleChange}
            />

            <Button
              className="searchInput"
              id="inputBtn"
              type="submit"
              onClick={() => this.onSearchPress()}
            >
              Search
            </Button>
          </Form.Field>
        </Form>
        <div className="searchResults">
          <List>
            {this.state.searchResults.map(function(resultInfo, index){
              return (
                <List.Item key={index}>
                  <ResultInfo resultInfo={resultInfo}/>
                </List.Item>
              );
            })}
          </List>
        </div>
      </div>
    );
  }
}

export default SearchHome;