import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`;
const Main = styled.div`
  width: 100%;
  height: 250px;
  padding: 01.5rem;
  margin: 2rem auto;
  box-sizing: border-box;
  background: white;
  border-radius: 20px;
`;
const CheckList = styled.div``;
const TaskData = styled.div`
  width: 100%;
`;
const ContentBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;
const StatusBox = styled.div`
  margin-top: 2rem;
  font-size: 1rem;
`;
const Text = styled.p`
  margin: 0;
  color: grey;
`;
const StatusText = styled.div`
  margin: 0;
  display: flex;
  width: 100%;
`;
const StatusLevel = styled.p`
  margin: 0 0 0 auto;
  font-weight: bold;
`;
const BoldText = styled.span`
  font-weight: bold;
  color: #333;
`;
const iconStyle = {
  fontSize: "18px",
  marginRight: "0.5rem"
};
const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 0.7rem;
`;
const Label = styled.div`
  width: 20px;
  height: 20px;
  background: #3366ff;
  border-radius: 50%;
`;
const Name = styled.p`
  font-size: 1.2rem;
  margin: 0 auto 0 0.5rem;
`;
const BarBox = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  border-radius: 10px;
  height: 10px;
  background: lightgrey;
`;
const CheckItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.35rem 0.35rem 0.35rem 1.5rem;
  border-radius: 1.5rem;
  background: white;
  margin-top: 1rem;
  color: black;
  cursor: pointer;
`;
const Bar = styled.div`
  border-radius: 10px;
  height: 10px;
  background: #3366ff;
`;
const Check = styled.div`
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  background: #3366ff;
  margin-left: 0.5rem;
  padding-top: 0.65rem;
  color: white;
`;
const TimeSpan = styled.span`
  font-weight: bold;
  color: rgb(13, 153, 255);
`;
const CheckMarked = {
  color: "black",
  background: "#ade8ff"
};
const RepeatBtnStyle = {
  name: "Repeat Task",
  width: "51%",
  marginTop: "1.5rem",
  background: "#3366ff",
  color: "white",
  fontSize: "1.1rem",
  borderRadius: "2rem"
};
const DeleteBtnStyle = {
  name: "Delete Task",
  width: "51%",
  background: "AntiqueWhite",
  color: "black",
  fontSize: "1.1rem",
  borderRadius: "2rem"
};

export {
  Container,
  TaskData,
  ContentBox,
  Text,
  iconStyle,
  Header,
  Label,
  Name,
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
  CheckMarked,
  RepeatBtnStyle,
  DeleteBtnStyle,
  TimeSpan
};
