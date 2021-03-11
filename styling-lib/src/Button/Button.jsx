import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => (props.secondary ? 'black' : 'white')};
  border: 1px solid black;
  border-radius: 3px;
  color: ${(props) => (props.secondary ? 'white' : 'black')};
  font-size: 1rem;
  height: 2rem;
  min-width: 8rem;
  padding: 0 0.5rem;
`;

export default Button;
