import { Link, useParams } from "react-router-dom";
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

const FormNewTodo: FC = () => {
  const todo = undefined;
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
