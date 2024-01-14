import styled from "styled-components";

const Title = styled.p`
  margin: 2rem auto 1rem 1rem;
  text-align: left;
  font-size: 1rem;
`;
type Props = {
  name: string;
};

const CustomTitle = ({ name }: Props) => {
  return <Title>{name}</Title>;
};

export default CustomTitle;
