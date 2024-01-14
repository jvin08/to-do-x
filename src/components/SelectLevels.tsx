import styled from "styled-components";
import { useState, MouseEvent } from "react";
import CustomTitle from "./CustomTitle";

const Container = styled.div`
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98%;
  padding: auto 1rem;
`;
const InputBox = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  &:hover {
    background: #f6f6f6;
  }
`;
const Label = styled.label`
  font-size: 0.8rem;
  position: absolute;
  top: -0.3rem;
  left: 0;
  width: 1.8rem;
  height: 1.8rem;
  padding-top: 0.35rem;
  color: black;
  border-radius: 50%;
  background: #ceebfd;
  cursor: pointer;
`;
const Input = styled.input`
  padding: 1rem;
`;

const selected = {
  color: "white",
  background: "#3baff7"
};

type Props = {
  name: string;
  eventHandler: (value: string) => void;
  currentLevel: number;
};

const SelectLevels = ({ name, eventHandler, currentLevel }: Props) => {
  const levels = new Array(10).fill(0).map((_, i) => i + 1);
  const [levelValue, setLevelValue] = useState(Number(currentLevel));

  const handleSelect = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLevelValue(Number((e.target as HTMLInputElement).value));
    eventHandler((e.target as HTMLInputElement).value);
  };
  return (
    <Container>
      <CustomTitle name={name} />
      <Wrapper>
        {levels.map((level) => {
          return (
            <InputBox key={name + "_" + level}>
              <Label
                htmlFor={name + "_" + level}
                style={levelValue === level ? selected : null}
              >
                {level}
              </Label>
              <Input
                id={name + "_" + level}
                type="radio"
                name="level"
                value={level}
                onClick={(e) => handleSelect(e)}
              />
            </InputBox>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default SelectLevels;
