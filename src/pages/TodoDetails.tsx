import { useParams, Link } from "react-router-dom";
import { useTodo } from "../contexts/todoContext";
import { IoMdArrowBack } from "react-icons/io";

import TodoTracker from "../components/TodoTracker";
import {
  Container,
  Title,
  Header,
  linkStyle,
  arrowStyle,
  editLinkStyle,
  StyledEditIcon
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
  percent: number;
};
type CheckItem = {
  id: string;
  name: string;
  isCompleted: boolean;
};

function TodoDetails() {
  const { id } = useParams();
  const { getTodo } = useTodo();
  const todo = getTodo(id) as Todo | undefined;
  if (!todo) return <div>No todo found</div>;

  return (
    <Container>
      <Header>
        <Link to="/" style={linkStyle}>
          <IoMdArrowBack style={arrowStyle} />
        </Link>
        <Title>Task Details</Title>
        <Link to={`/todoEdit/${todo.id}`} style={editLinkStyle}>
          <StyledEditIcon />
        </Link>
      </Header>
      <TodoTracker todo={todo} />
    </Container>
  );
}

export default TodoDetails;
