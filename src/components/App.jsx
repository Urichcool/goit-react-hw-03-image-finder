import { Component } from "react";
import { SearchBar } from "./Searchbar/Searchbar";
import { AppContainer } from "./App.styled";


export class App extends Component {
  render() {
    return (
      <AppContainer>
        <SearchBar />
      </AppContainer>
    );
  }
};
