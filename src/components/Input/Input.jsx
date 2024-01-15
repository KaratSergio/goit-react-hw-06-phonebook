import PropTypes from 'prop-types';
import css from './Input.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/contacts';

const Input = ({
  type,
  label,
  inputName,
  required,
  inputClass,
  labelClass,
}) => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts.filter);

  const handleChange = event => {
    const newValue = event.target.value;
    dispatch(updateFilter(newValue));
  };

  return (
    <label className={`${css['input-label']} ${labelClass}`}>
      {label}
      <input
        className={`${css['input']} ${inputClass}`}
        type={type}
        name={inputName}
        value={value}
        onChange={handleChange}
        required={required}
      />
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  required: PropTypes.bool,
  inputClass: PropTypes.string,
  labelClass: PropTypes.string,
};

export default Input;
