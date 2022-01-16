import { Dialog } from 'reakit/Dialog';
import styled from 'styled-components';

interface AppModalProps {
  bgColor: string;
}

export const AppModal = styled(Dialog)<AppModalProps>`
  position: absolute;
  top: 3%;
  right: 0%;
  left: 0%;
  margin: 0 auto;
  background-color: ${props => props.bgColor};
  padding: 0.5rem;
  width: 100%;
  max-width: 512px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.8rem;
`;