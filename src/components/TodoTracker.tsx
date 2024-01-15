import { useTodo } from "../contexts/todoContext";
import CustomButton from "./CustomButton";
import { FaRegTrashAlt, FaRedo } from "react-icons/fa";
import {
  Container,
  Header,
  Label,
  Name,
  TaskData,
  ContentBox,
  Text,
  iconStyle,
  BoldText,
  StatusBox,
  StatusText,
  StatusLevel,
  BarBox,
  Bar,
  Main,
  CheckList,
  CheckItem,
  Check,
  RepeatBtnStyle,
  DeleteBtnStyle,
  TimeSpan
} from "./TodoTracker.styles";
import { FaRegCalendar, FaArrowUp, FaCheck } from "react-icons/fa";
import { IoIosMove } from "react-icons/io";


type Todo = {
    name: string;
    priority: number;
    complexity: number;
    date: string;
    time: string;
    checkList: CheckItem[];
    tags: string;
    percent: number;
    isCompleted: boolean;
    id: string;
  };
  
  type CheckItem = {
    name: string;
    id: string;
    isCompleted: boolean;
  };

const TodoTracker = ({ todo }: { todo: Todo }) => {
  const {
    getLevelText,
    handleCheck,
    resetStatus,
    removeTodo,
    dueDateColor,
    dateStyle
  } = useTodo();
  const nameToShow =
    todo.name.length > 30 ? todo.name.slice(0, 30) + "..." : todo.name;
  const priorityText = getLevelText(todo.priority);
  const complexityText = getLevelText(todo.complexity);
  const dueColor = dueDateColor(todo);
  const date = dateStyle(todo);
  return (
    <Container>
      <Main>
        <Header>
          <Label style={{ background: dueColor }}></Label>
          <Name>{nameToShow}</Name>
        </Header>
        <TaskData>
          <ContentBox>
            <FaRegCalendar style={iconStyle} />
            <Text>
              Due date: <TimeSpan style={{ color: dueColor }}>{date}</TimeSpan>
            </Text>
          </ContentBox>
          <ContentBox>
            <FaArrowUp style={iconStyle} />
            <Text>
              Priority: <BoldText>{priorityText}</BoldText>
            </Text>
          </ContentBox>
          <ContentBox>
            <IoIosMove style={iconStyle} />
            <Text>
              Complexity: <BoldText>{complexityText}</BoldText>
            </Text>
          </ContentBox>
          <StatusBox>
            <StatusText>
              <BoldText>Task Complete</BoldText>
              <StatusLevel style={{ color: dueColor }}>
                {todo.percent}%
              </StatusLevel>
            </StatusText>
            <BarBox>
              <Bar
                style={{
                  background: dueColor,
                  width: `${todo.percent}%`
                }}
              ></Bar>
            </BarBox>
          </StatusBox>
        </TaskData>
      </Main>
      <CheckList>
        <BoldText>Checklist for Subtasks</BoldText>
        {todo.checkList.map((item) => {
          return (
            <CheckItem
              key={item.id}
              onClick={(e) => handleCheck(e, todo)}
              data-check={item.id}
            >
              <Text>{item.name}</Text>
              <Check
                style={{
                  color: item.isCompleted ? "black" : "",
                  background: item.isCompleted ? "#ade8ff" : ""
                }}
              >
                <FaCheck />
              </Check>
            </CheckItem>
          );
        })}
      </CheckList>
      <CustomButton
        icon={
          <FaRedo
            style={{
              position: "absolute",
              top: "0.9rem",
              left: "15%",
              color: "white",
              fontSize: "1.5rem"
            }}
          />
        }
        {...RepeatBtnStyle}
        handleClick={(e) => resetStatus(e, todo)}
      />
      <CustomButton
        icon={
          <FaRegTrashAlt
            style={{
              position: "absolute",
              top: "0.9rem",
              left: "15%",
              fontSize: "1.5rem"
            }}
          />
        }
        {...DeleteBtnStyle}
        handleClick={(e) => removeTodo(e, todo)}
      />
    </Container>
  );
};

export default TodoTracker;
