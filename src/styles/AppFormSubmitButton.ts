import { unstable_FormSubmitButton as FormSubmitButton } from 'reakit'
import styled from 'styled-components';

export const AppFormSubmitButton = styled(FormSubmitButton)`
  color: #FFF;
  background-color: #56f;
  border: none;
  width: 100%;
  border-radius: 0.5rem;
  padding: 1rem;
  transition: 0.5s;
  &:not([disabled]):hover {
    cursor: pointer;
    background-color: #45f;
  }
  &:not([disabled]):active {
    background-color: #67f;
  }
`;