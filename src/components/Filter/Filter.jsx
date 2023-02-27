import styled from 'styled-components';
import PropTypes from 'prop-types';

const FilterForm = styled.form`
  padding: 5px;
  color: green;
  display: flex;
  align-items: center;
  padding: 30px;
  border: 1.5px solid lightblue;
  border-radius: 9px;
  background-color: gold;
  max-width: 700px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
`;
const Label = styled.label`
  font-weight: bold;
  font-size: 25px;
`;
const Input = styled.input`
  height: 30px;
  border-radius: 5px;
  margin-left: 200px;
`;
const Filter = ({ onFilterChange }) => (
  <FilterForm>
    <Label htmlFor="Filter">Find contats by name</Label>
    <Input
      placeholder="Pleace input name to search"
      id="Filter"
      type="text"
      onChange={onFilterChange}
    />
  </FilterForm>
);

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
