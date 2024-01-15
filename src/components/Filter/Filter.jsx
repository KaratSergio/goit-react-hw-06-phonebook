import PropTypes from 'prop-types';
import css from './Filter.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts';

import Input from '../Input/Input';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.phonebook.filter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  <Input
    inputClass={css['name-input']}
    labelClass={css['name-label']}
    type="text"
    label="Find contacts by name"
    inputName="filter"
    value={filter}
    onChange={handleFilterChange}
    required
  />
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
