
import React from 'react';

const SearchFilter = ({ name, onChange }) => {

    return (
        <input className='search-input' type="search"  value={name} onChange={onChange}/>
    );

}
    



export default SearchFilter;