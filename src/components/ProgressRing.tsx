import { useState, useEffect } from "react";
import { useTodo } from "../contexts/todoContext";

type Todo = {
  percent: Number;
};
type UseTodo = {
  dueDateColor: (todo: Todo) => string;
};

const ProgressRing = ({ todo }: { todo: Todo }) => {
  const { dueDateColor } = useTodo() as UseTodo;
  const [offset, setOffset] = useState(100 - (todo.percent as number));
  const [percent, setPercent] = useState(todo.percent);

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
