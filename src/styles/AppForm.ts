import { unstable_Form as Form } from 'reakit'
import styled from 'styled-components';

export const AppForm = styled(Form)`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  margin: 0 auto;
  width: 100%;
  max-width: 512px;
`;