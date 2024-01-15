import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 500px;
  text-align: center;
  padding-top: 3rem;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h3`
  margin: auto;
`;

const linkStyle = {
  width: "100",
  textDecoration: "none",
  color: "#333",
  display: "flex",
  boxShadow: "0 0 6px lightgrey",
  borderRadius: "50%"
};
const arrowStyle = {
  background: "white",
  fontSize: "3rem",
  borderRadius: "50%",
  border: "1px solid white",
  padding: "0.5rem"
};
const editLinkStyle = {
  position: "relative",
  textDecoration: "none",
  color: "grey",
  background: "white",
  borderRadius: "50%",
  width: "3rem",
  height: "3rem",
  boxShadow: "0 0 6px lightgrey"
};
const StyledLink = styled(Link)`
      position: relative;
        text-decoration: none;
        color: grey;
        background: white;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        box-shadow: 0 0 6px lightgrey;
`
const editIconStyle = {
  position: "absolute",
  top: "0.4rem",
  left: "0.5rem",
  marginLeft: "0.40rem",
  marginTop: "0.25rem",
  fontSize: "1.5rem"
};
const StyledEditIcon = styled(FaRegEdit)`
  position: absolute;
  top: 0.4rem;
  left: 0.5rem;
  margin-left: 0.4rem;
  margin-top: 0.25rem;
  font-size: 1.5rem;
`;
export {
  Container,
  StyledEditIcon,
  Header,
  Title,
  linkStyle,
  arrowStyle,
  editLinkStyle,
  editIconStyle,
  StyledLink
};
