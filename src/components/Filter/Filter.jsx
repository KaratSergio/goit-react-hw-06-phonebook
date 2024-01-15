import PropTypes from 'prop-types';
import css from './Filter.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/contacts';

import Input from '../Input/Input';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.contacts.filter);

  const handleFilterChange = (e) => {
    dispatch(updateFilter(e.target.value));
  };

  <Input
    inputClass={css['name-input']}
    labelClass={css['name-label']}
    type="text"
    label="Find contacts by name"
    inputName="filter"
    value={value}
    onChange={handleFilterChange}
    required
  />
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
