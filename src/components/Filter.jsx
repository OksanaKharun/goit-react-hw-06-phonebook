import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../redux/FilterSlice';

const Filter = function () {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <label className="filter">
      Filter contacts by name
      <input type="text" value={filter} onChange={e => dispatch(addFilter(e.currentTarget.value))} />
    </label>
  );
};

export default Filter;