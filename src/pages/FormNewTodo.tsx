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
type Todo = {
    id: string;
    title: string;
    isCompleted: boolean;
    name: string;
    priority: number;
    complexity: number;
    date: string;
    time: string;
    checkList: CheckItem[];
    tags: string;
    [key: string]: any;
  };
  
  type CheckItem = {
    id: string;
    name: string;
    isCompleted: boolean;
  };

const FormNewTodo: FC = () => {
  const todo = {};
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
