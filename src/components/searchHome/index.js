import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react';
import './searchHome.css';
import Data from '../../util/getDataSource';

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
    console.log('value:', this.state.data);

    // for(let [key, value] of this.state.data) {
    //   console.log(`${key} = ${value}`);
    //   for (let i of value) {
    //     console.log('value:', i.title);
    //   }
    // }
  }

  // componentWillMount() { 
  //   axios.get('./data/calendar.json') // JSON File Path 
  //     .then( response => {
  //       console.log(response.data[Object.keys(response.data)[0]]);

  //       const map = new Map();

  //       const resData = response.data[Object.keys(response.data)[0]];

  //       for (let info of resData) {
  //         const matchingTerms = info.matching_terms;
    
  //         for (let term of matchingTerms) {
  //           if (!map.has(term)) {
  //             const infoArray = [];
  //             map.set(term, infoArray);
  //           }
      
  //           map.get(term).push(info);
  //         }
  //       }

  //       for(let [key, value] of map) {
  //         console.log(`${key} = ${value}`);
  //         for (let i of value) {
  //           console.log('value:', i.title);
  //         }
  //       }
        
  //       this.setState({ data: response.calendar });
  //   }) 
  //   .catch(function (error) { 
  //     console.log(error); 
  //   });
  // }

  onSearchPress() {
    const query = this.state.searchQuery.toLowerCase();
    if (!this.state.data.has(query)) {
      alert("No mathing data in the database now! Please try another query!");
    } else {
      const infoArray = this.state.data.get(query);
      this.setState({ searchResults: infoArray });
      console.log('searchResults', infoArray);
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
      </div>
    );
  }
}

export default SearchHome;