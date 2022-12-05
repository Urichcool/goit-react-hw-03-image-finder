import { Component } from "react";
import { SearchBar } from "./Searchbar/Searchbar";
import { AppContainer } from "./App.styled";
import { ImageGallery } from "./ImageGallery/ImageGallery";


export class App extends Component {
  state = {
    imgName: '',
    images: [],
    page: 1,
  };

  imagesHandler = data => {
    this.setState(prevState => ({
      images: [...prevState.images, ...data.hits],
    }));
  };

  handleFormSubmit = imgName => {
    this.setState({
      imgName: imgName,
      images: [],
      page: 1 
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <AppContainer>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          imgName={this.state.imgName}
          images={this.state.images}
          imagesHandler={this.imagesHandler}
          page={this.state.page}
          loadMore={this.loadMore}
        />
      </AppContainer>
    );
  }
};
