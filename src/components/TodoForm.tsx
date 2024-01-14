import { useState, FormEvent, ChangeEvent, MouseEvent } from "react";
import { useTodo } from "../contexts/todoContext";
import SelectLevels from "./SelectLevels";
import CustomTitle from "./CustomTitle";
import CustomButton from "./CustomButton";
import { uid } from "uid";
import {
  Input,
  Button,
  SubBoxRight,
  SubBoxLeft,
  TimeBox,
  CheckForm,
  ButtonStyle,
  AddTasksBox,
  selectStyle
} from "./TodoForm.styles";
import CheckListForm from "./CheckListForm";

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

type UseTodo = {
  handleTodo: (todo: Todo) => void;
};

function TodoForm({ todo }: { todo: Todo }) {

  const { handleTodo } = useTodo() as UseTodo;
  const id = todo?.id || uid(6);
  const isCompleted = todo?.isCompleted || false;
  const percent = todo?.percent || 0;
  const [name, setName] = useState(todo?.name || "");
  const [priority, setPriority] = useState(todo?.priority || 1);
  const [complexity, setComplexity] = useState(todo?.complexity || 1);
  const [date, setDate] = useState(
    todo?.date || new Date().toISOString().slice(0, 10)
  );
  const [time, setTime] = useState(todo?.time || "09:01");
  const [checkList, setCheckList] = useState(todo?.checkList || []);
  const [checkListValue, setCheckListValue] = useState("");
  const [tags, setTagValue] = useState(todo?.tags || "");

  const handleClick = () => {
    if (!name) return;
    handleTodo({
      id,
      isCompleted,
      percent,
      name,
      complexity,
      date,
      time,
      priority,
      tags,
      checkList
    });
  };
  
  const handlePriority = (value: string) => {
    setPriority(Number(value));
  };
  const handleComplexity = (value: string) => {
    setComplexity(Number(value));
  };
  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDate(e.target.value);
  };
  const handleTime = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTime(e.target.value);
  };
  const handleCheckList = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const checkItem = {
      name: checkListValue,
      id: uid(4),
      isCompleted: false
    };
    const newCheckList = [...checkList, checkItem];

    setCheckList(newCheckList);
    setCheckListValue("");
  };
  const deleteCheckItem = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = (e.target as HTMLButtonElement).dataset.delete;
    const newCheckList = checkList.filter((item) => item.id !== id);
    setCheckList(newCheckList);
  };
  const updateCheckList = (id: string, value: string) => {
    const newCheckList = checkList.map((item) => {
      if (item.id === id) {
        item.name = value;
        return item;
      }
      return item;
    });
    setCheckList(newCheckList);
  };

  return (
    <AddTasksBox>
      <CustomTitle name="Task Name" />
      <Input
        type="text"
        className="input"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        placeholder="Name of Task"
      />
      <SelectLevels
        name="Set Priority Level"
        eventHandler={handlePriority}
        currentLevel={priority}
      />
      <SelectLevels
        name="Set Complexity Level"
        currentLevel={complexity}
        eventHandler={handleComplexity}
      />
      <TimeBox>
        <SubBoxLeft>
          <CustomTitle name="Select Due Date" />
          <Input
            type="date"
            value={date}
            onChange={handleDate}
            style={selectStyle}
          />
        </SubBoxLeft>
        <SubBoxRight>
          <CustomTitle name="Select Due Time" />
          <Input
            onChange={handleTime}
            type="time"
            value={time}
            style={selectStyle}
          />
        </SubBoxRight>
      </TimeBox>
      <CustomTitle name="Add Checklist" />
      <CheckForm onSubmit={handleCheckList}>
        <Input
          type="text"
          className="input"
          value={checkListValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCheckListValue(e.target.value)
          }
          placeholder="Add Item..."
        />
        <Button type="submit">
          +
        </Button>
      </CheckForm>
      {checkList.map((item) => {
        return (
          <CheckListForm
            key={item.id}
            id={item.id}
            value={item.name}
            deleteCheckItem={deleteCheckItem}
            updateCheckList={updateCheckList}
          />
        );
      })}
      <CustomTitle name="Add Tags" />
      <Input
        type="text"
        className="input"
        value={tags}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTagValue(e.target.value)
        }
        placeholder="Tag 1, Tag 2, Tag 3..."
      />
      <CustomButton
        name="Save Task"
        {...ButtonStyle}
        handleClick={() => handleClick()}
      />
    </AddTasksBox>
  );
}

export default TodoForm;
