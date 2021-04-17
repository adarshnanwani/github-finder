import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ showClear, clearUsers, setAlert, searchUsers }) => {
  const [text, setText] = useState('');

  const onChangeInput = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
      return;
    }
    searchUsers(text);
    setText('');
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          value={text}
          onChange={onChangeInput}
          placeholder='Search Users...'
        />
        <input type='submit' name='Search' className='btn btn-dark btn-block' />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
