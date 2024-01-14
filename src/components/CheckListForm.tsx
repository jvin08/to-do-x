import  {
  useState,
  useRef,
  useEffect,
  MouseEvent,
  FormEvent
} from "react";
import {
  Input,
  Button,
  CheckForm,
  Span,
  Edit,
  InputBox
} from "./TodoForm.styles";

const closeStyle = {
  background: "rgba(245, 88, 88, 0.8)",
  rotate: "45deg",
  transition: "rotate 0.5s"
};

const inputStyle = {
  marginTop: "1rem"
};

type Props = {
  value: string;
  updateCheckList: (id: string, value: string) => void;
  deleteCheckItem: (e: MouseEvent<HTMLButtonElement>) => void;
  id: string;
};

const CheckListForm = ({
  value,
  updateCheckList,
  deleteCheckItem,
  id
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [updatedValue, setUpdatedValue] = useState<string>(value);
  const [focused, setFocused] = useState<boolean>(false);

  const handleClick = () => {
    setFocused((prev: boolean) => !prev);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof updatedValue === 'string') {
        updateCheckList(id, updatedValue);
      }

  };

  useEffect(() => {
    if(inputRef.current){
        focused && inputRef.current.focus();
    }
  }, [focused]);

  return (
    <CheckForm onSubmit={handleSubmit}>
      {focused ? (
        <InputBox>
          <Input
            id={id}
            type="text"
            ref={inputRef}
            className="input"
            onBlur={handleClick}
            value={updatedValue}
            onChange={(e) => setUpdatedValue(e.target.value)}
            placeholder="Add Item..."
            style={inputStyle}
          />
          <Edit
            data-edit={id}
            style={{background: "Chocolate"}}
            onClick={()=>handleClick()}
          >
            ⤾
          </Edit>
        </InputBox>
      ) : (
        <InputBox>
          <Span onClick={() => handleClick()} style={inputStyle}>
            {updatedValue.length ? updatedValue : "Update Item..."}
          </Span>
          <Button
            data-delete={id}
            type="submit"
            onClick={deleteCheckItem}
            style={closeStyle}
          >
            +
          </Button>
        </InputBox>
      )}
    </CheckForm>
  );
};

export default CheckListForm;
