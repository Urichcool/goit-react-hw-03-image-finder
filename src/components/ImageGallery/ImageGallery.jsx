import { Component } from "react"
import { ImageGalleryList } from "./ImageGallery.styled"
import { ImageGalleryItem } from "./ImageGalleryItem"
import { Loader } from "./Loader";



let page = 1;

export class ImageGallery extends Component {
    state = {
        images: null,
        loading: false
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.imgName !== this.props.imgName) {
            page = 1
            this.setState({loading: true})
            fetch(`https://pixabay.com/api/?q=${this.props.imgName}&page=${page}&key=30483075-32508e0f0aa6f1eedcbd37828&image_type=photo&orientation=horizontal&per_page=20`)
                .then(res => res.json()
                    .then(images => this.setState({ images }))
                    .finally(this.setState({ loading: false})));
    }}

    render() {
        return (
          <div>
            {this.state.loading && <Loader/>}
            <ImageGalleryList>
              {this.state.images &&
                this.state.images.hits.map(img => {
                  return (
                    <ImageGalleryItem
                      key={img.id}
                      smallImg={img.webformatURL}
                    />
                  );
                })}
            </ImageGalleryList>
          </div>
        );
    }
}