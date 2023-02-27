import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from 'components/Card/';

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;
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

// ContactsList.propTypes = {
//   data: PropTypes.shape({
//     map: PropTypes.func,
//   }),
//   onDelHendler: PropTypes.func,
// };
export default ContactsList;
