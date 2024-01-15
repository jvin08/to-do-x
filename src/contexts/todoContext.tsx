
import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
  MouseEvent
} from "react";
import { useNavigate } from "react-router-dom";
export const TodoContext = createContext<TodoContextValue>(
  {} as TodoContextValue
);

export function useTodo() {
  const value = useContext(TodoContext);
  return value;
}

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
type TodoContextValue = {
  todos: Todo[];
  sortType: string;
  filters: Filter[];
  search: string;
  powerMode: boolean;
  getTodo(id: string): Todo;
  handlePowerMode(): Todo[] | undefined;
  generateFilters: (prevTodos: Todo[]) => Filter[];
  getFilteredTodos: (todosArr: Todo[]) => Todo[];
  getLevelText: (level: number) => string;
  handleFilter: (filterName: string) => void;
  handleSortType: (sortName: string) => void;
  sortTodos: (todos: Todo[]) => Todo[];
  searchTodos: () => Todo[];
  handleTodo: (todo: Todo) => void;
  handleSearch: (searchTerm: string) => void;
  completeTodo: (id: string) => void;
  dueDateColor: (todo: Todo) => string;
  dateStyle: (todo: Todo) => string;
  removeTodo: (
    e: MouseEvent,
    todo: Todo
  ) => void;
  handleCheck: (e: MouseEvent, todo: Todo) => void;
  resetStatus: (e: MouseEvent, todo: Todo) => void;
  getTodoStore: () => void;
  togglePowerMode: () => void;
};

