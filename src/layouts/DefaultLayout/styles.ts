import styled from "styled-components";

export const LayoutContainer = styled.div`
  min-height: calc(100vh - 10rem);
  max-width: 70rem;
  margin: 5rem auto;
  display: flex;
  padding: 2.5rem;
  background: ${props => props.theme['gray-800']};
  display: flex;
  flex-direction: column;
  border-radius: 8px;  
  `