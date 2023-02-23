import Button from "../Button";
import s from "./Form.module.css";

const Form = ({ name, number, handleChange, hendleSubmit, text }) => {
  return (
    <form className={s.form} onSubmit={hendleSubmit}>
      <input
        className={s.input}
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <input
        className={s.input}
        type="tel"
        name="number"
        placeholder="Number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit" id="create" text={text} onClick={hendleSubmit} />
    </form>
  );
};

export default Form;
