import styled from "styled-components";

interface AppContainerProps {
  direction: 'column' | 'row';
}
export const AppContainer = styled.div<AppContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.direction};
  width: 100%;
  
`;