import styled from "styled-components";

const Container = styled.div`
  position: relative;
  box-shadow: 0 0 5px lightgrey;
  border-radius: 20px;
`;
const Wrapper = styled.div`
  width: 480px;
  min-height: 190px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  background: white;
  border-radius: 20px;
`;
const Check = styled.div`
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background: #ade8ff;
  margin-left: 0.5rem;
  padding-top: 0.35rem;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 0.7rem;
  user-select: none;
`;
const Label = styled.div`
  width: 20px;
  height: 20px;
  background: #3366ff;
  border-radius: 50%;
`;
const Name = styled.p`
  margin: 0 auto 0 0.5rem;
  font-weight: bold;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  user-select: none;
`;
const TaskData = styled.div``;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
  font-size: 14px;
`;
const StatusBar = styled.div`
  margin: auto 0;
`;
const Text = styled.p`
  margin: 0.35rem;
  color: grey;
`;
const Span = styled.span`
  color: black;
  margin-left: 0.5rem;
`;
const TimeSpan = styled.span`
  font-weight: bold;
  color: rgb(13, 153, 255);
`;
const linkStyle = {
  textDecoration: "none",
  color: "black",
  marginRight: "0.5rem"
};
const editLinkStyle = {
  textDecoration: "none",
  color: "grey",
  background: "#ADE8FF",
  borderRadius: "50%",
  width: "25px",
  height: "25px"
};
const iconStyle = {
  fontSize: "18px",
  marginRight: "0.5rem"
};
const editIconStyle = {
  marginLeft: "0.40rem",
  marginTop: "0.25rem"
};
const checkIconStyle = {
  marginLeft: "0.30rem",
  opacity: "0.4",
  cursor: "pointer"
};
const detailsIconStyle = {
  marginLeft: "0.25rem",
  marginBottom: "0.65rem",
  color: "grey",
  cursor: "pointer"
};
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
`;
const Tag = styled.p`
  margin: 0.15rem 0.5rem 0 0;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  background: #e6ecff;
`;
export {
  Wrapper,
  Container,
  Check,
  Header,
  Label,
  Name,
  Main,
  TaskData,
  ContentBox,
  StatusBar,
  Text,
  linkStyle,
  iconStyle,
  editLinkStyle,
  editIconStyle,
  checkIconStyle,
  detailsIconStyle,
  Tags,
  Tag,
  Span,
  TimeSpan
};
