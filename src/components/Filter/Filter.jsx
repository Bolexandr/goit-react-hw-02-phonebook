import PropTypes from 'prop-types';
import { FilterForm, Label, Input } from './Filter.styled';
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
