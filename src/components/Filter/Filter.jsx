import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import css from './Filter.module.css';
import Input from '../Input/Input';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Input
      inputClass={css['name-input']}
      labelClass={css['name-label']}
      type="text"
      label="Find contacts by name"
      inputName="filter"
      value={filterValue || ''}
      onChange={handleFilterChange}
      required
    />
  );
};

export default Filter;
