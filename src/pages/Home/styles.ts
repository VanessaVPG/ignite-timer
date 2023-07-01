import styled from "styled-components";

export const HomeContainer = styled.main`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
}
`;




const BaseCountDownButton = styled.button`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
border: 0;
border-radius: 8px;
gap: 0.5rem;
cursor: pointer;
font-weight: bold;
padding: 1.0625rem;
color: ${(props) => props.theme['gray-100']};

`
export const PlayButtonContainer = styled(BaseCountDownButton)`
background: ${(props) => props.theme['green-500']};

&:disabled{
  opacity: 0.7;
  cursor: not-allowed;
}
&:not(:disabled):hover {
  background: ${(props) => props.theme['green-700']};
}
`;
export const StopCountdownButtonContainer = styled(BaseCountDownButton)`
background: ${(props) => props.theme['red-500']};

&:not(:disabled):hover {
  background: ${(props) => props.theme['red-700']};
}
`;
