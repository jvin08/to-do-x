import CustomButton from "./CustomButton";
import { GiPowerLightning } from "react-icons/gi";
import { useTodo } from "../contexts/todoContext";

type UseTodo = {
  togglePowerMode: () => void;
  powerMode: boolean;
};

const PowerMode = () => {
  const { togglePowerMode, powerMode } = useTodo() as UseTodo;

  return (
    <CustomButton
      handleClick={togglePowerMode}
      icon={
        <GiPowerLightning
          style={{
            position: "absolute",
            top: "0.9rem",
            left: "43%",
            color: powerMode ? "OrangeRed" : "lightgrey",
            transition: "color 1s",
            fontSize: "1.5rem"
          }}
        />
      }
      width="30%"
      name=""
    />
  );
};

export default PowerMode;
