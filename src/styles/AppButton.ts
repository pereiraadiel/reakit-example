import styled from "styled-components";
import { Button } from "reakit";

interface AppButtonProps {
  bgColor: string;
  color: string;
}

export const AppButton = styled(Button)<AppButtonProps>`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-weight: bold;
  padding: 0.8rem;
  margin: 0.2rem;
  border: none;
  border-radius: 0.5rem;
  transition: 0.5s;
  &:not([disabled]):hover {
    cursor: pointer;
    background-color: ${props => { return props.bgColor + 'cc'}};
  }
  &:not([disabled]):active {
    background-color: ${props => { return props.bgColor + '88'}};
  }
`;