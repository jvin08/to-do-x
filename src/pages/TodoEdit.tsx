import { FC } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import TodoForm from "../components/TodoForm";
import { useParams } from "react-router-dom";
import { useTodo } from "../contexts/todoContext";
import {
  Container,
  Header,
  Title,
  linkStyle,
  arrowStyle
} from "../components/Pages.styles";

type Params = {
  id: string;
};

const TodoEdit: FC = () => {
  const { id } = useParams<Params>();
  const todoID = id+''
  const { getTodo } = useTodo();
  const todo = getTodo(todoID);
  return (
    <Container>
      <Header>
        <Link to="/" style={linkStyle}>
          <IoMdArrowBack style={arrowStyle} />
        </Link>
        <Title>Edit Task</Title>
      </Header>
      <TodoForm todo={todo} />
    </Container>
  );
};

export default TodoEdit;
