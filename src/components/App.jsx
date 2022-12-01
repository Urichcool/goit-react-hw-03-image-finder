import { Component } from "react";
import { SearchBar } from "./Searchbar/Searchbar";
import { AppContainer } from "./App.styled";



export class App extends Component {
  state = {
    imgName: ''
  }
  
  handleFormSubmit = imgName => {
    this.setState({imgName: imgName})
  }
  
  render() {
    return (
        <AppContainer>
          <SearchBar onSubmit={this.handleFormSubmit} />
        </AppContainer>
    );
  }
};
