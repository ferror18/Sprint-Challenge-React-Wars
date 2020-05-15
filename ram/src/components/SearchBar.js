import React, {useState, useEffect} from 'react';
import { StyledSearchBar } from "../myStyles";

const SearchBar = (props) => {
    const { updateSearchTerm } = props
    const changeHandler = event => {
        updateSearchTerm(event.target.value)
    }
    return(
        <StyledSearchBar onChange={changeHandler}></StyledSearchBar>
    )
}

export default SearchBar;