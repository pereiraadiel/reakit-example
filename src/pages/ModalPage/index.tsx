import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import { AppButton } from "../../styles/AppButton";
import { AppModal } from "../../styles/AppModal";
import { AppContainer } from "../../styles/AppContainer";
import { AppTitle } from "../../styles/AppTitle";
import { AppText } from "../../styles/AppText";

export const ModalPage = () => {
  const dialog = useDialogState();

  return (
    <>
      <DialogDisclosure {...dialog}>Open modal</DialogDisclosure>
      <AppModal 
        bgColor="#212529"
        {...dialog} 
        aria-label="Welcome"
      >
        <AppTitle>
          Bem-vindo ao modal teste!
        </AppTitle>
        <AppContainer direction="column">
          <AppText>
            Algum outro texto
          </AppText>
          <AppContainer direction="row" >
            <AppButton 
              onClick={dialog.hide}
              bgColor="#ff2233" 
              color="#FFF"
            >
              Cancelar
            </AppButton>
            <AppButton 
              onClick={dialog.hide}
              bgColor="#00dd99" 
              color="#000"
            >
              Continuar
            </AppButton>
          </AppContainer>
        </AppContainer>
      </AppModal>
    </>
  );
}
