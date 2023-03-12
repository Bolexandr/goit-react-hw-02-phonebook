import PropTypes from 'prop-types';
import Card from 'components/Card/';
import { List } from './ContactList.styled';

const ContactsList = ({ data, onDelHendler }) => {
  return (
    <List>
      {data.map(({ number, name, id }) => (
        <li key={id}>
          <Card
            id={id}
            name={name}
            number={number}
            onDelHendler={onDelHendler}
          ></Card>
        </li>
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  data: PropTypes.array,
  onDelHendler: PropTypes.func,
};
export default ContactsList;
