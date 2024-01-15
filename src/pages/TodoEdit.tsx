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

const TodoEdit: FC = () => {
  const { id } = useParams<Params>();
  const { getTodo } = useTodo();
  const todo = getTodo(id);
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
