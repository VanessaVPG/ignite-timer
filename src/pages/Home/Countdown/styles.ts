import styled from "styled-components";

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Roboto Mono', monospace;
  line-height: 8rem;
  gap: 1rem;
  line-height: 8rem;
  font-size: 10rem;
  span{
    padding: 2rem 1rem;
    border-radius: 8px;
    background: ${(props) => props.theme['gray-700']};
}
`;

export const Separator = styled.div`
padding: 2rem 0;
color: ${(props) => props.theme['green-500']};
width: 4rem;
display: flex;
justify-content: center;
overflow: hidden;
`;