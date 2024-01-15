import { useState, useEffect } from "react";
import { useTodo } from "../contexts/todoContext";

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

const ProgressRing = ({ todo }: { todo: Todo }) => {
  const { dueDateColor } = useTodo();
  const [offset, setOffset] = useState(100 - (todo.percent as number));
  const percent = todo.percent;

  const circumference = Math.PI * 2 * 27;

  const setProgress = () => {
    setOffset(circumference - ((percent as number) / 100) * circumference);
  };
  useEffect(() => {
    setProgress();
  }, []);
  const dueColor = dueDateColor(todo);
  return (
    <svg width="60" height="60">
      <circle
        stroke={dueColor}
        strokeWidth="4.5"
        fill="transparent"
        r="27"
        cx="-30"
        cy="30"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        transform="rotate(-90)"
        style={{ transition: "1.5s stroke-dashoffset" }}
      />
      <circle
        stroke="lightblue"
        strokeWidth="4.5"
        fill="transparent"
        r="27"
        cx="-30"
        cy="30"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={circumference + offset}
        transform="rotate(-90)"
        style={{ transition: "1.5s stroke-dashoffset" }}
      />
      <text
        x={percent === 100 ? "15" : "20"}
        y="35"
        fontSize="0.85rem"
        fontWeight="bold"
        fontStretch="50%"
        fill={dueColor}
      >
        {percent as number}%
      </text>
    </svg>
  );
};

export default ProgressRing;
