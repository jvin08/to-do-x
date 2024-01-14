import { useTodo } from "../contexts/todoContext";
import { useState, ChangeEvent } from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";

const FilterTypes = styled.div`
  position: relative;
  width: calc(480px * 0.3);
`;
const FilterBox = styled.div`
  transition: "all 1s";
  position: absolute;
  top: 3.1rem;
  z-index: 11;
  background: white;
  width: 100%;
  box-shadow: 0 0 16px grey;
  border-radius: 0.5rem;
  > *:not(:last-child) {
    border-bottom: 1px solid #c6c6c6;
  }
  > * {
    box-shadow: 0 0 2px #c6c6c6;
  }
`;
const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
  padding: 0.4rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background: #f6f6f6;
  }
`;
const Label = styled.label`
  width: 80%;
`;

type Filter = {
  name: string;
  checked: Boolean;
};

type UseTodo = {
  filters: Filter[];
  handleFilter: (name: string) => void;
};

const FilterSelect = () => {
  const [filterHidden, setFilterHidden] = useState(true);
  const { filters, handleFilter } = useTodo() as UseTodo;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    handleFilter(name);
  };

  const toggleSort = () => {
    setFilterHidden((prevFilter) => {
      return prevFilter === true ? false : true;
    });
  };

  return (
    <FilterTypes>
      <CustomButton handleClick={toggleSort} name="Filter" />
      <FilterBox style={{ visibility: filterHidden ? "hidden" : "visible" }}>
        {filters.map((filter) => {
          return (
            <InputBox key={filter.name}>
              <Label htmlFor={filter.name}>{filter.name}</Label>
              <input
                id={filter.name}
                name={filter.name}
                type="checkbox"
                checked={filter.checked as boolean}
                onChange={handleChange}
              />
            </InputBox>
          );
        })}
      </FilterBox>
    </FilterTypes>
  );
};

export default FilterSelect;