type Filter = {
  name: string;
  checked: boolean;
};

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState(
    JSON.parse(window.localStorage.getItem("todos") || "[]") || []
  );
  const [sortType, setSortType] = useState("Default");
  const [filters, setFilters] = useState(generateFilters(todos));
  const [search, setSearch] = useState("");
  const [powerMode, setPowerMode] = useState(false);
  const navigate = useNavigate();

  function generateFilters(prevTodos: Todo[]) {
    const allFilters = prevTodos.map((t) => {
      return { name: t.tags, checked: false };
    });
    return allFilters;
  }
  const getFilteredTodos = (todosArr: Todo[]) => {
    const checkedFilters = filters.filter((f) => f.checked).map((f) => f.name);
    return checkedFilters.length
      ? todosArr.filter((todo) => checkedFilters.includes(todo.tags))
      : todosArr;
  };

  const getLevelText = (level: number) => {
    if (Number(level) > 6) {
      return `High (${Number(level)}/10)`;
    } else if (Number(level) > 4) {
      return `Moderate(${Number(level)}/10)`;
    } else {
      return `Low(${Number(level)}/10)`;
    }
  };

  const handleFilter = (filterName: string) => {
    const updatedFilters = filters.map((f) =>
      f.name === filterName ? { ...f, checked: !f.checked } : f
    );
    setFilters(updatedFilters);
  };

  const handleSortType = (sortName: string) => {
    setSortType(sortName);
  };

  const toDate = (value: string) => Number(new Date(value));

  const sortTodos = (todos: Todo[]) => {
    const nextTodos = [...todos];
    const [sortDirection, value] = sortType.split(" ");

    if (sortDirection === "Ascending") {
      return nextTodos.sort((a, b) => {
        return toDate(a[value]) - toDate(b[value])
    }); 
    } else if (sortDirection === "Descending") {
      return nextTodos.sort((a, b) => toDate(b[value]) - toDate(a[value]));
    } else {
      return todos;
    }
  };

  const handleTodo = ({
    id,
    name,
    complexity,
    date,
    time,
    priority,
    tags,
    checkList,
    isCompleted,
    percent
  }: Todo) => {
    const updatedTodo = {
      id,
      name,
      isCompleted,
      percent,
      complexity,
      date,
      time,
      priority,
      tags,
      checkList
    };

    const oldTodos = todos.filter((t: Todo) => t.id !== updatedTodo.id) || todos;
    const updatedTodos = [...oldTodos, updatedTodo];
    setTodos(updatedTodos);
    updateTodoStore(updatedTodos);
    navigate("/");
  };
  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm);
  };
  const completeTodo = (id: string) => {
    const updatedTodos = todos.map((t: Todo) =>
      t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTodos(updatedTodos);
    updateTodoStore(updatedTodos);
  };
  const dueDateColor = (todo: Todo) => {
    const time = {
      threeDays: 259200000,
      oneDay: 86400000
    };
    const timeRemained =
      Number(new Date(todo.date + " " + todo.time)) - Number(new Date());
    if (timeRemained > time.threeDays) return "RoyalBlue";
    else if (timeRemained > time.oneDay) return "Orange";
    else return "OrangeRed";
  };
  const dateStyle = (todo: Todo) => {
    const date = new Date(todo.date + " " + todo.time);

    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true
    });
  };
  const removeTodo = (e: MouseEvent, todo: Todo) => {
    e.preventDefault()
    const updatedTodos = todos.filter((t: Todo) => t.id !== todo.id);
    setTodos(updatedTodos);
    updateTodoStore(updatedTodos);
    navigate("/");
  };
  const handleCheck = (e: MouseEvent, todoOld: Todo) => {
    e.preventDefault();
    interface DataElement extends Element {
      dataset: DOMStringMap;
    }
    const commonAncestor = e.currentTarget.closest(
      "[data-check]"
    ) as DataElement;
    const checkId = commonAncestor.dataset.check;
    if(checkId){
        const updatedTodo = updateTodoCheckList(todoOld, checkId);
        updatedTodo.percent = calculatePercent(updatedTodo);
        const updatedTodos = todos.filter((todo: Todo) => todo.id !== todoOld.id);
        setTodos([...updatedTodos, updatedTodo]);
        updateTodoStore([...updatedTodos, updatedTodo]);
    }
  };

  const calculatePercent = ({ checkList }: { checkList: CheckItem[] }) => {
    if (!checkList.length) {
      return 0;
    } else {
      let percent = 0;
      const oneItemPercentage = checkList.length ? 100 / checkList.length : 0;
      for (let i = 0; i < checkList.length; i++) {
        if (checkList[i].isCompleted) {
          percent += oneItemPercentage;
        }
      }
      return Math.round(percent);
    }
  };
  const getTodo = (id: string): Todo  => {
    return todos.find((todo: Todo) => todo.id === id);
  };

  const resetStatus = (e: MouseEvent, todo: Todo) => {
    e.preventDefault();
    const resetCheckListStatus = todo.checkList.map((item) => {
      item.isCompleted = false;
      return item;
    });
    todo.checkList = resetCheckListStatus;
    todo.percent = 0;
    const updatedTodos = todos.filter((t: Todo) => t.id !== todo.id);
    setTodos([...updatedTodos, todo]);
    updateTodoStore([...updatedTodos, todo]);
  };

  const updateTodoCheckList = (todo: Todo, id: string) => {
    const todoCopy = todo;
    const updatedTodoCheckList = todoCopy.checkList.map((item) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    todoCopy.checkList = updatedTodoCheckList;
    return todoCopy;
  };

  const searchTodos = () => {
    if (!search) {
      return todos;
    } else {
      return todos.filter((todo: Todo) => todo.name.includes(search));
    }
  };
  const togglePowerMode = () => {
    todos.length > 1 && setPowerMode((prev) => !prev);
  };
  const handlePowerMode = () => {
    let firstTodo: Todo | undefined;
    let biggestScore = 0;
    todos.forEach((t: Todo) => {
      if (t.priority + t.complexity > biggestScore) {
        firstTodo = t;
        biggestScore = t.priority + t.complexity;
      }
    });
    return firstTodo ? [firstTodo] : [];
  };

  const updateTodoStore = (todos: Todo[]) => {
    window.localStorage.removeItem("todos");
    window.localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getTodoStore = () => {
    setTodos(JSON.parse(window.localStorage.getItem("todos") || "[]") || []);
  };

  useEffect(() => {
    setFilters(generateFilters(todos));
  }, [todos]);

  const value: TodoContextValue = {
    todos,
    generateFilters,
    completeTodo,
    removeTodo,
    getTodo,
    searchTodos,
    handleSortType,
    search,
    filters,
    handleFilter,
    handleTodo,
    getLevelText,
    handleCheck,
    resetStatus,
    dueDateColor,
    dateStyle,
    getFilteredTodos,
    getTodoStore,
    handleSearch,
    sortTodos,
    sortType,
    handlePowerMode,
    powerMode,
    togglePowerMode
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
