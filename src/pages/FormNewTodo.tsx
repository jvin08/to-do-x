import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import TodoForm from "../components/TodoForm";
import { FC } from "react";

import {
  Container,
  Title,
  Header,
  linkStyle,
  arrowStyle
} from "../components/Pages.styles";
import { uid } from "uid";


const FormNewTodo: FC = () => {
  const todo  = {
    name: '',
    priority: 0,
    complexity: 0,
    date: new Date().toISOString().slice(0, 10),
    time: '09:01',
    checkList: [],
    tags: '',
    percent: 0,
    isCompleted: false,
    id: uid(6),
  };

  return (
    <Container>
      <Header>
        <Link to="/" style={linkStyle}>
          <IoMdArrowBack style={arrowStyle} />
        </Link>
        <Title>Add New Task</Title>
      </Header>
      <TodoForm todo={todo} />
    </Container>
  );
};

export default FormNewTodo;
