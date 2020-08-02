import React from 'react';
import {
  Search,
  SearchContainer,
  SearchBtn
} from './search.style'
import { Search as SearchIcon } from 'baseui/icon'

function SearchBox() {
  return (
    <SearchContainer>
      <Search placeholder="Search here..." />
      <SearchBtn placeholder="Search here...">
        <SearchIcon />
      </SearchBtn>
    </SearchContainer>
  )
}

export default SearchBox
