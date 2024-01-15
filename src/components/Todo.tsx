import { Link } from "react-router-dom";
import { useTodo } from "../contexts/todoContext";
import { MouseEvent } from "react";
import {
  FaRegEdit,
  FaRegCalendar,
  FaArrowUp,
  FaRegListAlt,
  FaCheck
} from "react-icons/fa";
import { IoIosMove } from "react-icons/io";
import ProgressRing from "./ProgressRing";
import {
  Wrapper,
  Container,
  Check,
  Header,
  Label,
  Name,
  Main,
  TaskData,
  ContentBox,
  StatusBar,
  Text,
  linkStyle,
  iconStyle,
  editLinkStyle,
  editIconStyle,
  checkIconStyle,
  detailsIconStyle,
  Tags,
  Tag,
  Span,
  TimeSpan
} from "./Todo.styles";

type Todo = {
    name: string;
    isCompleted: boolean;
    id: string;
    percent: number;
    complexity: number;
    date: string;
    time: string;
    priority: number;
    tags: string;
    checkList: CheckItem[];
    [key: string]: any;
  };
  type CheckItem = {
    name: string;
    id: string;
    isCompleted: boolean;
  };

type UseTodo = {
  completeTodo: (id: string | null) => void;
  getLevelText: (level: number) => string;
  dueDateColor: (todo: Todo) => string;
  dateStyle: (todo: Todo) => string;
};

function Todo({ todo }: { todo: Todo }) {
  const {
    completeTodo,
    getLevelText,
    dueDateColor,
    dateStyle
  } = useTodo() as UseTodo;
  
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const commonAncestor = (e.target as HTMLDivElement).closest("[data-check]");
    completeTodo(
      commonAncestor ? (commonAncestor as HTMLDivElement).dataset.check! : null
    );
  };
  const nameToShow =
    todo.name.length > 30 ? todo.name.slice(0, 30) + "..." : todo.name;
  const priorityText = getLevelText(todo.priority);
  const complexityText = getLevelText(todo.complexity);
  const tags = todo.tags.split(",");
  const dateColor = dueDateColor(todo);
  const date = dateStyle(todo);
  return (
    <Container>
      <Wrapper
        style={{
          backgroundColor: todo.isCompleted ? "#98dbf8" : "",
          transition: "background-color 0.5s"
        }}
      >
        <Header>
          <Label style={{ background: dateColor }}></Label>
          <Name>{nameToShow}</Name>
          <Link to={`/todo/${todo.id}`} style={linkStyle}>
            <Check>
              <FaRegListAlt style={detailsIconStyle} />
            </Check>
          </Link>
          <Link to={`/todoEdit/${todo.id}`} style={editLinkStyle}>
            <FaRegEdit style={editIconStyle} />
          </Link>
          <Check onClick={(e) => handleClick(e)} data-check={todo.id}>
            <FaCheck style={checkIconStyle} />
          </Check>
        </Header>
        <Main>
          <TaskData>
            <ContentBox>
              <FaRegCalendar style={iconStyle} />
              <Text>
                Due date:{" "}
                <TimeSpan style={{ color: dateColor }}>{date}</TimeSpan>
              </Text>
            </ContentBox>
            <ContentBox>
              <FaArrowUp style={iconStyle} />
              <Text>
                Priority:<Span>{priorityText}</Span>
              </Text>
            </ContentBox>
            <ContentBox>
              <IoIosMove style={iconStyle} />
              <Text>
                Complexity:<Span>{complexityText}</Span>
              </Text>
            </ContentBox>
            <Tags>
              {tags.map((tag) => {
                return <Tag key={tag}>{tag}</Tag>;
              })}
            </Tags>
          </TaskData>
          <StatusBar>
            <ProgressRing todo={todo} />
          </StatusBar>
        </Main>
      </Wrapper>
    </Container>
  );
}

export default Todo;
