import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

import css from './ContactForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faCheck } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input/Input';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = e.target.elements;

    dispatch(addContact({ name: name.value, number: number.value }));

    e.target.reset();
  };

  return (
    <form className={css['form-container']} onSubmit={handleSubmit}>
      <Input
        inputClass={css['name-input']}
        labelClass={css['name-label']}
        type="text"
        label={
          <span className={css['label-box']}>
            <FontAwesomeIcon icon={faUser} className={css['icon-input']} />
            Name
          </span>
        }
        inputName="name"
        placeholder="Enter name"
        required
      />
      <Input
        inputClass={css['tel-input']}
        labelClass={css['tel-label']}
        type="tel"
        label={
          <span className={css['label-box']}>
            <FontAwesomeIcon icon={faPhone} className={css['icon-input']} />
            Number
          </span>
        }
        inputName="number"
        placeholder="Enter phone number"
        required
      />
      <button className={css['button']} type="submit">
        <FontAwesomeIcon icon={faCheck} className={css['iconBtn']} />
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
