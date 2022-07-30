import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import debounce from 'lodash.debounce';
import {resetSearch, searchUsers, setSearchString} from "../store/SearchSlice";

const SearchInput = () => {
  const dispatch = useDispatch();
  const {searchString} = useSelector(state => state.search);

  const input = useRef(null);

  const setString = (val) => {
    val.length > 3
      ? dispatch(setSearchString(val))
      : dispatch(setSearchString(''));
  }

  const handleSearch = debounce(setString, 300);

  const handleReset = () => {
    dispatch(resetSearch());
    input.current.value = '';
  };

  useEffect(() => {
    if (searchString.length) {
      dispatch(searchUsers(searchString));
      input.current.value = searchString;
    } else {
      dispatch(resetSearch());
    }
  }, [searchString]);


  return (
    <section className='flex gap-4'>
      <input
        className='w-4/5 p-2 rounded outline-none focus:drop-shadow-md text-lg'
        type="text"
        placeholder='Input username...'
        onChange={ev => handleSearch(ev.target.value)}
        ref={input}
      />
      <button
        className='w-1/5 rounded border border-purple-900 text-lg hover:border-white hover:text-white hover:bg-purple-900'
        onClick={handleReset}
      >Reset</button>
    </section>
  );
};

export default SearchInput;