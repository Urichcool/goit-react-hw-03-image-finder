import { Component } from "react";
import {
    SearchBarContainer,
    SearchBarForm,
    SearchBarButton,
    SearchBarLabel,
    SearchBarInput
} from "./Searchbar.styled";

export class SearchBar extends Component{
    state = {
        imgName: '',
    }

    handleNameChange = e => {
        this.setState({imgName: e.currentTarget.value.toLowerCase().trim()})
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.imgName === '') {
            return
        }
        this.props.onSubmit(this.state.imgName)
    }

    render() {
      return <SearchBarContainer>
            <SearchBarForm onSubmit={this.handleSubmit}>
                <SearchBarButton type="submit">
                    <SearchBarLabel>Search</SearchBarLabel>
                </SearchBarButton>

                <SearchBarInput
                    type="text"
                  autoComplete="off"
                  name="imgName"
                  value={this.state.imgName}
                  onChange={this.handleNameChange}
                    autoFocus
                    placeholder="Search images and photos"
                />
            </SearchBarForm>
        </SearchBarContainer>
            ;
    }
}