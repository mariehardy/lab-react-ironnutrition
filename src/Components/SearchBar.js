import React from 'react';

// controlled component  (state is defined in another componenent)
function SearchBar(props) {
  let searchHandler = (event) => {
    let inputValue = event.target.value;

    props.onSearchCallBack(inputValue); // Lifting the state up
  };

  return (
    <input
      placeholder="Search"
      onChange={searchHandler}
      value={props.currentSearchTerm}
     />
  );
}

export default SearchBar;
