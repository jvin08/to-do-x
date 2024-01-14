import { Link } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { useTodo } from "../contexts/todoContext";
import styled from "styled-components";
import SearchForm from "../components/SearchForm";
import SortSelect from "../components/SortSelect";
import FilterSelect from "../components/FilterSelect";
import CustomButton from "../components/CustomButton";
import PowerMode from "../components/PowerMode";
import AnimatedTodos from "../components/AnimatedTodos";

const Container = styled.div`
  width: 480px;
`;
const ButtonsBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
  width: 100%;
`;
const buttonStyle = {
  background: "rgb(13, 153, 255)",
  color: "white",
  width: "calc(480px * 0.45)"
};

type UseTodo = {
  todos: any[];
  getFilteredTodos: (todos: any[]) => any[];
  searchTodos: (todos: any[]) => any[];
  sortTodos: (todos: any[]) => any[];
  handlePowerMode: () => any[];
  powerMode: boolean;
  search: string;
  filters: any;
  sortType: string;
};

const Todos = () => {
  const {
    todos,
    getFilteredTodos,
    searchTodos,
    sortTodos,
    handlePowerMode,
    powerMode,
    search,
    filters,
    sortType
  } = useTodo() as UseTodo;
  const [todosToRender, setTodosToRender] = useState(todos);

  useMemo(() => {
    setTodosToRender(searchTodos(todos));
  }, [search]);
  useMemo(() => {
    setTodosToRender(getFilteredTodos(todos));
  }, [filters]);
  useMemo(() => {
    setTodosToRender(sortTodos(todos));
  }, [sortType]);
  useMemo(() => {
    setTodosToRender(powerMode ? handlePowerMode() : todos);
  }, [powerMode]);

  const noTodos = !!todosToRender;

  return (
    <Container>
      <SearchForm />
      <ButtonsBox>
        <SortSelect />
        <PowerMode />
        <FilterSelect />
      </ButtonsBox>
      <ButtonBox>
        <Link to="/newTodo">
          <CustomButton name="+ Add New Task" {...buttonStyle} />
        </Link>
      </ButtonBox>
      {noTodos && <AnimatedTodos todos={todosToRender} />}
    </Container>
  );
};

export default Todos;
