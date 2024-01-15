import { MouseEventHandler, FormEventHandler } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  width: 100%;
  border-radius: 1.5rem;
  padding: 1rem;
  border: none;
  background: white;
  cursor: pointer;
  margin-bottom: 1rem;
  box-shadow: 0 0 3px #c6c6c6;
`;

type Props = {
  name: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  color?: string;
  background?: string;
  width?: string;
  margin?: string;
  marginTop?: string;
  handleSubmit?: FormEventHandler<HTMLFormElement>;
  fontSize?: string;
  padding?: string;
  borderRadius?: string;
  icon?: React.ReactNode;
};

const CustomButton = ({
  name,
  handleClick,
  color,
  background,
  width,
  margin,
  marginTop,
  handleSubmit,
  fontSize,
  padding,
  borderRadius,
  icon
}: Props) => {
  return (
    <Button
      onClick={handleClick}
      style={{
        color: color,
        background: background,
        width: width,
        margin: margin,
        fontSize: fontSize,
        padding: padding,
        marginTop: marginTop,
        borderRadius: borderRadius
      }}
      type="button"
    >
      {icon}
      {name}
    </Button>
  );
};

export default CustomButton;
