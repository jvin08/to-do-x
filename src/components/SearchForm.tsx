import { useState, FormEvent, MouseEvent } from "react";
import { useTodo } from "../contexts/todoContext";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

const InputSearch = styled.input`
  width: 480px;
  padding: 1rem;
  padding-left: 3rem;
  border-radius: 1.5rem;
  border: none;
  margin: 2rem auto 2rem;
  outline: none;
  border: 1px solid lightgrey;
`;
const Form = styled.form`
  position: relative;
`;
const StyledSearchIcon = styled(IoIosSearch)`
  position: absolute;
  top: 2.9rem;
  left: 1.1rem;
  font-size: 1.5rem;
`;
const StyledArrowIcon = styled(IoMdArrowForward)`
  position: absolute;
  top: 2.6rem;
  left: 27.5rem;
  font-size: 1rem;
  background: #ade8ff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`;

type UseTodo = {
  todos: any[];
  handleSearch: (value: string) => void;
};

function SearchForm() {
  const [value, setValue] = useState("");
  const { todos, handleSearch } = useTodo() as UseTodo;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(value);
    setValue("");
  };
  const handleClick = () => {
    handleSearch(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledSearchIcon />
      <InputSearch
        type="text"
        className="input"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <StyledArrowIcon onClick={handleClick} />
    </Form>
  );
}

export default SearchForm;
