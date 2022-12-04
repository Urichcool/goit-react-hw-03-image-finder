import { ImageGalleryListItem, ImageGalleryListImg } from "./ImageGallery.styled";



export const ImageGalleryItem = ({ smallImg }) => {
    return (
      <ImageGalleryListItem>
        <ImageGalleryListImg src={smallImg}></ImageGalleryListImg>
      </ImageGalleryListItem>
    );
        
    }



