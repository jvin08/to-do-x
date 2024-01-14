import { useState, ChangeEvent } from "react";
import { useTodo } from "../contexts/todoContext";
import styled from "styled-components";
import CustomButton from "./CustomButton";

const SortTypes = styled.div`
  position: relative;
  width: calc(480px * 0.3);
`;
const RadioBox = styled.div`
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
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background: #f6f6f6;
  }
`;
const Label = styled.label`
  width: 80%;
`;

type UseTodo = {
  handleSortType: (sortType: string) => void;
};

const SortSelect = () => {
  const [sortHidden, setSortHidden] = useState(true);
  const { handleSortType } = useTodo() as UseTodo;

  const sortTypes = [
    "Default",
    "Ascending date",
    "Descending date",
    "Ascending complexity",
    "Descending complexity",
    "Ascending priority",
    "Descending priority"
  ];

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    const sortType = e.target.value;
    handleSortType(sortType);
  };
  const toggleSort = () => {
    setSortHidden((prevSort) => !prevSort);
  };
  return (
    <SortTypes>
      <CustomButton handleClick={toggleSort} name="Sort" />
      <RadioBox
        style={{ visibility: sortHidden ? "hidden" : "visible" }}
        onChange={handleClick}
      >
        {sortTypes.map((type) => {
          return (
            <InputBox key={type}>
              <Label htmlFor={type}>{type}</Label>
              <input id={type} type="radio" name="sort" value={type} />
            </InputBox>
          );
        })}
      </RadioBox>
    </SortTypes>
  );
};
export default SortSelect;
