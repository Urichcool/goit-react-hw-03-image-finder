import { Component } from "react";
import { SearchBar } from "./Searchbar/Searchbar";
import { AppContainer } from "./App.styled";
import { ImageGallery } from "./ImageGallery/ImageGallery";




export class App extends Component {
  state = {
    imgName: ''
  }
  
  handleFormSubmit = imgName => {
    this.setState({ imgName: imgName })
  }
  
  render() {
    return (
        <AppContainer>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery imgName={this.state.imgName} />
        </AppContainer>
    );
  }
};
