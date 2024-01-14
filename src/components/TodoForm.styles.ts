import styled from "styled-components";
const AddTasksBox = styled.div``;

const Edit = styled.p`
  position: absolute;
  color: white;
  cursor: pointer;
  font-size: 1.8rem;
  padding: 0.05rem 0 -0.05rem;
  width: 2.3rem;
  height: 2.3rem;
  top: -0.41rem;
  left: calc(100% - 2.76rem);
  border-radius: 50%;
  transition: all 1s;
`;
const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 1rem;
  border-radius: 1.5rem;
  border: 1px solid lightgrey;
  /* margin: 0rem auto 1rem; */
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;
const InputBox = styled.div`
  margin: 0;
`;

const Span = styled.p`
  width: 100%;
  padding: 1rem;
  border-radius: 1.5rem;
  border: 1px solid lightgrey;
  margin: 0rem;
  box-sizing: border-box;
  text-align: left;
  background: white;
  font-size: 0.8rem;
  cursor: pointer;
  color: grey;
`;
const TimeBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SubBoxLeft = styled.div`
  width: 50%;
  padding-right: 1rem;
`;
const SubBoxRight = styled.div`
  width: 50%;
  padding-left: 1rem;
`;
const Button = styled.button`
  position: absolute;
  top: 0.4rem;
  left: calc(100% - 2.8rem);
  background: rgb(13, 153, 255);
  border: none;
  color: white;
  font-size: 1.8rem;
  width: 2.3rem;
  border-radius: 50%;
  cursor: pointer;
`;
const CheckForm = styled.form`
  position: relative;
  margin: 0;
`;
const ButtonStyle = {
  color: "white",
  background: "rgb(13 153 245)",
  margin: "1.5rem 0 2rem",
  marginTop: "1.5rem",
  width: "40%",
  fontSize: "1.2rem",
  padding: "0.8rem 3rem"
};
const selectStyle = {
  fontSize: "1rem",
  color: "lightgrey",
  marginRight: "1rem",
  padding: "0.85rem 1rem",
  fontFamily: "'Inter', sans-serif"
};
export {
  AddTasksBox,
  ButtonStyle,
  Input,
  Button,
  SubBoxRight,
  SubBoxLeft,
  TimeBox,
  CheckForm,
  Span,
  Edit,
  InputBox,
  selectStyle
};
